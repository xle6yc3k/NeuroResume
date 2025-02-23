<template>
  <header>
    <nav class="navbar">
      <!-- Логотип -->
      <router-link to="/" class="logo">
        <div class="neuro">Neuro</div>.Resume
      </router-link>

      <!-- Навигация -->
      <ul class="nav-links" v-if="!isCollapsed">
        <li>
          <router-link to="/" :class="{ active: currentRoute === '/' }">Главная</router-link>
        </li>
        <li>
          <router-link to="/resume-builder" :class="{ active: currentRoute === '/resume-builder' }">Создать резюме</router-link>
        </li>
        <li>
          <router-link to="/profile" class="profile-btn" :class="{ click: currentRoute === '/profile' }">Профиль</router-link>
        </li>
      </ul>

      <!-- Бургер-меню -->
    <button class="burger-menu" @click="toggleMenu" v-if="isCollapsed">
      ☰
    </button>

    <!-- Выпадающее меню -->
    <ul class="dropdown-menu" v-if="isDropdownVisible">
      <li><router-link to="/" @click="toggleMenu">Главная</router-link></li>
      <li><router-link to="/resume-builder" @click="toggleMenu">Создать резюме</router-link></li>
      <li><router-link to="/profile" @click="toggleMenu">Профиль</router-link></li>
    </ul>
    </nav>
  </header>
</template>



<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "NavBar",
  setup() {
    const route = useRoute();
    const isCollapsed = ref(false);
    const isDropdownVisible = ref(false);

    const navLinks = [
      { name: "Главная", path: "/" },
      { name: "Создать резюме", path: "/resume-builder" },
      { name: "Профиль", path: "/profile" },
    ];

    const currentRoute = computed(() => route.path);

    const currentPageName = computed(() => {
      const currentLink = navLinks.find((link) => link.path === route.path);
      return currentLink ? currentLink.name : "Меню";
    });

    const updateNavbarState = () => {
      isCollapsed.value = window.innerWidth <= 768;
    };

    const toggleMenu = () => {
      isDropdownVisible.value = !isDropdownVisible.value;
    };

    onMounted(() => {
      window.addEventListener("resize", updateNavbarState);
      updateNavbarState();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateNavbarState);
    });

    return {
      isCollapsed,
      isDropdownVisible,
      toggleMenu,
    };
  },
};
</script>


<style>
.navbar {
  position: fixed; 
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 95%; 
  height: 70px; 
  border-radius: 20px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

body {
  padding-top: 90px;
}

/* Логотип */
.logo {
  font-size: 1.5em;
  font-weight: 600;
  text-decoration: none;
  color: #5A3E2B;
  transition: transform 0.3s ease;
  display: block;
  position: absolute;
  align-items: center;
  position: absolute;
  left: 5%;
  white-space: nowrap;
  flex-grow: 1;
  text-align: center;
}

.logo:hover {
  color: #8B5E3C;
}

.neuro {
  color: #5A3E2B;
  display: inline;
}

/* Навигация */
.nav-links {
  display: flex;
  list-style: none;
  position: absolute;
  gap: 20px;
  right: 5%;
}

.nav-links li {
  display: flex;
  align-items: center;
}

.nav-links a {
  position: relative; /* Нужно для псевдоэлемента */
  text-decoration: none;
  padding: 10px 15px;
  color: #5A3E2B;
  font-weight: 500;
  transition: color 0.3s ease;
}

/* Добавляем псевдоэлемент для линии */
.nav-links a::after {
  content: "";
  position: absolute;
  bottom: 0; /* Линия снизу */
  left: 0;
  width: 0; /* Начинаем с 0 */
  height: 2px; /* Толщина линии */
  background-color: #8B5E3C; /* Цвет линии */
  transition: width 0.3s ease-in-out;
}

/* Для активной ссылки сразу показываем линию */
.nav-links .active::after {
  width: 100%;
}


.nav-links a:hover {
  color: #8B5E3C;
}

/* Кнопка "Профиль" */
.nav-links .profile-btn {
  color: #8B5E3C !important;
  border: 1px solid #8B5E3C;
  border-radius: 20px;
  padding: 8px 15px;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-links .profile-btn:hover {
  color: white !important;
  background-color: #8B5E3C;
}

/* Выпадающий список */
.dropdown-menu {
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  background-color: white;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.dropdown-menu a {
  text-decoration: none; 
  color: #000;
  transition: color 0.3s ease;
}

.dropdown-menu a:hover {
  color: #8B5E3C;
}

/* Показываем выпадающее меню, когда оно активно */
.dropdown-menu.show {
  display: flex;
  flex-direction: column;
}

/* Бургер-меню */
.burger-menu {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #8B5E3C;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* Мобилка */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .logo {
    text-align: center;
    display: block;
    top: 21%;
  }

  .nav-links {
    width: 100%;
    display: none;
    justify-content: center;
    margin-top: 15px;
  }

  .dropdown {
    width: 90%;
    border: 2px;
    margin-top: 10px;
    text-align: center;
  }

  .dropdown-button {
    position: absolute;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    background-color: #8B5E3C;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .burger-menu {
    display: block;
  }
}

</style>

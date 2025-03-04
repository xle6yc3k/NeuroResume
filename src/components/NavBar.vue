<template>
  <nav ref="navRef" 
    class="navbar max-w-[700px] w-full flex justify-center py-4 fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 px-6 py-3 rounded-3xl"
    :class="{ 'bg-[var(--primary-dark)]/50 backdrop-blur-2xl shadow-lg': isScrolled, 'bg-transparent': !isScrolled }">
    <ul class="relative flex font-medium text-[var(--text-light)]" ref="navList">
      <!-- Индикатор, позиция которого рассчитывается динамически -->
      <div class="indicator absolute bg-[var(--text-light)]/20 rounded-3xl transition-all duration-300 ease-in-out" :style="indicatorStyle"></div>
      
      <!-- Навигационные ссылки -->
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        class="relative cursor-pointer rounded-lg transition-all duration-300 z-10"
        :class="{ 'text-[var(--text-light)]': activeIndex === index, 'text-[var(--text-light)]/70 hover:text-[var(--text-light)]': activeIndex !== index }"
        @click="navigate(link.path, index)"
      >
        {{ link.name }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Ссылки для навбара
const navLinks = ref([
  { name: 'Главная', path: '/' },
  { name: 'Создать резюме', path: '/resume' },
  { name: 'Анализ вакансий', path: '/analyse' },
  { name: 'Профиль', path: '/profile' },
])

const activeIndex = ref(0)
const route = useRoute()
const router = useRouter()
const isScrolled = ref(false)

// Обработчик скролла
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50 // Если прокрутили > 50px, затемняем
}

// Добавляем слушатель прокрутки
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Удаляем слушатель при размонтировании
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Рефы для элементов
const navRef = ref(null)
const navList = ref(null)
const navItems = ref([])

// Стили для индикатора (позиция и размеры вычисляются динамически)
const indicatorStyle = ref({
  left: '0px',
  width: '0px',
  top: '0px',
  height: '40px'
})

// Функция для обновления позиции и размеров индикатора
const updateIndicator = () => {
  nextTick(() => {
    const activeEl = navItems.value[activeIndex.value]
    if (activeEl) {
      const { offsetLeft, clientWidth, offsetTop, clientHeight } = activeEl
      const indicatorHeight = 40
      indicatorStyle.value = {
        left: offsetLeft + 'px',
        width: clientWidth + 'px',
        top: (offsetTop + clientHeight / 2 - indicatorHeight / 2) + 'px',
        height: indicatorHeight + 'px'
      }
    }
  })
}

// Обновление активного индекса и индикатора при изменении маршрута
const updateActiveIndex = async () => {
  await nextTick()
  const index = navLinks.value.findIndex(link => link.path === route.path)
  if (index !== -1) {
    activeIndex.value = index
    updateIndicator()
  }
}

// Функция навигации с обновлением индикатора
const navigate = (path, index) => {
  router.push(path)
  activeIndex.value = index
  updateIndicator()
}

// При монтировании собираем все li элементы и устанавливаем слушатель изменения размера экрана
onMounted(() => {
  navItems.value = navRef.value.querySelectorAll('li')
  updateActiveIndex()
  window.addEventListener('resize', updateIndicator)
})

// Удаляем слушатель при размонтировании
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIndicator)
})

// Обновляем активный индекс при смене маршрута
watch(route, updateActiveIndex)
</script>

<style scoped>
nav {
  backdrop-filter: blur(10px);
  transition: background 0.3s ease-in-out;
}

ul {
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

li {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
}

/* Адаптивность для средних экранов */
@media (max-width: 768px) {
  .navbar {
    max-width: 400px;
    min-width: 395px;
  }
  ul {
    gap: 0rem;
  }
  li {
    padding: 0.5rem 0.5rem;
    font-size: 0.7rem;
  }
}

.indicator {
  position: absolute;
  transition: left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out;
  border-radius: 9999px;
}
</style>

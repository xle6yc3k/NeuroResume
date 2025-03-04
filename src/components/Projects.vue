<template>
    <section id="projects" class="max-w-6xl mt-16 mx-auto px-10">
      <h2 class="text-5xl font-bold text-[var(--text-light)] font-acorn mb-12">Как это работает?</h2>
      <div class="grid gap-12 masonry-grid">
        <template v-for="(project, index) in projects" :key="index">
          <div
            class="relative p-8 rounded-3xl shadow-2xl text-[var(--text-light)] transition-all duration-300 group hover:scale-105 hover:shadow-3xl overflow-hidden"
            :class="getSizeClass(index)"
            :style="{ background: project.bgColor }"
          >
            <!-- Заголовок -->
            <h3 class="text-2xl font-bold font-gt">{{ project.title }}</h3>
            <p class="font-semibold">{{ project.description }}</p>
  
            <!-- Фоновая иконка (до наведения) -->
            <div class="absolute bottom-[-20px] right-[-20px] text-[var(--text-light)]/30 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-6 group-hover:right-6 group-hover:text-[var(--text-light)]">
              <i :class="`${project.icon} text-8xl`"></i>
            </div>
          </div>
        </template>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed } from "vue";

  const projects = [
    { icon: 'fas fa-user', title: 'Заполни данные', description: 'Введи информацию о себе для генерации резюме.', bgColor: "linear-gradient(135deg, #C19BFF, #9D00FF)" },
    { icon: 'fas fa-palette', title: 'Выбери стиль', description: 'Настрой визуальный стиль резюме под себя.', bgColor: "linear-gradient(135deg, #A0E6E3, #4CB8C4)" },
    { icon: 'fas fa-magic', title: 'Оптимизируй', description: 'Используй AI для улучшения и подбора ключевых слов.', bgColor: "linear-gradient(135deg, #F8C8A0, #D87C5B)" },
    { icon: 'fas fa-download', title: 'Скачай и отправь', description: 'Скачай PDF и отправь работодателю!', bgColor: "linear-gradient(135deg, #7289DA, #4B6FA4)" },
  ];
   
  const windowWidth = ref(window.innerWidth);

    // Следим за изменением ширины окна
    const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
    };

    // Добавляем обработчик события при монтировании
    onMounted(() => {
    window.addEventListener("resize", updateWindowWidth);
    });

    // Убираем обработчик при размонтировании
    onUnmounted(() => {
    window.removeEventListener("resize", updateWindowWidth);
    });

    // Функция для определения классов карточек (с реактивной шириной)
    const getSizeClass = computed(() => (index) => {
    if (windowWidth.value < 951) return "col-span-5 w-[89%] h-[350px] mx-auto";

    const isOddRow = Math.floor(index / 2) % 2 === 0;
    return index % 2 === 0
        ? isOddRow
        ? "col-span-2 h-[350px]" // Квадрат в нечетной строке (первая колонка)
        : "col-span-3 h-[350px]" // Прямоугольник в четной строке (две колонки)
        : isOddRow
        ? "col-span-3 h-[350px]" // Прямоугольник в нечетной строке (две колонки)
        : "col-span-2 h-[350px]"; // Квадрат в четной строке (последняя колонка)
    });
    </script>

  
  <style scoped>
  /* Masonry Grid */
  .masonry-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 60px; /* Увеличенные отступы */
  }
  
  /* Эффект анимации иконок */
  .group:hover .icon-animation {
    transform: rotate(10deg) scale(1.2);
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 950px) {
    .masonry-grid {
        grid-template-columns: repeat(1, 1fr);
    }
  }
  </style>
  
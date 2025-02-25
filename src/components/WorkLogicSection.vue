<template>
    <section class="how-it-works fade-up">
      <div class="container">
        <h2 class="section-title text-center">Как это работает?</h2>
  
        <!-- Линия с шагами -->
        <div class="timeline">
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            class="timeline-step" 
            :class="{ 'active': isVisible }"
            ref="stepElements"
          >
            <div class="icon-circle">
              <i :class="step.icon"></i>
            </div>
            <h4 class="step-title">{{ step.title }}</h4>
            <p class="step-text">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const steps = ref([
    { icon: 'fas fa-user', title: 'Заполни данные', text: 'Введи информацию о себе для генерации резюме.' },
    { icon: 'fas fa-palette', title: 'Выбери стиль', text: 'Настрой визуальный стиль резюме под себя.' },
    { icon: 'fas fa-magic', title: 'Оптимизируй', text: 'Используй AI для улучшения и подбора ключевых слов.' },
    { icon: 'fas fa-download', title: 'Скачай и отправь', text: 'Скачай PDF и отправь работодателю!' },
  ]);
  
  const stepElements = ref([]);
  const isVisible = ref(false);
  
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    }, { threshold: 0.3 });
  
    stepElements.value.forEach((el) => observer.observe(el));
  });
  </script>
  
  <style>
  /* 🔹 Основная секция */
  .how-it-works {
    background-color: #f5ebe0;
    padding: 60px 0;
    text-align: center;
  }
  
  /* 🔹 Заголовок */
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    color: #3b2f2f;
    margin-bottom: 40px;
  }
  
  /* 🔹 Контейнер шагов */
  .timeline {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* 🔹 Линия соединения шагов */
  .timeline::after {
    content: "";
    position: absolute;
    top: 35px;
    left: 10%;
    width: 80%;
    height: 4px;
    background-color: #8b5e3c;
    z-index: 0;
  }
  
  /* 🔹 Шаг */
  .timeline-step {
    text-align: center;
    position: relative;
    z-index: 1;
    flex: 1;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  /* 🔹 Анимация появления */
  .timeline-step.active {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* 🔹 Круглая иконка */
  .icon-circle {
    width: 60px;
    height: 60px;
    background-color: #8b5e3c;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: 0 auto 15px;
  }
  
  /* 🔹 Заголовок шага */
  .step-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #3b2f2f;
    margin-bottom: 5px;
  }
  
  /* 🔹 Описание шага */
  .step-text {
    font-size: 1rem;
    color: #6d4c2f;
    max-width: 200px;
    margin: 0 auto;
  }
  
  /* 🔹 Адаптация */
  @media (max-width: 768px) {
    .timeline {
      flex-direction: column;
      align-items: center;
    }
  
    .timeline::after {
      width: 4px;
      height: 100%;
      left: 50%;
      top: 0;
    }
  
    .timeline-step {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 40px;
    }
  
    .timeline-step:last-child {
      margin-bottom: 0;
    }
  }
  </style>
  
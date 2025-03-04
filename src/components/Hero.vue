<template>
    <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background-main)]">
      <!-- Фоновое видео -->
      <video
        class="absolute top-0 left-0 w-full h-full object-cover filter blur-xl"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="../assets/video/footage2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      <!-- Градиентный оверлей для плавного перехода -->
      <div class="video-overlay"></div>
  
      <!-- Оверлей для затемнения видео -->
      <div class="absolute top-0 left-0 w-full h-full bg-[var(--background-fade)]"></div>
  
      <!-- Контент Hero (заголовок и кнопка) -->
      <div class="relative z-10 flex flex-col items-center justify-center text-center">
        <div class="max-w-2xl px-4">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-[var(--text-light)]">
            Neuro.Resume
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-[var(--text-light)]">
            Построй своё резюме с искусством и точностью
          </p>
          <a href="#projects">
            <button
              class="px-6 py-3 bg-[var(--background-cta)] text-[var(--text-main)] font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-transparent hover:border-[var(--background-cta)] hover:border-1 transition-shadow"
            >
              Вперёд
            </button>
          </a>
        </div>
      </div>
    </section>
  </template>  
  
  <script setup>
  </script>
  
  <style scoped>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  /* Градиентный оверлей для плавного перехода видео в фон */
  .video-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%; /* Высота градиента */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, var(--background-main) 99%);
    pointer-events: none; /* Чтобы не мешало кликам */
  }
  </style>
  
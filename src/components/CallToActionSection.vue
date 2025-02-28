<template>
  <div class="cta-wrapper py-5">
    <section class="cta-section text-center py-5 fade-in-left rounded-4">
      <div class="container">
        <h2 class="cta-title">Готов к созданию идеального резюме?</h2>
        <router-link to="/resume-builder" class="btn cta-btn rounded-4">Начать бесплатно</router-link>
      </div>
    </section>
  </div>
  </template>
  
  <style>
  .cta-wrapper {
    background-color: #f5ebe0;
    position: relative;
    height: 150px;
  }
  
  /* 🔹 Стили Call To Action */
  .cta-section {
    background: #8b5e3c;
    color: #f5ebe0;
    height: 300px;
    width: 60%;
    position: relative;
    margin: 0 auto;
    top: -20%;
    z-index: 10;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  /* 🔹 Заголовок */
  .cta-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  /* 🔹 Кнопка */
  .cta-btn {
    color: #f5ebe0 !important;
    border-color: #f5ebe0 !important;
    padding: 10px 18px !important;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 8px;
    transition: 0.3s;
  }
  
  .cta-btn:hover {
    background: #f5ebe0 !important;
    color: #8b5e3c !important;
  }
  
  /* 🔹 Для мобильных устройств */
  @media (max-width: 768px) {
    .cta-wrapper {
      height: 200px;
    }
    .cta-section {
      width: 80%;
      transform: translateY(20px);
    }
  }
  </style>
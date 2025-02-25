<template>
    <section class="cta-section text-center py-5">
      <div class="container">
        <h2 class="cta-title">Готов к созданию идеального резюме?</h2>
        <router-link to="/resume-builder" class="btn cta-btn">Начать бесплатно</router-link>
      </div>
    </section>
  </template>
  
  <style>
  .cta-section {
    background: #8b5e3c;
    color: white;
  }
  
  .cta-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .cta-btn {
    background: white;
    color: #8b5e3c;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 8px;
    transition: 0.3s;
  }
  
  .cta-btn:hover {
    background: #3b2f2f;
    color: white;
  }
  </style>
  
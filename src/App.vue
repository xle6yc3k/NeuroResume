<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="relative min-h-screen text-[var(--text-light)] bg-[var(--background-main)]">
    <div class="absolute inset-0 -z-10 animated-bg"></div>
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
</style>
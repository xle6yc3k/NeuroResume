<script setup>
import Parallax from '@/components/Parallax.vue'
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>

  <div class="relative min-h-screen text-[var(--text-light)] gradient-page">
    <div class="absolute inset-0 -z-10 animated-bg"></div>
    
    <Parallax class="absolute inset-0" />
    <NavBar />

    <RouterView v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>

    <Footer />
  </div>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>

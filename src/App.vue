<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
import { ref } from "vue";
import LiquidTransition from "./components/LiquidTransition.vue";

const transitionEffect = ref(null);

const beforeEnter = async (el) => {
  await new Promise((resolve) => {
    transitionEffect.value.animateTransition(resolve);
  });
};
</script>

<template>
  <LiquidTransition ref="transitionEffect" />

  <div class="relative min-h-screen text-[var(--text-light)] bg-[var(--background-main)]">
    <div class="absolute inset-0 -z-10 animated-bg"></div>
    <NavBar />

    <RouterView v-slot="{ Component }">
      <transition mode="out-in" @before-enter="beforeEnter">
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

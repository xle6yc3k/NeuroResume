<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen font-sans">
    <nav class="bg-primary text-white p-4">
      <div class="container mx-auto flex items-center justify-between">
        <router-link to="/" class="text-xl font-bold">NeuroResume</router-link>
        <div class="space-x-4">
          <router-link to="/resume" class="hover:text-secondary transition-colors">Resume</router-link>
          <router-link to="/profile" class="hover:text-secondary transition-colors">Profile</router-link>
          <router-link to="/analyze" class="hover:text-secondary transition-colors">Analysis</router-link>
        </div>
      </div>
    </nav>
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>
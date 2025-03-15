<script setup lang="ts">
import { useProfileStore } from '@/store/profile'

const profile = useProfileStore()
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-primary mb-6">Welcome to NeuroResume</h1>
    <p class="text-lg mb-8">Create professional resumes with AI-powered insights</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <router-link
        to="/resume"
        class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <h2 class="text-2xl font-semibold mb-4">Create Resume</h2>
        <p>Build your professional resume with our intuitive builder</p>
      </router-link>
      
      <router-link
        to="/analyze"
        class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <h2 class="text-2xl font-semibold mb-4">Job Analysis</h2>
        <p>Get AI-powered insights for your target positions</p>
      </router-link>
    </div>
  </main>
</template>
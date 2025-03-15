<script setup lang="ts">
import { useProfileStore } from '@/store/profile'

const profile = useProfileStore()
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Resume Builder</h1>
    <div class="bg-white rounded-lg shadow-md p-6">
      <p class="text-lg mb-4">Start building your professional resume</p>
      <!-- Resume builder content will go here -->
    </div>
  </div>
</template>
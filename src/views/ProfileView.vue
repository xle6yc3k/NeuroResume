<script setup lang="ts">
import { useProfileStore } from '@/store/profile'

const profile = useProfileStore()
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Profile</h1>
    <div class="bg-white rounded-lg shadow-md p-6">
      <form @submit.prevent class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1" for="firstName">First Name</label>
          <input
            id="firstName"
            v-model="profile.firstName"
            type="text"
            class="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="lastName">Last Name</label>
          <input
            id="lastName"
            v-model="profile.lastName"
            type="text"
            class="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="email">Email</label>
          <input
            id="email"
            v-model="profile.email"
            type="email"
            class="w-full p-2 border rounded"
          />
        </div>
      </form>
    </div>
  </div>
</template>
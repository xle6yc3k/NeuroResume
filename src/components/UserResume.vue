<template>
  <div class="bg-[var(--background-section)] bg-opacity-30 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
    <h2 class="text-4xl font-bold bg-gradient-to-r from-[var(--text-secondary)] to-[var(--text-light)] bg-clip-text text-transparent mb-8">
      Ваши резюме
    </h2>
    
    <div class="grid grid-cols-1 gap-6">
      <div
        v-for="(resume, index) in resumes"
        :key="index"
        class="resume-card group relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
        <div class="relative p-6 flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-[var(--text-light)]">{{ resume.title }}</h3>
            <p class="text-sm text-[var(--text-secondary)]">{{ resume.date }}</p>
          </div>
          <div class="flex gap-3">
            <button class="action-btn bg-[var(--background-section)] bg-opacity-50 hover:bg-opacity-100">
              <i class="fas fa-download"></i>
            </button>
            <button class="action-btn bg-[var(--background-section)] bg-opacity-50 hover:bg-opacity-100">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn bg-red-500 bg-opacity-20 hover:bg-opacity-30">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        class="resume-card group cursor-pointer"
        @click="addResume"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] opacity-10 group-hover:opacity-20 transition-all duration-300"></div>
        <div class="relative p-6 flex items-center justify-center">
          <div class="text-center">
            <i class="fas fa-plus text-4xl text-[var(--text-light)] mb-2 group-hover:scale-110 transition-transform duration-300"></i>
            <p class="text-[var(--text-light)]">Создать новое резюме</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const resumes = ref([
  { title: "Резюме для Frontend", date: "10 марта 2024" },
  { title: "Резюме для PM", date: "5 февраля 2024" }
]);

const addResume = () => {
  resumes.value.push({
    title: "Новое резюме",
    date: new Date().toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  });
};
</script>

<style scoped>
.resume-card {
  @apply relative rounded-2xl transition-all duration-300 border border-white/10;
}

.resume-card:hover {
  @apply transform scale-[1.02];
}

.action-btn {
  @apply p-2 rounded-lg text-[var(--text-light)] transition-all duration-300;
}
</style>
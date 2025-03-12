<template>
  <div
    class="relative min-h-screen overflow-hidden"
  >
    <!-- 🎆 Фон -->
    <JobParallaxBackground />

    <!-- 💬 Центр: Ввод -->
    <section class="h-screen flex flex-col justify-center items-center relative z-10">
      <JobInputPanel v-if="props.phase === 'input'" @start-analysis="startAnalysis" />

      <!-- 👇 Подсказка прокрутки -->
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm text-center animate-bounce"
        v-if="props.phase === 'input' && !showFooter"
      >
        <i class="fas fa-arrow-down text-lg mb-1 block"></i>
        <span>Прокрути вниз</span>
      </div>
    </section>

    <!-- ⚙️ Анимация анализа -->
    <div class="relative z-10">
      <JobAnalysisVisualizer v-if="props.phase === 'visualizing'" />
      <JobAnalysisResult v-if="props.phase === 'result'" />
    </div>

    <!-- 📜 Расширенный футер -->
    <ExtendedFooter :visible="showFooter && props.phase === 'input'" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import JobParallaxBackground from '@/components/JobAnalysis/JobParallaxBackground.vue'
import JobInputPanel from '@/components/JobAnalysis/JobInputPanel.vue'
import JobAnalysisVisualizer from '@/components/JobAnalysis/JobAnalysisVisualizer.vue'
import JobAnalysisResult from '@/components/JobAnalysis/JobAnalysisResult.vue'
import ExtendedFooter from '@/components/JobAnalysis/ExtendedFooter.vue'

const props = defineProps({
  phase: String,
  setPhase: Function
})

const showFooter = ref(false)
let triggered = false

const handleWheel = (event) => {
  if (!triggered && event.deltaY > 0) {
    showFooter.value = true
    triggered = true
  }
}

onMounted(() => {
  props.setPhase('input')
  window.addEventListener('wheel', handleWheel, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel)
})

const startAnalysis = () => {
  props.setPhase('visualizing')
  setTimeout(() => {
    props.setPhase('result')
  }, 9999)
}
</script>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>

<template>
    <div class="transition-container" ref="transition">
      <svg viewBox="0 0 1440 320" class="liquid-mask">
        <path
          ref="wavePath"
          fill="url(#gradient)"
          d="M0,160L80,170C160,180,320,200,480,176C640,152,800,80,960,85.3C1120,91,1280,165,1360,202.7L1440,240V320H0Z"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6100ff" />
            <stop offset="100%" stop-color="#0099ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import gsap from "gsap";
  
  const transition = ref(null);
  const wavePath = ref(null);
  
  const animateTransition = (onComplete) => {
    gsap.fromTo(
      wavePath.value,
      { d: "M0,160L80,170C160,180,320,200,480,176C640,152,800,80,960,85.3C1120,91,1280,165,1360,202.7L1440,240V320H0Z" },
      {
        d: "M0,320L80,290C160,260,320,200,480,176C640,152,800,180,960,210C1120,240,1280,260,1360,270L1440,280V320H0Z",
        duration: 1.5,
        ease: "power2.inOut",
        repeat: 1,
        yoyo: true,
        onComplete,
      }
    );
  };
  
  onMounted(() => {
    transition.value.style.opacity = "0";
  });
  
  defineExpose({ animateTransition });
  </script>
  
  <style scoped>
  .transition-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 1;
    background: black;
    z-index: 9999;
  }
  
  .liquid-mask {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
  }
  </style>
  
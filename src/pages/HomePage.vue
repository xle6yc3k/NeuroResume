<template>
  <div>
    <HeroSection />
    <FunctionalSection />
    <WorkLogicSection />
    <AdvantagesSection />
    <CallToActionSection />
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import FunctionalSection from "../components/FunctionalSection.vue";
import WorkLogicSection from "../components/WorkLogicSection.vue";
import AdvantagesSection from "../components/AdvantagesSection.vue";
import CallToActionSection from "../components/CallToActionSection.vue";

export default {
  components: {
    HeroSection,
    FunctionalSection,
    WorkLogicSection,
    AdvantagesSection,
    CallToActionSection,
  },
};
</script>

<style scoped>
</style>
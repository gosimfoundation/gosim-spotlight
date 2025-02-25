<script setup>
import HeroSection from '@/components/ai2025/HeroSection.vue'
import WelcomeSection from "@/components/ai2025/WelcomeSection.vue";
import WhySection from "@/components/ai2025/WhySection.vue";
import HowItWorksSection from "@/components/ai2025/HowItWorksSection.vue";
import RulesSection from "@/components/ai2025/RulesSection.vue";
import NominateProjectSection from "@/components/ai2025/NominateProjectSection.vue";
import NewsletterSection from "@/components/ai2025/NewsletterSection.vue";
import FooterSection from "@/components/ai2025/FooterSection.vue";
import { onMounted } from 'vue'

onMounted(() => {
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }
})
</script>

<template>
  <main>
    <HeroSection />
    <WelcomeSection />
    <WhySection />
    <HowItWorksSection />
    <RulesSection />
    <NominateProjectSection />
    <NewsletterSection />
    <FooterSection />
  </main>
</template>

<script setup>
import HeroSection from '@/components/rust2025/HeroSection.vue'
import WelcomeSection from "@/components/rust2025/WelcomeSection.vue";
import WhySection from "@/components/rust2025/WhySection.vue";
import HowItWorksSection from "@/components/rust2025/HowItWorksSection.vue";
import RulesSection from "@/components/rust2025/RulesSection.vue";
import NominateProjectSection from "@/components/rust2025/NominateProjectSection.vue";
import NewsletterSection from "@/components/rust2025/NewsletterSection.vue";
import FooterSection from "@/components/rust2025/FooterSection.vue";
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

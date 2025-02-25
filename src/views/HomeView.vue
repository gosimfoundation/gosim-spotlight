<script setup>
import HeroSection from '@/components/HeroSection.vue'
import WelcomeSection from "@/components/WelcomeSection.vue";
import WhySection from "@/components/WhySection.vue";
import HowItWorksSection from "@/components/HowItWorksSection.vue";
import RulesSection from "@/components/RulesSection.vue";
import NominateProjectSection from "@/components/NominateProjectSection.vue";
import NewsletterSection from "@/components/NewsletterSection.vue";
import FooterSection from "@/components/FooterSection.vue";
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

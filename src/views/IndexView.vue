<script setup>
import HeaderLogo from "@/components/HeaderLogo.vue";
import SiteSelection from "@/components/SiteSelection.vue";
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
    <HeaderLogo />
    <SiteSelection />
  </main>
</template>

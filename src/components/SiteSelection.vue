<template>
  <div class="page-background min-h-screen flex flex-col">
    <div class="relative isolate overflow-hidden pt-12 flex-grow">
      <img src="@/assets/bg-global.webp" alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
      <div id="sites" class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <RouterLink to="/ai2025" class="site-link relative block overflow-hidden rounded-2xl shadow-2xl">
              <img src="@/assets/bg-paris-1.jpg" alt="Image 2" class="w-full h-full object-cover" />
              <div class="overlay absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center text-white transition-all duration-300">
                <h1 class="text-5xl font-bold">GOSIM AI Spotlight</h1>
                <p class="mt-6 text-xl">May 6-7 - Paris, France</p>
                <span class="mt-16 text-2xl">Apply or Nominate an AI Project</span>
              </div>
            </RouterLink>
            <RouterLink to="/rust2025" class="site-link relative block overflow-hidden rounded-2xl shadow-2xl">
              <img src="@/assets/bg-utrecht-1.jpg" alt="Image 1" class="w-full h-full object-cover" />
              <div class="overlay absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center text-white transition-all duration-300">
                <h1 class="text-5xl font-bold">GOSIM Rust Spotlight</h1>
                <p class="mt-6 text-xl">May 13 - Utrecht, The Netherlands</p>
                <span class="mt-16 text-2xl">Apply or Nominate a Rust Project</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import FooterSection from "@/components/FooterSection.vue";

</script>

<style scoped>
.page-background {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-link {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.site-link:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}

.site-link:hover .overlay {
  background-color: rgba(0, 0, 0, 0.7);
}

.overlay {
  transition: background-color 0.3s ease;
}
</style>
<template>
  <HeaderMenu :navigation="navigation" :mobileMenuOpen="mobileMenuOpen" />
  <div id="hero" class="bg-gray-600">
    <div class="relative isolate overflow-hidden pt-14">
      <img src="@/assets/bg-paris-1.jpg" alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              class="relative rounded-full px-3 py-1 text-2xl/6 text-gray-200 ring-1 ring-black/10 hover:ring-black/20">
              Winner showcase at  <a href='https://paris2025.gosim.org' class="text-indigo-600" target="_blank">GOSIM AI Paris </a>
              <a class="font-semibold text-white"
                @click="scrollToSection($event, '#nominate')"> • Nominate Project</a>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-balance text-5xl text-white sm:text-7xl">GOSIM AI Spotlight:</h1>
            <h1 class="text-balance text-5xl text-white sm:text-7xl">Exceptional AI</h1>
            <h1 class="text-balance text-5xl text-white sm:text-7xl">Open-Source Projects</h1>
            <div class="mx-20">
              <p class="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">Finalists will receive travel grant to attend the GOSIM AI 2025 conference in Paris, France
              </p>
            </div>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://cfp.gosim.org" @click="mobileMenuOpen = false"
                class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                target="_blank">Nominate Project</a>
              <a class="text-sm/6 font-semibold text-white"
                @click="scrollToSection($event, '#program')">Learn more
                <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderMenu from "@/components/HeaderMenu.vue";

const navigation = [
  { name: 'The Program', href: '#program' },
  { name: 'Why Participate', href: '#why' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Rules & Eligibility', href: '#rules' },
]

const mobileMenuOpen = ref(false)

const scrollToSection = (event, href) => {
  event.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    window.history.pushState({}, '', href)
  }
}
</script>

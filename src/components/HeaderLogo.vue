<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">GOSIM</span>
          <img class="h-8 w-auto" src="@/assets/spotlight-logo.svg" alt="" />
        </a>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
            <span class="sr-only">GOSIM</span>
            <img class="h-8 w-auto" src="@/assets/spotlight-logo.svg" alt="" />
          </RouterLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                @click="scrollToSection($event, item.href); mobileMenuOpen = false"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="py-6">
              <RouterLink
                to="/nominate"
                @click="mobileMenuOpen = false"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
              >
                Nominate Project
              </RouterLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

defineProps({
  darkFont: {
    type: Boolean,
    default: false
  }
})

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

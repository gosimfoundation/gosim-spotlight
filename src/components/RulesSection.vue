<template>
  <div id="rules" class="overflow-hidden bg-gray-600 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-indigo-400">Guidelines</h2>
            <p class="mt-2 text-pretty text-4xl font-semibold text-white sm:text-5xl">Rules & Eligibility</p>
            <p class="mt-6 text-lg/8 text-gray-300">To ensure fairness and inclusivity, GOSIM Rust Spotlight follows
              these guidelines:</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-4 w-4 text-indigo-400"
                    aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
          <a href="/#judging" @click="mobileMenuOpen = false"
            class="flex justify-end mt-10 text-md/6 font-bold text-white">Learn more about rules
            <span aria-hidden="true">→</span></a>
        </div>
        <img src="@/assets/spotlight-bg.png" alt="Product screenshot"
          class="mx-auto w-full max-w-[48rem] rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="2432" height="1442" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserCircleIcon, BoltIcon, UserGroupIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Eligibility',
    description: 'Projects must be open-source and hosted on a public Git server, with Rust as the primary programming language.',
    icon: UserCircleIcon,
  },
  {
    name: 'Activity',
    description: 'Projects should demonstrate active development or significant contributions within the last 12 months.',
    icon: BoltIcon,
  },
  {
    name: 'Community Values',
    description: "Nominated projects must align with Rust's core values of safety, concurrency, and inclusivity.",
    icon: UserGroupIcon,
  },
]
</script>

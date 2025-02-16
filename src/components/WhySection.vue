<template>
  <div id="why" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div class="col-span-2">
          <h2 class="text-base/7 font-semibold text-indigo-600">Everything you need</h2>
          <p class="mt-2 text-pretty text-4xl font-semibold text-gray-900 sm:text-5xl">Why Participate</p>
          <p class="mt-6 text-base/7 text-gray-600">Winners will be featured at RustWeek 2025 conference and on GOSIM websites, ensuring maximum exposure to the global Rust community.</p>
        </div>
        <dl class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-9">
            <dt class="font-semibold text-gray-900">
              <CheckIcon class="absolute left-0 top-1 h-4 w-4 text-indigo-600" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-2">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {CheckIcon} from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Visibility',
    description: 'Reach a global audience of developers, contributors, and tech enthusiasts.',
  },
  {
    name: 'Support',
    description: "Gain mentorship and resources from GOSIM's network of Rust experts.",
  },
  {
    name: 'Recognition',
    description: 'Showcase your project as a leader in the open-source Rust ecosystem.',
  },
  {
    name: 'Community Growth',
    description: 'Attract contributors and collaborators to help your project flourish.',
  },
]
</script>

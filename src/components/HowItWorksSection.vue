<template>
  <div id="how-it-works" class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base/7 font-semibold text-indigo-400">How It Works</h2>
        <p class="mt-2 text-pretty text-4xl font-semibold text-white sm:text-5xl lg:text-balance">Participating in GOSIM<br/>Spotlight is simple</p>
        <p class="mt-6 text-lg/8 text-gray-300">Each year, GOSIM Rust Spotlight will shine on a handful of incredible projects, giving them the attention they deserve. Nominees will be judged by an independent judging panel made up of industry experts.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-white">
              <component :is="feature.icon" class="h-4 w-4 flex-none text-indigo-400" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-300">
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MegaphoneIcon, ViewfinderCircleIcon, ShieldCheckIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Nomination',
    description: 'Anyone can nominate a project, including the developers themselves. Projects should be hosted on GitHub and written in Rust.',
    icon: MegaphoneIcon,
  },
  {
    name: 'Evaluation',
    description: 'Our panel of experts reviews the nominations, focusing on innovation, utility, and community impact.',
    icon: ViewfinderCircleIcon,
  },
  {
    name: 'Selection',
    description: 'Selected projects are featured on our website, newsletter, and social media channels, ensuring they reach a global audience.',
    icon: ShieldCheckIcon,
  },
]
</script>

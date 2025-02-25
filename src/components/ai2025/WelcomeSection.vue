<template>
  <div id="program" class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div class="max-w-4xl">
        <p class="text-base/7 font-semibold text-indigo-600">Introduction</p>
        <h1 class="mt-2 text-pretty text-4xl font-semibold text-gray-900 sm:text-5xl">Welcome to GOSIM AI Spotlight!
        </h1>
        <p class="mt-6 text-balance text-xl/8 text-gray-700">Are you building something revolutionary related to AI? GOSIM
          AI Spotlight is your launchpad to the world! This program offers early-stage, global AI projects a unique
          opportunity to shine at
           <a href='https://paris2025.gosim.org' class="text-indigo-600" target="_blank">GOSIM AI Paris </a>
          – Europe’s premier AI conference, taking place
          from May 6-7, 2025 in the city of lights, Paris, France.</p>
      </div>
      <section class="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
        <div class="lg:pr-8">
          <h2 class="text-pretty text-2xl font-semibold text-gray-900">The Program</h2>
          <p class="mt-6 text-base/7 text-gray-600">GOSIM AI Spotlight is designed to:</p>
          <div class="mt-8 space-y-6 text-base/7 text-gray-600">
            <div v-for="feature in features" :key="feature.title" class="flex items-start gap-3">
              <div class="flex-none">
                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600">
                  <component :is="feature.icon" class="h-4 w-4 flex-none text-white" aria-hidden="true" />
                </div>
              </div>
              <div>
                <strong class="font-semibold text-gray-900">{{ feature.title }}</strong> {{ feature.description }}
              </div>
            </div>
          </div>
          <p class="mt-8 text-base/7 text-gray-600">This year, 10+ winning projects will be selected and showcased at
            <a href='https://paris2025.gosim.org' class="mt-8 text-base/7 text-indigo-600" target="_blank">GOSIM AI 2025 </a>
              event in Paris, France.</p>
          <a class="flex justify-end mt-5 text-md/6 font-bold text-grey-900"
            @click="scrollToSection($event, '#why')">What else is included
            <span aria-hidden="true">→</span></a>
            <!-- <RouterLink to="#why" @click="mobileMenuOpen = false"
        class="flex justify-end mt-10 text-md/6 font-bold text-gray-600">What else is included
        <span aria-hidden="true">→</span></RouterLink> -->
        </div>
        <div class="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div
              class="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
              <img alt="" src="@/assets/why1.png" class="block size-full object-cover" />
            </div>
            <div
              class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
              <img alt=""
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                class="block size-full object-cover" />
            </div>
            <div
              class="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
              <img alt=""
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                class="block size-full object-cover" />
            </div>
            <div
              class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
              <img alt="" src="@/assets/why2.png" class="block size-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'

const features = [
  {
    name: 'Showcase Innovation',
    description: 'Highlight groundbreaking open-source AI related projects, showcasing their innovation and potential impact.',
    icon: CheckIcon,
  },
  {
    name: 'Amplify Recognition',
    description: 'Provide visibility and recognition for outstanding AI projects that deserve a wider audience and broader appreciation.',
    icon: CheckIcon,
  },
  {
    name: 'Build Community',
    description: 'Encourage collaboration and foster a sense of belonging within the AI ecosystem through shared goals and teamwork.',
    icon: CheckIcon,
  },
  {
    name: 'Empower Developers',
    description: 'Support talented developers working on exciting projects, ensuring they have opportunities to thrive and compete.',
    icon: CheckIcon,
  }
]

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

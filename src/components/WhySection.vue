<template>
  <div id="why" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div class="col-span-2">
          <h2 class="text-base/7 font-semibold text-indigo-600">Elevate your project</h2>
          <p class="mt-2 text-pretty text-4xl font-semibold text-gray-900 sm:text-5xl">Why Apply</p>
          <div class="mt-8 space-y-6 text-base/7 text-gray-600">
            <div v-for="item in items" :key="item" class="flex items-center gap-x-3">
              <CheckCircleIcon class="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <dt class="flex-auto text-base/7 font-semibold text-gray-900">{{ item.description }}</dt>
            </div>
          </div>
        </div>
        <dl class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-9">
            <dt class="flex items-center gap-x-3 text-base/7 font-semibold  text-gray-900">
              <component :is="feature.icon" class="h-12 w-12 flex-none text-indigo-400" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-2">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
      <a class="flex justify-end mt-5 text-md/6 font-bold text-grey-900"
        @click="scrollToSection($event, '#nominate')">What's Next
        <span aria-hidden="true">→</span></a>
    </div>
  </div>
</template>

<script setup>
import { ArrowTrendingUpIcon, CheckBadgeIcon, CheckCircleIcon, MegaphoneIcon, UserGroupIcon } from '@heroicons/vue/20/solid'

const items = [
  {
    description: 'Exclusive Showcase: Present your project at a dedicated demo booth, capturing the attention of Rust project leaders, developers, and enthusiasts from around the globe.',
  },
  {
    description: 'Travel Grants: Win travel grants to cover your flight and hotel accommodation, ensuring you can focus on what matters – your project!',
  },
  {
    description: 'Networking & Collaboration: Engage in a vibrant community setting, forge new collaborations, and connect with mentors and potential users.',
  },
  {
    description: 'Mentorship & Recognition: Gain valuable insights from Rust`s top minds and secure your place in the global Rust community spotlight.',
  },

]

const features = [
  {
    name: 'Visibility',
    description: 'Demo Day Experience: Compete for the chance to demo your work at Rustweek 2025, surrounded by peers and industry leaders. Reach a global audience of developers, contributors, and tech enthusiasts. ',
    icon: MegaphoneIcon,
  },
  {
    name: 'Support',
    description: "Gain mentorship and resources from GOSIM's network of Rust experts. The spotlight judges are amongst those who have committed to giving mentorship to the winning projects.",
    icon: UserGroupIcon,
  },
  {
    name: 'Recognition',
    description: 'Win & Shine: Top projects not only earn travel grants but also gain access to exclusive networking opportunities and global recognition.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Community Growth',
    description: 'Attract contributors and collaborators to help your project flourish. Showcase your project as a leader in front of one of the biggest gathering of the open-source Rust community.',
    icon: ArrowTrendingUpIcon,
  },
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

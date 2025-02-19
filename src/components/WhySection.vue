<template>
  <div id="why" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div class="col-span-2">
          <h2 class="text-base/7 font-semibold text-indigo-600">Elevate your project</h2>
          <p class="mt-2 text-pretty text-4xl font-semibold text-gray-900 sm:text-5xl">Why Participate</p>
          <div class="mt-10 max-w-3xl">
            <!-- <p class="mt-6 text-base/7 text-gray-600"> -->
            <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
              <li class="flex gap-x-3">
                <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Winners will be featured at RustWeek 2025 conference and on GOSIM websites, providing maximum exposure to the global Rust community.
              </li>
              <li class="flex gap-x-3">
                <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Travel grants available for those who are selected to present their projects at RustWeek 2025
              </li>
            </ul>
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
    </div>
  </div>
</template>

<script setup>
import { ArrowTrendingUpIcon, CheckBadgeIcon, CheckCircleIcon, MegaphoneIcon, UserGroupIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Visibility',
    description: 'Reach a global audience of developers, contributors, and tech enthusiasts. Winning projects will have a chance to display their projects at the RustWeek conference infront of other Rust developers.',
    icon: MegaphoneIcon,
  },
  {
    name: 'Support',
    description: "Gain mentorship and resources from GOSIM's network of Rust experts. The spotlight judges are amongst those who have committed to giving mentorship to the winning projects.",
    icon: UserGroupIcon,
  },
  {
    name: 'Recognition',
    description: 'Travel grants available for those who are selected to present their projects at RustWeek 2025. Display official "GOSIM Spotlight Winner" badges and icons on your project or websites.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Community Growth',
    description: 'Attract contributors and collaborators to help your project flourish. Showcase your project as a leader in front of one of the biggest gathering of the open-source Rust community.',
    icon: ArrowTrendingUpIcon,
  },
]
</script>

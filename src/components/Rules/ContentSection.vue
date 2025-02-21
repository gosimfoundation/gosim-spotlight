<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-xl text-base/7 text-gray-700">
      <p class="text-base/7 font-semibold text-indigo-600">Introducing</p>
      <h1 class="mt-2 text-pretty text-4xl font-semibold text-gray-900 sm:text-5xl">Rules & Eligibility</h1>
      <p class="mt-6 text-xl/8">
        Following are eligibility rules for projects to be qualified to be selected for the GOSIM Rust Spotlight program:
      </p>
      <div class="mt-10 max-w-3xl">
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <p v-for="rule in rules" :key="rule.item" class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900"></strong>{{ rule.item }}</span>
          </p>
          <RouterLink to="#/how-it-works" class="flex justify-end text-sm/6 font-semibold" :class="darkFont ? 'text-white' : 'text-gray-900'"
            target="_blank">
            Judging Process <span aria-hidden="true">&rarr;</span>
          </RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const rules = [
  { item: 'Projects must be open-source and hosted on a public Git server.' },
  { item: 'Projects should use Rust as the primary programming language.' },
  { item: 'Projects should demonstrate active development or significant contributions within the last 12 months.' },
  { item: 'Project should be three years old or younger (from date of first functional release) to highlight new projects over well established projects.' },
  { item: 'Projects must align with Rust\'s core values of safety, concurrency, and inclusivity.' },
  { item: 'Projects will be selected by a set of judges chosen from the community with a diverse set of backgrounds and expertise.' }
]
</script>

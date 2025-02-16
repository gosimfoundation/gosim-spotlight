<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center gap-x-6 md:order-2">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-600 hover:text-gray-800">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm/6 text-gray-600">
        <p>&copy; 2025 GOSIM. All rights reserved.</p>
        <router-link to="/privacy" class="hover:text-gray-800">Privacy Policy</router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {defineComponent, h} from "vue";

const navigation = [
  {
    name: 'X (Twitter)',
    href: 'https://x.com/gosimfoundation',
    icon: defineComponent({
      render: () => h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
        h('path', {
          d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
        }),
      ]),
    }),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@GOSIMFoundation',
    icon: defineComponent({
      render: () => h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
        h('path', {
          'fill-rule': 'evenodd',
          d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
          'clip-rule': 'evenodd',
        }),
      ]),
    }),
  },
]
</script>

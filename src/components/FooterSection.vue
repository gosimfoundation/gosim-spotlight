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
        <p>&copy; 2025
          <a href='https://gosim.org'>GOSIM Foundation</a>
          All rights reserved.</p>
        <router-link to="/privacy" class="hover:text-gray-800">Privacy Policy</router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {defineComponent, h} from "vue";

const navigation = [
    {
    name: 'Mastodon',
    href: 'https://mastodon.social/@gosim',
    icon: defineComponent({
      render: () => h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
        h('path', {
          d: 'M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z',
        }),
      ]),
    }),
  },
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

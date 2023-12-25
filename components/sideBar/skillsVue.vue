<template>
  <section>
    <SideBarTitleVue title="Навички" />
    <ul class="ml-4 p-2 text-sm text-white tracking-wide list-disc">
      <li
        v-for="(item, index) in skillsData"
        :key="index"
        class="mb-2 last:mb-0"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const skillsData: string[] = [
  "HTML 5",
  "CSS 3",
  "JS",
  "TypeScript",
  "jQuery",
  "Webpack",
  "Npm, Yarn",
  "Git",
  "OpenCart 2.3",
  "Vue 2, 3",
  "Nuxt 3",
  "Vuex",
  "Axios",
  "Metamask",
  "Bootstrap",
  "Figma",
  "Tailwind CSS",
  "Vuetify",
  "Swiper Slider",
];
</script>

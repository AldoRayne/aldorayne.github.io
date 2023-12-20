<template>
  <section>
    <SideBarTitleVue title="Мови" />
     <ul class="p-2 text-sm text-white tracking-wide">
      <li
        v-for="(item, index) in languageData"
        :key="index"
        class="mb-2 flex items-center last:mb-0"
      >
        {{ item.language }} - {{ item.level }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const languageData: Languages = [
  {
    language: "Анлійська",
    level: "розмовна"
  },
   {
    language: "Українська",
    level: "розмовна"
  },
];
</script>

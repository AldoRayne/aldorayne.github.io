<template>
  <section>
    <SideBarTitleVue :title="translates.languagesTitle" />
    <ul class="p-2 text-sm text-white tracking-wide">
      <li
        v-for="(item, index) in translates.languages"
        :key="index"
        class="mb-2 flex items-center last:mb-0"
      >
        {{ item.language }} - {{ item.level }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const translatesStore = useTranslatesStore();

const { translates } = storeToRefs(translatesStore);
</script>

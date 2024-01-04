<template>
  <section>
    <SideBarTitleVue title="Навички" />
    <ul class="ml-4 p-2 text-sm text-white tracking-wide list-disc">
      <li
        v-for="(item, index) in translates.skills"
        :key="index"
        class="mb-2 last:mb-0"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const translatesStore = useTranslatesStore();

const { translates } = storeToRefs(translatesStore);
</script>

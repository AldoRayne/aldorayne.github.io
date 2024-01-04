<template>
  <div
    class="ml-auto mb-6 pt-6 px-5 w-[calc(100%_-_50px)] sm:w-[calc(100%_-_320px)] min-w-[270px]"
  >
    <MainInfoVue />
    <MainSectionVue
      v-for="(item, index) in translates.contentData"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script setup lang="ts">
const translatesStore = useTranslatesStore();

const { translates } = storeToRefs(translatesStore);
</script>

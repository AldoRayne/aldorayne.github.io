<template>
  <main class="flex overflow-x-hidden">
    <SideBarVue />
    <MainContentVue />
  </main>
</template>

<script setup lang="ts">
const { setTranslates } = useTranslatesStore();

const route = useRoute();

watch(
  () => route.query.lang,
  (value) => {
    setTranslates(value ?? 'ua');
  },
  {
    immediate: true,
  }
);
</script>

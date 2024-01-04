<template>
  <main class="flex overflow-x-hidden">
    <SideBarVue />
    <MainContentVue />
  </main>
</template>

<script setup lang="ts">
const { setTranslates } = useTranslatesStore();

const route = useRoute();

onMounted(() => {
  setTranslates(route.query.lang ?? 'ua');
});

watch(
  () => route.query.lang,
  (value) => {
    setTranslates(value ?? 'ua');
  }
);
</script>

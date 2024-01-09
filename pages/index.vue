<template>
  <main class="flex overflow-x-hidden">
    <template v-if="translatesExist">
      <SideBarVue />
      <MainContentVue />
    </template>
  </main>
</template>

<script setup lang="ts">
const translatesStore = useTranslatesStore();

const { setTranslates } = translatesStore;
const { translatesExist } = storeToRefs(translatesStore);

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

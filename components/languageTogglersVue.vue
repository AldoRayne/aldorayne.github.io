<template>
  <div class="mb-3 flex">
    <NuxtLink
      to="/"
      :class="{ 'opacity-30 pointer-events-none': activeLang === 'ua' }"
      class="mr-3"
    >
      <Icon name="twemoji:flag-ukraine" class="w-8 h-8 lg:w-4 lg:h-4" />
    </NuxtLink>
    <NuxtLink
      to="/?lang=en"
      :class="{ 'opacity-30 pointer-events-none': activeLang === 'en' }"
    >
      <Icon name="twemoji:flag-united-kingdom" class="w-8 h-8 lg:w-4 lg:h-4" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const activeLang = ref(null as 'ua' | 'en' | null);

function setActiveLang(): void {
  activeLang.value = route.query.lang === 'en' ? 'en' : 'ua';
}

onMounted(() => {
  setActiveLang();
});

watch(
  () => route.query.lang,
  () => {
    setActiveLang();
  }
);
</script>

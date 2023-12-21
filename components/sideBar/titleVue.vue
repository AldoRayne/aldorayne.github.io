<template>
  <h2 class="p-2 text-white font-medium uppercase bg-[rgba(0,0,0,0.36)]">{{ title }}</h2>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

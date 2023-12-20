<template>
  <h2 class="p-2 text-white font-medium uppercase bg-[#0000005c]">{{ title }}</h2>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

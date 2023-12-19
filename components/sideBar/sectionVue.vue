<template>
  <section>
    <h2>{{ title }}</h2>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

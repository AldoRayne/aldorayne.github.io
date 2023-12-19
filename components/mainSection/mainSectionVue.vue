<template>
  <section class="mt-6">
    <div
      class="mb-4 flex items-center justify-between relative after:absolute after:block after:w-full after:h-px after:bg-[#285ed4]"
    >
      <h2
        class="pr-3 text-xl text-[#285ed4] font-medium uppercase bg-white relative z-10"
      >
        {{ title }}
      </h2>
      <div class="pl-3 bg-white relative z-10">
        <div
          class="p-2 flex justify-center items-center w-fit border border-[#285ed4] rounded-full"
        >
          <Icon :name="icon" color="#285ed4" />
        </div>
      </div>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    required: true,
  },
});
</script>

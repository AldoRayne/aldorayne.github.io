<template>
  <section class="mt-6">
    <div
      class="mb-4 flex items-center justify-between relative after:absolute after:block after:w-full after:h-px after:bg-[#285ed4]"
    >
      <h2
        class="pr-3 text-xl text-[#285ed4] font-medium uppercase bg-white relative z-10"
      >
        {{ data.title }}
      </h2>
      <div class="pl-3 bg-white relative z-10">
        <div
          class="p-2 flex justify-center items-center w-fit border border-[#285ed4] rounded-full"
        >
          <Icon :name="data.icon" color="#285ed4" />
        </div>
      </div>
    </div>
    <ul>
      <li
        v-for="(item, index) in data.list"
        :key="index"
        class="mb-5 flex items-start last:mb-0"
      >
        <p
          v-html="item.date"
          class="mr-8 w-24 min-h-[27px] shrink-0 flex items-center text-xs"
        ></p>
        <div>
          <p :class="{ 'font-medium': data.boldTitle }" class="mb-2">{{ item.listTitle }}</p>
          <ul class="ml-4 list-disc text-sm">
            <li v-for="(subItem, subIndex) in item.listItems" :key="subIndex">
              {{ subItem }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object as PropType<MainListSection>,
    required: true,
  },
});
</script>

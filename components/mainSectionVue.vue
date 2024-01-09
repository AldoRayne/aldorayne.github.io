<template>
  <section class="mt-4">
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
    <ul v-if="dataList">
      <li
        v-for="(item, index) in dataList"
        :key="index"
        class="mb-5 flex items-start last:mb-0"
      >
        <p
          v-html="item.date"
          class="mr-8 w-24 min-h-[27px] shrink-0 flex items-center text-xs"
        ></p>
        <div>
          <p :class="{ 'font-medium': data.boldListTitle }" class="mb-2">
            {{ item.listTitle }}
          </p>
          <ul class="ml-4 list-disc text-sm">
            <li v-for="(subItem, subIndex) in item.listItems" :key="subIndex">
              {{ subItem }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <p v-else-if="dataText" class="text-sm">{{ dataText }}</p>
    <ul v-else class="mb-[-1.25rem] flex flex-wrap">
      <li
        v-for="(item, index) in dataPortfolio"
        :key="index"
        class="mb-5 px-2 max-w-[519px] w-full md:w-3/6 xl:w-2/6"
      >
        <a
          :href="item.link"
          target="_blank"
          class="flex justify-center items-center shadow-md rounded overflow-hidden"
        >
          <img
            :src="item.image"
            alt="item.title"
            width="519"
            height="246"
            loading="lazy"
            class="object-cover transition-transform duration-700 hover:scale-150"
          />
          <span
            class="p-1 absolute text-lg font-medium uppercase bg-white rounded shadow pointer-events-none"
          >
            {{ item.title }}
          </span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object as PropType<MainSection>,
    required: true,
  },
});

const dataList = computed((): MainSectionListArray | undefined => {
  if ('list' in props.data) return props.data.list;
});

const dataPortfolio = computed((): PortfolioListArray | undefined => {
  if ('portfolioList' in props.data) return props.data.portfolioList;
});

const dataText = computed((): string | undefined => {
  if ('text' in props.data) return props.data.text;
});
</script>

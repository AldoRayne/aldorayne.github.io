<template>
  <div class="ml-auto pt-6 px-5 w-[calc(100%_-_50px)] sm:w-[calc(100%_-_320px)] min-w-[270px]">
    <MainInfoVue />
    <MainSectionVue
      v-for="(item, index) in contentData"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script setup lang="ts">
// const apiUrl = useApiUrl();
// const { data } = await useFetch(`${apiUrl}/data`);

const contentData: MainData = [
  {
    boldListTitle: true,
    title: "Досвід роботи",
    icon: "solar:case-bold",
    list: [
      {
        date: "cерпень 2018 - <br /> грудень 2021",
        listTitle: "MyOpencart",
        listItems: [
          "адміністрування і заповнення сайтів контентом",
          "верстка шаблонів з `нуля`",
          "встановлення і налаштування плагінів для CMS OpenCart",
          "натяжка back-end логіки на html-сторінки",
          "оптимізація коду для кращої швидкодії",
          "SEO-оптимізація",
        ],
      },
      {
        date: "грудень 2021 - <br /> січень 2023",
        listTitle: "Intertech",
        listItems: [
          "верстка шаблонів з `нуля`",
          "верстка шаблонів для електронної пошти",
          "розробка SPA за допомогою Vue, Nuxt",
          "робота з Rest API",
          "оптимізація коду для кращої швидкодії",
          "SEO-оптимізація",
        ],
      },
      {
        date: "січень 2023 - <br /> грудень 2023",
        listTitle: "Pixchange",
        listItems: [
          "верстка адаптивних cторінок під різні пристрої",
          "розробка логіки на Vue 2",
          "робота з Rest API",
          "інтеграція Metamask Widget для ПК та Metamask Browser для мобільних пристроїв",
          "оптимізація коду для кращої швидкодії",
          "SEO-оптимізація",
        ],
      },
    ],
  },
  {
    title: "Освіта",
    icon: "mdi:education-outline",
    list: [
      {
        date: "2000р. - <br /> 2012р.",
        listTitle:
          "Корсунь-Шевченківська загальноосвітня школа I-III ступенів №1",
      },
      {
        date: "2012р. - <br /> 2016р.",
        listTitle:
          "Черкаський національний університет імені Богдана Хмельницького, системний аналіз",
      },
    ],
  },
  {
    title: "Курси",
    icon: "streamline:quality-education",
    list: [
      {
        date: "2018р.",
        listTitle: "GeekHub: Front-End + JS",
      },
    ],
  },
  {
    title: "Про себе",
    icon: "mdi:user-outline",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor, mi vitae fringilla finibus, enim ex varius tellus, non aliquet lectus ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at nunc in elit pulvinar mattis. Integer elementum eros et dolor efficitur, ac congue risus aliquet. Nunc lobortis quis nisl nec pharetra. Nullam et tempus nisi, ut ultrices arcu. Fusce vestibulum sed erat a dapibus. Aliquam pharetra sem eros, et malesuada orci lacinia nec. Maecenas pulvinar sed sem id luctus. Curabitur nec tellus quis diam vulputate ultrices ac ac massa. Sed sollicitudin, sem vitae scelerisque commodo, magna mi accumsan ipsum, sed elementum lectus massa sit amet nisl. Vestibulum non massa eu mauris ornare eleifend.",
  },
];
</script>

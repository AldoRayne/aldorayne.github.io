<template>
  <div class="ml-auto pt-6 px-5 w-[calc(100%_-_350px)]">
    <MainInfoVue />
    <MainSectionVue :data="contentData.workingHistory" />
    <MainSectionVue :data="contentData.education" />
    <MainSectionVue :data="contentData.courses" />
  </div>
</template>

<script setup lang="ts">
// const apiUrl = useApiUrl();
// const { data } = await useFetch(`${apiUrl}/data`);

const contentData: Data = {
  workingHistory: {
    boldTitle: true,
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
  education: {
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
  courses: {
    title: "Курси",
    icon: "streamline:quality-education",
    list: [
      {
        date: "2018р.",
        listTitle: "GeekHub: Front-End + JS",
      },
    ],
  },
};
</script>

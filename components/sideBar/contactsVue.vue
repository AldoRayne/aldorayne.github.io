<template>
  <section>
    <SideBarTitleVue :title="translates.contactsTitle" />
    <ul class="p-2 text-sm text-white tracking-wide">
      <li
        v-for="(item, index) in contactsData"
        :key="index"
        class="mb-2 flex items-center last:mb-0"
      >
        <Icon class="mr-2" :name="item.icon" color="#fff" />
        <a :href="item.link" :target="item.newTab ? '_blank' : '_self'">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const translatesStore = useTranslatesStore();

const { translates } = storeToRefs(translatesStore);

const contactsData: Contacts = [
  {
    icon: 'mdi:phone',
    link: 'tel:+380679173573',
    text: '+380679173573',
  },
  {
    icon: 'material-symbols:mail-outline',
    link: 'mailto:aldoray.n7@gmail.com',
    text: 'aldoray.n7@gmail.com',
  },
  {
    icon: 'mingcute:telegram-line',
    link: 'https://t.me/dkonovaliuk',
    text: 'Telegram',
    newTab: true,
  },
];
</script>

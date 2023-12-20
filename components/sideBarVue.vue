<template>
  <aside
    class="fixed top-0 left-0 shrink-0 w-[350px] h-full bg-gradient-to-b from-[#092974] to-[#1c23c3] overflow-y-auto"
  >
    <div class="my-6 block mx-auto w-[200px] h-[275px] rounded overflow-hidden">
      <img
        class="w-full h-full object-contain"
        src="/img/avatar.png"
        alt="Аватар"
        loading="lazy"
      />
    </div>
    <SideBarContactsVue  />
    <SideBarLanguagesVue  />
    <SideBarSkillsVue  />
  </aside>
</template>

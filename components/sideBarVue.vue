<template>
  <aside
    id="sideBar"
    class="fixed z-20 top-0 left-[-270px] sm:left-0 shrink-0 w-[320px] h-full bg-gradient-to-b from-[#092974] to-[#1c23c3] overflow-y-auto"
  >
    <button
      ref="collapseButton"
      @click="sideBarCollapse"
      class="absolute top-1.5 right-4 sm:hidden"
    >
      <Icon name="fxemoji:right" class="w-8 h-8" />
    </button>
    <div class="my-6 block mx-auto w-[200px] h-[275px] rounded overflow-hidden">
      <img
        class="w-full h-full object-contain"
        src="/img/avatar.png"
        alt="Аватар"
        width="200"
        height="275"
        loading="lazy"
      />
    </div>
    <SideBarContactsVue />
    <SideBarLanguagesVue />
    <SideBarSkillsVue />
  </aside>
</template>

<script setup lang="ts">
const collapseButton = ref(null as HTMLButtonElement | null);

function sideBarCollapse(): void {
  const sideBar = document.getElementById("sideBar");

  if (sideBar && collapseButton.value) {
    sideBar.classList.toggle("opened");

    if (sideBar.classList.contains("opened")) {
      document.body.style.overflowY = "hidden";
      sideBar.style.left = "0";
      collapseButton.value.style.transform = "scale(-1, 1)";

      return;
    }

    document.body.removeAttribute("style");
    sideBar.removeAttribute("style");
    collapseButton.value.removeAttribute("style");
  }
}
</script>

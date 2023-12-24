<template>
  <aside
    ref="sideBar"
    :class="isOpened ? 'overflow-y-auto' : 'overflow-y-hidden'"
    class="fixed z-20 pb-6 top-0 left-[-270px] sm:left-0 shrink-0 w-[320px] h-full bg-gradient-to-b from-[#092974] to-[#1c23c3]"
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
const sideBar = ref(null as HTMLElement | null);
const collapseButton = ref(null as HTMLButtonElement | null);

const isOpened = ref(false);

function removeStyleAttributes(): void {
  if (sideBar.value && collapseButton.value) {
    document.body.removeAttribute("style");
    sideBar.value.removeAttribute("style");
    collapseButton.value.removeAttribute("style");
  }
}

function sideBarCollapse(): void {
  if (sideBar.value && collapseButton.value) {
    isOpened.value = !isOpened.value;

    if (isOpened.value) {
      document.body.style.overflowY = "hidden";
      sideBar.value.style.left = "0";
      collapseButton.value.style.transform = "scale(-1, 1)";

      return;
    }

    removeStyleAttributes();
  }
}

function checkResponsiveWidth(): void {
  isOpened.value = window.innerWidth >= 640 ?? false;
}

function windowResize(): void {
  checkResponsiveWidth();
  removeStyleAttributes();
}

onMounted(() => {
  checkResponsiveWidth();

  window.addEventListener("resize", windowResize, false);
});
</script>

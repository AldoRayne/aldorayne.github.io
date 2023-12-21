<template>
  <main class="flex">
    <SideBarVue
      @mouseenter="addBodyOverflow"
      @mouseleave="removeBodyOverflow"
    />
    <MainContentVue />
  </main>
</template>

<script setup lang="ts">
function addBodyOverflow(): void {
  document.body.style.overflow = "hidden";
}

function removeBodyOverflow(): void {
  document.body.removeAttribute("style");
}
</script>

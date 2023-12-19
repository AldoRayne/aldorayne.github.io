<template>
  <section>
    <h1 class="text-3xl font-medium uppercase">Коновалюк Дмитро Сергійович</h1>
    <p class="mt-1 text-lg font-medium uppercase">Front-end розробник</p>
    <div class="mt-2 flex">
      <div class="mr-6 flex items-center">
        <Icon name="ic:outline-place" class="mr-1" />
        <p>Україна, м. Черкаси</p>
      </div>
      <div class="flex items-center">
        <Icon name="openmoji:man-mage" class="mr-1" />
        <p>{{ age }} років</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const calculateAge = (dateOfBirth: Date): Number => {
  const now = new Date();
  const diff = Math.abs(now.getTime() - dateOfBirth.getTime());
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  return age;
};

const age = calculateAge(new Date("1994-03-08"));
</script>

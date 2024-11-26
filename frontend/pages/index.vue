<template>
  <div class="flex flex-col items-center gap-5 lg:gap-3">
    <!-- Page Header -->
    <div class="text-2xl font-medium px-1">
      Turn the wheel, take a challenge!
    </div>
    <svg
      width="150"
      height="1"
      viewBox="0 0 150 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="0.5" x2="150" y2="0.5" stroke="#0A2E36" />
    </svg>
    <p class="px-1 lg:px-0 lg:w-2/5 font-light text-lg lg:text-md text-balance text-center">
      Welcome to the ultimate challenge app! Spin the wheel, face exciting challenges, and celebrate your wins. Ready to step out of your comfort zone? Start spinning now!
    </p>
    <NuxtLink to="/category" class="bg-dark text-white px-10 py-3 text-lg md:text-md mt-5 rounded-2xl hover:bg-dark/80">
      Try now 
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
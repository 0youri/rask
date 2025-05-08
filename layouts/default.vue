<template>
  <div class="min-h-dvh flex flex-col justify-between gap-5 cursor-pointer">
    <Header />
    <div class="flex justify-center flex-grow items-center">
      <slot  />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
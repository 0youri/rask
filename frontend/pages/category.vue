<template>
  <div class="flex flex-col items-center gap-3 mx-3 text-center">
    <!-- Page Header -->
    <div class="text-2xl font-medium">
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
    <div class="text-md pb-5">
      first, turn to get a <span class="italic">category</span>
    </div>

    <!-- Spin Wheel Component -->
    <SpinWheel
      v-if="categories"
      :data="categories"
      toPage="challenge"
      @get-prize="handlePrize"
    />
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { useCategoryStore } from '~/stores/categoryStore';

  // Accessing the store
  const { categories, setSelectedCategory } = useCategoryStore();

  /**
   * Handles the prize selection from the spin wheel.
   * @param {string} prize - The selected category from the spin wheel.
   */
  const handlePrize = (prize: string) => {
    setSelectedCategory(prize);
  };

  // Clear local storage when the component is mounted (only on the client side).
  onMounted(() => {
    if (import.meta.client) {
      localStorage.clear();
    }
  });
</script>
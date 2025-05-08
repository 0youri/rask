<template>
  <div class="flex flex-col items-center gap-3 text-center">
    <!-- Header Section -->
    <div class="text-xl lg:text-2xl font-medium">
      Turn the wheel, take a challenge!
    </div>
    <svg width="150" height="1" viewBox="0 0 150 1" fill="none" xmlns="http://www.w3.org/2000/svg" ><line y1="0.5" x2="150" y2="0.5" stroke="#0A2E36" /></svg>
    <div class="text-md pb-5">
      secondly, turn to get a <span class="italic">challenge</span>
    </div>

    <!-- Spin Wheel Component -->
    <SpinWheel
      v-if="challenges.length > 0"
      :data="challenges"
      toPage="action"
      @get-prize="handlePrize"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useChallengeStore } from '~/stores/challengeStore';
import { navigateTo } from 'nuxt/app';

// Access challenge store
const { setCategory, setSelectedChallenge } = useChallengeStore();
const { challenges } = storeToRefs(useChallengeStore());

/**
 * Handle prize selection from the spin wheel.
 * @param {string} prize - The selected challenge.
 */
const handlePrize = (prize: string) => {
  setSelectedChallenge(prize);
};

// Load category and validate when the component is mounted
onMounted(() => {
  setCategory();

  const savedCategory = localStorage.getItem('categoryValue');
  if (!savedCategory) {
    navigateTo('/category'); // Redirect if no category is selected
  }
});
</script>
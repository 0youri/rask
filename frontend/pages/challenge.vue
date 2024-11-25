<template>
  <div>
    <!-- Header Section -->
    <div class="flex flex-col items-center gap-3 divide-y divide-dark">
      <div class="text-2xl font-medium">
        Turn the wheel, take a challenge!
      </div>
      <div class="text-md py-5">
        secondly, turn to get a <span class="italic">challenge</span>
      </div>
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
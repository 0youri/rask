<template>
  <div v-if="selectedChallenge">
    <!-- Header Section -->
    <div class="flex flex-col items-center gap-5 py-5">
      <div class="text-2xl font-medium">Turn the wheel, take a challenge!</div>
      <svg
        width="150"
        height="2"
        viewBox="0 0 150 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="150" y2="0.5" stroke="#0A2E36" />
      </svg>
      <div class="flex justify-center w-5/6 lg:w-1/4">
        <img :src="`/img/${getRandomQuote()}.webp`" class="rounded-3xl" alt="Motivational Quote" />
      </div>
    </div>

    <!-- Challenge Display -->
    <div class="text-center space-y-5">
      <p class="text-lg font-medium">Your challenge is</p>
      <div class="w-screen bg-primary/25 text-center py-7 text-xl font-semibold">
        {{ selectedChallenge }}
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-center items-center text-white gap-10 py-10 text-lg lg:text-md font-medium">
      <button
        @click="fail"
        class="w-36 lg:w-32 bg-accent-red p-5 rounded-2xl hover:bg-accent-red/80"
      >
        fail ❌
      </button>
      <button
        @click="done"
        class="w-36 lg:w-32 bg-accent p-5 rounded-2xl hover:bg-accent/80"
      >
        done ✅
      </button>
    </div>

    <!-- Modal Component -->
    <Modal
      :visible="modalState"
      :challengeDone="true"
      @close="closeModal"
    >
      <template #header>
        {{ challengeDoneHeader }}
      </template>
      <template #default>
        {{ challengeDoneText }}
      </template>
      <template v-if="confettiState" #confetti>
        <div ref="confettiContainer" class="fixed inset-0 pointer-events-none"></div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from "gsap";
  import { nextTick, ref, onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import { useChallengeStore } from "~/stores/challengeStore";

  // Store
  const { loadLocalStorage } = useChallengeStore();
  const { selectedChallenge } = storeToRefs(useChallengeStore());

  // State
  const modalState = ref(false);
  const confettiContainer = ref<HTMLElement | null>(null); // Ref for confetti container
  const challengeDoneText = ref('')
  const challengeDoneHeader = ref('')
  const confettiState = ref(false)

  const fail = () => {
    modalState.value = true;
    challengeDoneText.value = "Try again next time! 💪"
    challengeDoneHeader.value = "Oh no! 😔"
    confettiState.value = false
  };

  /**
   * Opens the modal and triggers the confetti animation.
   */
  const done = () => {
    modalState.value = true;
    challengeDoneText.value = 'You’ve done it! 🤩'
    challengeDoneHeader.value = "Congratulation! 🔥"
    confettiState.value = true
    triggerConfetti();
  };

  /**
   * Closes the modal.
   */
  const closeModal = () => {
    modalState.value = false;
  };

  // Load local storage data on mount
  onMounted(() => {
    loadLocalStorage();

    const savedChallenge = localStorage.getItem('challengeValue');
    if (!savedChallenge) {
      const savedCategory = localStorage.getItem('categoryValue');
      if (!savedCategory) {
        navigateTo('/category'); // Redirect if no category is selected
      } else {
        navigateTo('/challenge'); // Redirect if no challenge is selected
      }
    }
  });

  /**
   * Triggers a confetti animation.
   */
  const triggerConfetti = async () => {
    await nextTick(); // Wait for DOM updates

    if (!confettiContainer.value) {
      console.warn("Confetti container is not available.");
      return;
    }

    const colors = ["#FFC700", "#FF0000", "#2E75FF", "#6BCB77", "#FF62A5"];
    const numConfetti = 200;

    for (let i = 0; i < numConfetti; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confettiContainer.value.appendChild(confetti);

      // Randomized properties
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const rotation = Math.random() * 360;
      const scale = Math.random() * 0.5 + 0.75;
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Initial confetti styles
      gsap.set(confetti, {
        x,
        y: y - window.innerHeight,
        rotation,
        scale,
        backgroundColor: color,
        width: "10px",
        height: "10px",
        position: "absolute",
        borderRadius: "50%",
      });

      // Animate confetti
      gsap.to(confetti, {
        y: y + window.innerHeight,
        rotation: "+=360",
        duration: Math.random() * 2 + 4,
        ease: "power1.out",
        onComplete: () => confetti.remove(), // Cleanup
      });
    }
  };


  const getRandomQuote = () => {
    return `quote${Math.floor(Math.random() * 7) + 1}`;
  }
</script>

<style>
.confetti {
  pointer-events: none;
  z-index: 9999;
}
</style>
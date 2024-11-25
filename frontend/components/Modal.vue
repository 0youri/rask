<template>
  <!-- Modal Overlay -->
  <div
    v-if="visible"
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
  >
    <!-- Modal Card -->
    <div class="relative w-[90%] max-w-md">
      <!-- Border with Blur Effect -->
      <div
        class="absolute inset-0 rounded-3xl bg-white blur-sm"
        aria-hidden="true"
      ></div>

      <!-- Actual Card Content -->
      <div class="relative bg-white text-dark rounded-3xl overflow-hidden">
        <!-- Card Header -->
        <header class="text-2xl font-bold text-center p-6">
          {{ challengeDone ? 'Congratulation! 🔥' : 'Your challenge is chosen!' }}
        </header>

        <!-- Slot for Custom Content -->
        <main class="py-14 px-5 text-balance font-semibold text-2xl bg-dark text-white text-center">
          <slot />
        </main>

        <!-- Footer Buttons -->
        <footer>
          <div
            v-if="!challengeDone"
            class="grid grid-cols-2 divide-x divide-dark divide-x-2 text-center"
          >
            <button
              @click="regenerate"
              class="flex flex-col items-center p-5 hover:bg-primary transition rounded-bl-3xl"
            >
              <span class="text-2xl">🔄</span>
            </button>
            <NuxtLink
              :to="toPage"
              class="flex flex-col items-center p-5 hover:bg-primary transition rounded-br-3xl"
            >
              <span class="text-2xl">➡️</span>
            </NuxtLink>
          </div>
          <div v-else class="grid grid-cols-1">
            <NuxtLink
              to="category"
              class="bg-accent-light text-2xl text-center p-4 hover:bg-accent-light/80 transition rounded-b-3xl"
            >
              🏁
            </NuxtLink>
          </div>
        </footer>
      </div>
    </div>

    <!-- Slot for Confetti -->
    <slot name="confetti"></slot>
  </div>
</template>

<script setup>
  defineProps({
    visible: { type: Boolean, required: true },
    toPage: { type: String },
    challengeDone: { type: Boolean, default: false },
  });

  const emit = defineEmits(["close", "regenerate"]);

  const regenerate = () => {
    emit("close");
    emit("regenerate");
  };
</script>
<template>
  <div>
    <!-- Fortune Wheel -->
    <FortuneWheel
      style="width: 400px; max-width: 100%;"
      ref="wheelEl"
      :verify="canvasVerify"
      :canvas="canvasOptions"
      :prizes="data"
      @rotateStart="onCanvasRotateStart"
      @rotateEnd="onRotateEnd"
    />

    <!-- Modal Component -->
    <Modal
      :visible="showModal"
      :toPage="toPage"
      @close="closeModal"
      @regenerate="triggerRotateStart"
    >
      <template #header>
        Your challenge is chosen!
      </template>
      <template #default>
        {{ chosen }}
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FortuneWheel from 'vue-fortune-wheel';
import 'vue-fortune-wheel/style.css';

defineProps({
  data: { type: Array, required: true },
  toPage: { type: String, required: true },
});

const emit = defineEmits(['getPrize']);

// Modal state
const showModal = ref(false);
const chosen = ref('');

// Handle modal close
const closeModal = () => {
  showModal.value = false;
};

// Handle rotation end
const onRotateEnd = (prize) => {
  showModal.value = true;
  chosen.value = prize.value;
  emit('getPrize', prize.value);
};

// Wheel reference and canvas options
const wheelEl = ref(null);
const canvasVerify = ref(false); // Verification mode for the wheel
const canvasOptions = {
  borderColor: '#14CC60',
  borderWidth: 5,
  fontSize: 40,
  textRadius: 175,
  btnWidth: 120
};

// Simulated backend request for verification
const testRequest = (verified, duration) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(verified), duration);
  });

// Handle wheel rotation start
const onCanvasRotateStart = (rotate) => {
  if (canvasVerify.value) {
    const verified = true; // Replace with actual verification logic if needed
    testRequest(verified, 2000).then((verifiedRes) => {
      if (verifiedRes) {
        rotate(); // Start spinning
        canvasVerify.value = false; // Disable verification mode
      } else {
        alert('Failed verification');
      }
    });
    return;
  }
};

// Trigger manual wheel spin
const triggerRotateStart = () => {
  if (wheelEl.value) {
    wheelEl.value.startRotate();
  }
};
</script>
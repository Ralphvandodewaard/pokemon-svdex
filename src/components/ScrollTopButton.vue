<template>
  <button
    class="fixed bottom-2 right-2 sm:bottom-8 sm:right-8 flex justify-center items-center w-12 h-12 p-3 sm:w-16 sm:h-16 sm:p-4
    bg-neutral-800 text-white border border-black rounded-full"
  >
    <AngleUpIcon class="h-full" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AngleUpIcon from '@/assets/icons/angle-up-icon.svg';

export default defineComponent({
  name: 'ScrollTopButton',
  components: {
    AngleUpIcon
  }
});
</script>

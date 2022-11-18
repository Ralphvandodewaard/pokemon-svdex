<template>
  <div class="flex flex-col items-center gap-4 min-h-screen p-4 sm:p-8 pb-8 sm:pb-16 bg-neutral-850 text-white font-sora">
    <h1 class="text-2xl font-semibold">
      SV Dex
      <span class="text-xs font-normal">
        v0.8
      </span>
    </h1>
    <RouterView/>
    <ScrollTopButton @click="scrollToTop" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScrollTopButton from './components/ScrollTopButton.vue';

export default defineComponent({
  name: 'App',
  components: {
    ScrollTopButton
  },
  setup() {
    function scrollToTop(): void {
      window.scrollTo(0, 0);
    }

    return {
      scrollToTop
    };
  }
});
</script>

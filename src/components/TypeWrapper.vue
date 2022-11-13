<template>
  <div
    :class="getBackgroundClass"
    class="flex justify-center w-16 py-0.5 border border-black rounded"
  >
    <p class="text-xs text-white capitalize">
      {{ pokemonType }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TypeWrapper',
  props: {
    pokemonType: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const getBackgroundClass = computed<string>(() => {
      return `bg-${props.pokemonType.toLowerCase()}`;
    });

    return {
      getBackgroundClass
    };
  }
});
</script>

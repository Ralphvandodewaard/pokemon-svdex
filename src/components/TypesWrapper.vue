<template>
  <div class="flex gap-0.5">
    <div
      v-for="pokemonType in pokemonTypes"
      :key="pokemonType.label"
      :class="getBackgroundClass(pokemonType.label)"
      class="flex justify-center w-16 py-0.5 border border-black rounded"
    >
      <p class="text-xs text-white capitalize">
        {{ pokemonType.label }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import PokemonType from '@/models/PokemonType';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TypesWrapper',
  props: {
    pokemonTypes: {
      type: Array as PropType<PokemonType[]>,
      required: true
    }
  },
  setup() {
    function getBackgroundClass(typeLabel: string): string {
      return `bg-types-${typeLabel.toLowerCase()}`;
    }

    return {
      getBackgroundClass
    };
  }
});
</script>

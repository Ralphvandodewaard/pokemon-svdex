<template>
  <div class="flex flex-wrap gap-0.5 text-tiny bg-neutral-800 rounded">
    <div
      v-for="pokemonType in allPokemonTypes"
      :key="pokemonType.label"
      class="flex flex-col"
    >
      <div
        :class="getTypeBackgroundClass(pokemonType.label)"
        class="flex justify-center items-center w-8 h-8 border border-b-0 border-black rounded"
      >
        <p>
          {{ pokemonType.label.substring(0, 3).toUpperCase() }}
        </p>
      </div>
      <div
        :class="getWeaknessBackgroundClass(pokemonType.label)"
        class="flex justify-center items-center w-8 h-8 border border-black rounded"
      >
        <p v-if="getDamageMultiplier(pokemonType.label) !== 1">
          {{ getDamageMultiplier(pokemonType.label) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import types from '@/assets/types';
import PokemonType from '@/models/PokemonType';

export default defineComponent({
  name: 'WeaknessesWrapper',
  props: {
    pokemonTypes: {
      type: Array as PropType<PokemonType[]>,
      required: true
    }
  },
  setup(props) {
    const allPokemonTypes = computed<PokemonType[]>(() => {
      return Object.values(types);
    });

    function getTypeBackgroundClass(typeLabel: string): string {
      return `bg-types-${typeLabel.toLowerCase()}`;
    }

    function getWeaknessBackgroundClass(typeLabel: string): string {
      return `bg-multipliers-${getDamageMultiplier(typeLabel)}`;
    }

    function getDamageMultiplier(typeLabel: string): number {
      let multiplier = 1;

      props.pokemonTypes.forEach((pokemonType: PokemonType) => {
        if (pokemonType.immuneTo.some((typeLabelProp: string) => typeLabelProp === typeLabel)) {
          multiplier = 0;
        }

        if (pokemonType.resists.some((typeLabelProp: string) => typeLabelProp === typeLabel)) {
          multiplier *= 0.5;
        }

        if (pokemonType.weakTo.some((typeLabelProp: string) => typeLabelProp === typeLabel)) {
          multiplier *= 2;
        }
      });

      return multiplier;
    }

    return {
      allPokemonTypes,
      getTypeBackgroundClass,
      getWeaknessBackgroundClass,
      getDamageMultiplier
    };
  }
});
</script>

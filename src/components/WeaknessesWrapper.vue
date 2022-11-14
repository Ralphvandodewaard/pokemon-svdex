<template>
  <div class="flex flex-wrap gap-1 p-2 bg-neutral-800 text-tiny border border-black rounded">
    <div
      v-for="pokemonType in allPokemonTypes"
      :key="pokemonType.label"
      class="flex flex-col gap-1"
    >
      <div
        :class="getTypeBackgroundClass(pokemonType.label)"
        class="flex justify-center items-center w-8 h-8 border border-black rounded"
      >
        <p>
          {{ getFormattedTypeLabel(pokemonType.label) }}
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

    function getFormattedTypeLabel(typeLabel: string): string {
      return typeLabel.substring(0, 3).toUpperCase();
    }

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
      getFormattedTypeLabel,
      getTypeBackgroundClass,
      getWeaknessBackgroundClass,
      getDamageMultiplier
    };
  }
});
</script>

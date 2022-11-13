<template>
  <div class="flex flex-wrap gap-0.5 text-tiny">
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
import types from '@/assets/types';
import PokemonType from '@/models/PokemonType';
import { defineComponent, computed, PropType } from 'vue';

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
      return `bg-${typeLabel.toLowerCase()}`;
    }

    function getWeaknessBackgroundClass(typeLabel: string): string {
      switch (getDamageMultiplier(typeLabel)) {
        case 4:
          return 'bg-fourTimes';
        case 2:
          return 'bg-twoTimes';
        case 0.5:
          return 'bg-halfTimes';
        case 0.25:
          return 'bg-quarterTimes';
        case 0:
          return 'bg-immune';
        default:
          return '';
      }
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

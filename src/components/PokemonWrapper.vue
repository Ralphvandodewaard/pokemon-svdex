<template>
  <div class="flex items-start gap-2">
    <div class="flex justify-center items-center flex-shrink-0 w-20 h-20 bg-neutral-800 border border-black rounded-lg overflow-hidden">
      <img
        :src="getImage"
        :alt="pokemon.name"
        class="w-full h-full"
      >
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <p class="text-lg leading-5 font-semibold">
            <span class="text-xs font-normal">
              #{{ pokemon.nationalDexNumber }}
            </span>
            {{ pokemon.name }}
          </p>
          <img
            v-if="pokemon.scarletExclusive"
            src="@/assets/scarlet-logo-small.png"
            alt="Pokemon Scarlet logo small"
            class="h-3"
          />
          <img
            v-if="pokemon.violetExclusive"
            src="@/assets/violet-logo-small.png"
            alt="Pokemon Scarlet logo small"
            class="h-3"
          />
        </div>
        <div class="flex gap-0.5">
          <TypeWrapper
            v-for="pokemonType in pokemon.types"
            :key="pokemonType.label"
            :pokemon-type="pokemonType.label"
          />
        </div>
      </div>
      <WeaknessesWrapper :pokemon-types="pokemon.types" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import Pokemon from '@/models/Pokemon';
import TypeWrapper from './TypeWrapper.vue';
import WeaknessesWrapper from './WeaknessesWrapper.vue';

export default defineComponent({
  name: 'PokemonWrapper',
  components: {
    TypeWrapper,
    WeaknessesWrapper
  },
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true
    }
  },
  setup(props) {
    const getImage = computed<string>(() => {
      return require(`@/assets/sprites/${props.pokemon.nationalDexNumber}.png`);
    });

    return {
      getImage
    };
  }
});
</script>

<template>
  <div class="flex items-start gap-2">
    <div class="flex justify-center items-center w-20 h-20 border border-black rounded-lg overflow-hidden">
      <img
        :alt="pokemon.name"
        :src="getImage"
        class="max-w-none"
      >
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col">
        <p>
          {{ pokemon.name }}
        </p>
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
      return require(`@/assets/sprites/${props.pokemon.name.toLowerCase()}.jpg`);
    });

    return {
      getImage
    };
  }
});
</script>

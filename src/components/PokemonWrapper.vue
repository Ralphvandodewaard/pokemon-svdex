<template>
  <div class="flex items-center gap-2">
    <div class="flex justify-center items-center w-20 h-20 border border-black rounded-lg overflow-hidden">
      <img
        :alt="pokemon.name"
        :src="getImage"
        class="max-w-none"
      >
    </div>
    <div class="flex flex-col">
      <p>
        {{ pokemon.name }}
      </p>
      <div class="flex gap-0.5">
        <TypeWrapper
          v-for="pokemonType in pokemon.types"
          :key="pokemonType"
          :type="pokemonType"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import Pokemon from '@/models/Pokemon';
import TypeWrapper from './TypeWrapper.vue';

export default defineComponent({
  name: 'PokemonWrapper',
  components: {
    TypeWrapper
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

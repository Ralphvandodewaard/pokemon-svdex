<template>
  <div class="flex items-center gap-2">
    <div class="flex justify-center items-center w-20 h-20 rounded-lg overflow-hidden">
      <img
        :alt="pokemon.name"
        :src="getImage"
        class="max-w-none"
      >
    </div>
    <p>
      {{ pokemon.name }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import Pokemon from '@/models/Pokemon';

export default defineComponent({
  name: 'PokemonWrapper',
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

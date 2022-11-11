<template>
  <div>
    {{ pokemon.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Pokemon from '@/models/Pokemon';

export default defineComponent({
  name: 'PokemonWrapper',
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true
    }
  }
});
</script>

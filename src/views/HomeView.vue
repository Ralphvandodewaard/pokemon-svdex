<template>
  <div class="flex flex-col items-center gap-4">
    <h1 class="text-2xl font-semibold">
      SV Dex
    </h1>
    <div class="flex flex-col gap-2">
      <PokemonWrapper
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pokemonList from '@/assets/pokemon';
import PokemonWrapper from '@/components/PokemonWrapper.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    PokemonWrapper
  },
  setup() {
    return {
      pokemonList
    };
  }
});
</script>

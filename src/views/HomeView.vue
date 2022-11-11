<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-2xl font-semibold">
      SV Dex
    </h1>
    <div class="flex flex-col gap-2">
      <div
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
      >
        {{ pokemon.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pokemonList from '@/assets/pokemon';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
      pokemonList
    };
  }
});
</script>

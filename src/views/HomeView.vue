<template>
  <div class="flex flex-col items-center gap-4 w-full max-w-xs">
    <SearchInput v-model="searchValue" />
    <div class="flex flex-col gap-2">
      <PokemonWrapper
        v-for="pokemon in filteredPokemon"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import pokemon from '@/assets/pokemon';
import SearchInput from '@/components/SearchInput.vue';
import PokemonWrapper from '@/components/PokemonWrapper.vue';
import Pokemon from '@/models/Pokemon';

export default defineComponent({
  name: 'HomeView',
  components: {
    SearchInput,
    PokemonWrapper
  },
  setup() {
    const searchValue = ref('');

    const filteredPokemon = computed<Pokemon[]>(() => {
      return pokemon.filter((pokemon: Pokemon) => {
        return pokemon.name.toLowerCase().includes(searchValue.value.toLowerCase()) ||
        pokemon.types.some((type: string) => type.toLowerCase() === searchValue.value.toLowerCase());
      });
    });

    return {
      searchValue,
      filteredPokemon
    };
  }
});
</script>

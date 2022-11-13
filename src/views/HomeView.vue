<template>
  <div class="flex flex-col items-center gap-8 w-full">
    <SearchInput v-model="searchValue" />
    <div
      v-if="filteredPokemon.length > 0"
      class="flex flex-col gap-8"
    >
      <PokemonWrapper
        v-for="pokemon in filteredPokemon"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
    <p v-else>
      No results found
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import pokemon from '@/assets/pokemon';
import SearchInput from '@/components/SearchInput.vue';
import PokemonWrapper from '@/components/PokemonWrapper.vue';
import Pokemon from '@/models/Pokemon';
import PokemonType from '@/models/PokemonType';

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
        pokemon.types.some((pokemonType: PokemonType) => pokemonType.label.toLowerCase() === searchValue.value.toLowerCase()) ||
        pokemon.nationalDexNumber.toString().includes(searchValue.value.toLowerCase()) ||
        (pokemon.scarletExclusive && searchValue.value.toLowerCase() === 'scarlet') ||
        (pokemon.violetExclusive && searchValue.value.toLowerCase() === 'violet');
      });
    });

    return {
      searchValue,
      filteredPokemon
    };
  }
});
</script>

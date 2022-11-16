<template>
  <div class="flex flex-col items-center gap-8 w-full">
    <div class="flex flex-col items-center gap-2 w-full sm:max-w-xs">
      <SearchInput v-model="searchValue" />
      <p class="text-xs">
        Displaying {{ filteredPokemon.length }} results
      </p>
    </div>
    <div
      v-if="filteredPokemon.length > 0"
      class="flex flex-col gap-8"
    >
      <PokemonWrapper
        v-for="pokemon in sortedPokemon"
        :key="pokemon.nationalDexNumber"
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

    const sortedPokemon = computed<Pokemon[]>(() => {
      const filteredList: Pokemon[] = filteredPokemon.value;
      return filteredList.sort((a: Pokemon, b: Pokemon) => a.regionalDexNumber - b.regionalDexNumber);
    });

    return {
      searchValue,
      filteredPokemon,
      sortedPokemon
    };
  }
});
</script>

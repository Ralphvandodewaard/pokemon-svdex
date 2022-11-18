<template>
  <div class="flex items-start gap-2 sm:gap-4">
    <SpriteWrapper
      :name="pokemon.name"
      :national-dex-number="pokemon.nationalDexNumber"
      :alternate-forms="pokemon.alternateForms"
      v-model="selectedAlternateForm"
    />
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <NameWrapper
          :name="pokemon.name"
          :regional-dex-number="pokemon.regionalDexNumber"
          :selected-alternate-form="selectedAlternateForm"
          :scarlet-exclusive="pokemon.scarletExclusive"
          :violet-exclusive="pokemon.violetExclusive"
        />
        <TypesWrapper
          :pokemon-types="pokemon.types"
        />
      </div>
      <template v-if="pokemonStats">
        <StatsWrapper
          :stats="pokemonStats"
          :selected-alternate-form="selectedAlternateForm"
        />
      </template>
      <div
        v-else
        class="h-[170px] px-3 py-2 bg-neutral-800 text-xs border border-black rounded"
      >
        <button
          v-if="!isLoading"
          class="text-blue-400"
          @click="loadStats"
        >
          Load stats
        </button>
        <p v-else>
          Loading..
        </p>
        <p
          v-if="errorMessage"
          class="text-red-400"
        >
          {{ errorMessage }}
        </p>
      </div>
      <WeaknessesWrapper :pokemon-types="pokemon.types" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  Ref,
  ref,
  onMounted
} from 'vue';
import axios from 'axios';
import PokemonDto from '@/api/PokemonDto';
import Pokemon from '@/models/Pokemon';
import AlternateForm from '@/models/AlternateForm';
import SpriteWrapper from './SpriteWrapper.vue';
import NameWrapper from './NameWrapper.vue';
import TypesWrapper from './TypesWrapper.vue';
import StatsWrapper from './StatsWrapper.vue';
import WeaknessesWrapper from './WeaknessesWrapper.vue';
import Stats from '@/models/Stats';

export default defineComponent({
  name: 'PokemonWrapper',
  components: {
    SpriteWrapper,
    NameWrapper,
    TypesWrapper,
    StatsWrapper,
    WeaknessesWrapper
  },
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true
    }
  },
  setup(props) {
    const selectedAlternateForm: Ref<AlternateForm | null> = ref(null);

    const pokemonStats: Ref<Stats | null> = ref(null);

    const isLoading = ref(false);

    const errorMessage = ref('');

    onMounted(() => {
      if (props.pokemon.stats) {
        pokemonStats.value = props.pokemon.stats;
      }
    });

    async function loadStats(): Promise<void> {
      isLoading.value = true;
      errorMessage.value = '';

      await axios
        .get<PokemonDto>(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name.toLowerCase()}`)
        .then((response) => {
          pokemonStats.value = {
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            specialAttack: response.data.stats[3].base_stat,
            specialDefense: response.data.stats[4].base_stat,
            speed: response.data.stats[5].base_stat
          };
        })
        .catch(() => {
          errorMessage.value = 'Error while fetching stats';
        });

      isLoading.value = false;
    }

    return {
      selectedAlternateForm,
      pokemonStats,
      isLoading,
      errorMessage,
      loadStats
    };
  }
});
</script>

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
      <template v-if="pokemon.stats">
        <StatsWrapper
          :stats="pokemon.stats"
          :selected-alternate-form="selectedAlternateForm"
        />
      </template>
      <WeaknessesWrapper :pokemon-types="pokemon.types" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from 'vue';
import Pokemon from '@/models/Pokemon';
import AlternateForm from '@/models/AlternateForm';
import SpriteWrapper from './SpriteWrapper.vue';
import NameWrapper from './NameWrapper.vue';
import TypesWrapper from './TypesWrapper.vue';
import StatsWrapper from './StatsWrapper.vue';
import WeaknessesWrapper from './WeaknessesWrapper.vue';

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
  setup() {
    const selectedAlternateForm: Ref<AlternateForm | null> = ref(null);

    return {
      selectedAlternateForm
    };
  }
});
</script>

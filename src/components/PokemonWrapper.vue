<template>
  <div class="flex items-start gap-2 sm:gap-4">
    <SpriteWrapper
      :name="pokemon.name"
      :national-dex-number="pokemon.nationalDexNumber"
      :alternate-forms="pokemon.alternateForms"
    />
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <NameWrapper
          :name="pokemon.name"
          :national-dex-number="pokemon.nationalDexNumber"
          :scarlet-exclusive="pokemon.scarletExclusive"
          :violet-exclusive="pokemon.violetExclusive"
        />
        <TypesWrapper
          :pokemon-types="pokemon.types"
        />
      </div>
      <template v-if="pokemon.stats">
        <StatsWrapper :stats="pokemon.stats" />
      </template>
      <WeaknessesWrapper :pokemon-types="pokemon.types" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Pokemon from '@/models/Pokemon';
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
  }
});
</script>

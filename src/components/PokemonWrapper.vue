<template>
  <div class="flex items-start gap-2 sm:gap-4">
    <SpriteWrapper
      :name="pokemon.name"
      :national-dex-number="pokemon.nationalDexNumber"
      :alternate-forms="pokemon.alternateForms"
    />
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <p class="text-lg leading-5 font-semibold">
            <span class="text-xs font-normal">
              #{{ pokemon.nationalDexNumber }}
            </span>
            {{ pokemon.name }}
          </p>
          <img
            v-if="pokemon.scarletExclusive"
            src="@/assets/scarlet-logo-small.png"
            alt="Pokemon Scarlet logo small"
            class="h-3"
          />
          <img
            v-if="pokemon.violetExclusive"
            src="@/assets/violet-logo-small.png"
            alt="Pokemon Scarlet logo small"
            class="h-3"
          />
        </div>
        <div class="flex gap-0.5">
          <TypeWrapper
            v-for="pokemonType in pokemon.types"
            :key="pokemonType.label"
            :pokemon-type="pokemonType.label"
          />
        </div>
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
import TypeWrapper from './TypeWrapper.vue';
import StatsWrapper from './StatsWrapper.vue';
import WeaknessesWrapper from './WeaknessesWrapper.vue';

export default defineComponent({
  name: 'PokemonWrapper',
  components: {
    SpriteWrapper,
    TypeWrapper,
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

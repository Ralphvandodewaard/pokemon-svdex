<template>
  <div class="flex items-center gap-2">
    <p class="text-lg leading-5 font-semibold">
      <span class="text-xs font-normal">
        #{{ nationalDexNumber }}
      </span>
      {{ selectedAlternateForm?.name || name }}
    </p>
    <img
      v-if="scarletExclusive"
      src="@/assets/scarlet-logo-small.png"
      alt="Pokemon Scarlet logo small"
      class="h-3"
    />
    <img
      v-if="violetExclusive"
      src="@/assets/violet-logo-small.png"
      alt="Pokemon Scarlet logo small"
      class="h-3"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AlternateForm from '@/models/AlternateForm';

export default defineComponent({
  name: 'NameWrapper',
  props: {
    name: {
      type: String,
      required: true
    },
    nationalDexNumber: {
      type: Number,
      required: true
    },
    selectedAlternateForm: {
      type: Object as PropType<AlternateForm | null>
    },
    scarletExclusive: {
      type: Boolean
    },
    violetExclusive: {
      type: Boolean
    }
  }
});
</script>

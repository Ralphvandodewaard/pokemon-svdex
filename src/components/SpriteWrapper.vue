<template>
  <div class="flex flex-col">
    <div class="flex justify-center items-center flex-shrink-0 w-20 h-20 bg-neutral-800 border border-black rounded-lg overflow-hidden">
      <img
        :src="getImage"
        :alt="name"
        class="w-full h-full"
      >
    </div>
    <div
      v-if="alternateForms && alternateForms.length > 0"
      class="flex gap-2 text-xs text-blue-400"
    >
      <button @click="selectedAlternateForm = ''">
        1
      </button>
      <button
        v-for="(alternateForm, index) in alternateForms"
        :key="alternateForm"
        @click="selectedAlternateForm = alternateForm"
      >
        {{ index + 2 }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';

export default defineComponent({
  name: 'SpriteWrapper',
  props: {
    name: {
      type: String,
      required: true
    },
    nationalDexNumber: {
      type: Number,
      required: true
    },
    alternateForms: {
      type: Array as PropType<string[]>
    }
  },
  setup(props) {
    const selectedAlternateForm = ref('');

    const getImage = computed<string>(() => {
      return require(`@/assets/sprites/${selectedAlternateForm.value || props.nationalDexNumber}.png`);
    });

    return {
      getImage,
      selectedAlternateForm
    };
  }
});
</script>

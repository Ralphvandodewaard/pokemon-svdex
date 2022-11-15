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
      <button @click="$emit('update:modelValue', null)">
        1
      </button>
      <button
        v-for="alternateForm in alternateForms"
        :key="alternateForm.id"
        @click="$emit('update:modelValue', alternateForm)"
      >
        {{ getIndex(alternateForm.id) }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import AlternateForm from '@/models/AlternateForm';

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
      type: Array as PropType<AlternateForm[]>
    },
    modelValue: {
      type: Object as PropType<AlternateForm | null>
    }
  },
  setup(props) {
    const getImage = computed<string>(() => {
      return require(`@/assets/sprites/${props.modelValue?.id || props.nationalDexNumber}.png`);
    });

    function getIndex(id: string): number {
      if (props.alternateForms) {
        return props.alternateForms.findIndex((alternateForm: AlternateForm) => alternateForm.id === id) + 2;
      }

      return 0;
    }

    return {
      getImage,
      getIndex
    };
  }
});
</script>

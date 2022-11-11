<template>
  <div
    :class="getBackgroundClass"
    class="flex justify-center w-16 border border-black rounded"
  >
    <p class="text-sm text-white">
      {{ type }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TypeWrapper',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const getBackgroundClass = computed<string>(() => {
      return `bg-${props.type.toLowerCase()}`;
    });

    return {
      getBackgroundClass
    };
  }
});
</script>

<template>
  <div class="relative w-full max-w-xs text-black">
    <label
      for="search"
      class="absolute top-0 left-0 flex items-center h-full pl-3"
    >
      <SearchIcon class="h-4" />
    </label>
    <input
      type="text"
      id="search"
      :value="modelValue"
      placeholder="Search"
      autocomplete="off"
      class="w-full pl-9 pr-8 py-1 placeholder-current bg-white rounded-lg outline-none"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchIcon from '@/assets/icons/search-icon.svg';

export default defineComponent({
  name: 'SearchInput',
  components: {
    SearchIcon
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  }
});
</script>

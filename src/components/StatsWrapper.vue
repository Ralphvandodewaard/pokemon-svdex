<template>
  <div class="flex gap-4 bg-neutral-800 text-xs rounded">
    <div class="flex flex-col">
      <div
        v-for="stat in stats"
        :key="stat.key"
        class="flex justify-end items-center h-6 pl-1"
      >
        <p>
          {{ stat.label }}
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <div
        v-for="stat in stats"
        :key="stat.key"
        class="flex justify-end items-center h-6"
      >
        <p>
          {{ stat.value }}
        </p>
      </div>
    </div>
    <div class="flex flex-col flex-grow">
      <div
        v-for="stat in stats"
        :key="stat.key"
        class="flex items-center h-6"
      >
        <div
          v-if="stat.key !== 'total'"
          :style=" { 'width': getBarWidth(stat) }"
          :class="getBarColorClass(stat)"
          class="h-3 w-full rounded border border-black"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Stat from '@/models/Stat';

export default defineComponent({
  name: 'StatsWrapper',
  props: {
    stats: {
      type: Array as PropType<Stat[]>,
      required: true
    }
  },
  setup() {
    function getBarWidth(stat: Stat): string {
      if (stat.value) {
        return `${(stat.value / 255) * 100}%`;
      }

      return '0';
    }

    function getBarColorClass(stat: Stat): string {
      if (stat.value) {
        if (stat.value >= 150) {
          return 'bg-stats-ultra-high';
        } else if (stat.value >= 120) {
          return 'bg-stats-very-high';
        } else if (stat.value >= 90) {
          return 'bg-stats-high';
        } else if (stat.value >= 60) {
          return 'bg-stats-average';
        } else {
          return 'bg-stats-low';
        }
      }

      return 'bg-black';
    }

    return {
      getBarWidth,
      getBarColorClass
    };
  }
});
</script>

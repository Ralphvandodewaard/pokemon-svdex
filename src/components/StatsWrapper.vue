<template>
  <div class="flex flex-col pr-0.5 sm:pr-2 bg-neutral-800 text-xs border border-black rounded">
    <div
      v-for="(stat, index) in allStats"
      :key="index"
      class="flex items-center gap-4 h-6"
    >
      <p class="w-16 text-right">
        {{ getStatLabel(index) }}
      </p>
      <p class="w-5">
        {{ stat }}
      </p>
      <div class="flex-grow">
        <div
          :style=" { 'width': getBarWidth(stat) }"
          :class="getBarColorClass(stat)"
          class="h-3 rounded border border-black"
        />
      </div>
    </div>
    <div class="flex items-center gap-4 h-6">
      <p class="w-16 text-right">
        Total
      </p>
      <p>
        {{ totalStat }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import Stats from '@/models/Stats';
import AlternateForm from '@/models/AlternateForm';

export default defineComponent({
  name: 'StatsWrapper',
  props: {
    stats: {
      type: Object as PropType<Stats>,
      required: true
    },
    selectedAlternateForm: {
      type: Object as PropType<AlternateForm | null>
    }
  },
  setup(props) {
    const allStats = computed<number[]>(() => {
      return props.selectedAlternateForm && props.selectedAlternateForm.stats
        ? Object.values(props.selectedAlternateForm.stats)
        : Object.values(props.stats);
    });

    const totalStat = computed<number>(() => {
      const stats = props.selectedAlternateForm && props.selectedAlternateForm.stats
        ? props.selectedAlternateForm.stats
        : props.stats;

      return stats.hp +
        stats.attack +
        stats.defense +
        stats.specialAttack +
        stats.specialDefense +
        stats.speed;
    });

    function getStatLabel(index: number): string {
      switch (index) {
        case 0:
          return 'HP';
        case 1:
          return 'Attack';
        case 2:
          return 'Defense';
        case 3:
          return 'Sp. Atk';
        case 4:
          return 'Sp. Def';
        default: {
          return 'Speed';
        }
      }
    }

    function getBarWidth(stat: number): string {
      return `${(stat / 255) * 100}%`;
    }

    function getBarColorClass(stat: number): string {
      if (stat >= 150) {
        return 'bg-stats-ultra-high';
      } else if (stat >= 120) {
        return 'bg-stats-very-high';
      } else if (stat >= 90) {
        return 'bg-stats-high';
      } else if (stat >= 60) {
        return 'bg-stats-average';
      } else {
        return 'bg-stats-low';
      }
    }

    return {
      allStats,
      totalStat,
      getStatLabel,
      getBarWidth,
      getBarColorClass
    };
  }
});
</script>

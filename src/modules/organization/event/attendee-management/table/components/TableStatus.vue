<template>
  <div
    v-if="data === 'PENDING'"
    class="flex items-center // space-x-1 // text-primary-6"
  >
    <base-icon class="w-2 h-2">
      <clock-icon />
    </base-icon>
    <div>
      {{ status }}
    </div>
  </div>
  <div
    v-else-if="data === 'APPROVED'"
    class="flex items-center // space-x-1 // text-green-6"
  >
    <base-icon class="w-2 h-2">
      <check-icon />
    </base-icon>
    <div>
      {{ status }}
    </div>
  </div>
  <div v-else>
    {{ status }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CheckIcon from "@/assets/Check.vue";
import ClockIcon from "@/assets/Clock.vue";

export default defineComponent({
  name: "TableStatus",
  components: {
    CheckIcon,
    ClockIcon
  },
  props: {
    data: {
      type: String
    }
  },
  setup(props) {
    const status = ref(props.data);
    if (status.value) {
      status.value =
        status.value?.charAt(0).toUpperCase() +
        status.value?.slice(1).toLowerCase();
    }
    return {
      status
    };
  }
});
</script>

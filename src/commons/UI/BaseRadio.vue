<template>
  <div
    class="rounded-full border p-0.25 flex"
    :class="{ 'border-gray-4': !isChecked, 'border-primary': isChecked }"
  >
    <div v-show="isChecked" class="w-full h-full rounded-full bg-primary"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseRadio",
  props: {
    isChecked: {
      type: Boolean,
      required: true,
      default: false
    }
  }
});
</script>

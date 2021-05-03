<template>
  <div
    class="px-1 border border-primary-5 bg-primary-2 rounded-lg font-body text-sm text-primary-7 w-max whitespace-nowrap select-none"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseTag"
});
</script>

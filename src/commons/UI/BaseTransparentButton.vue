<template>
  <button
    class="flex items-center justify-center bg-transparent hover:text-gray-5 focus:text-primary focus:outline-none"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseTransparentButton"
});
</script>

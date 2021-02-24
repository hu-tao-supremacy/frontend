<template>
  <button
    class="bg-transparent focus:bg-primary-2 focus:outline-none border border-gray-4 hover:border-primary focus:border-primary-4 text-primary focus:text-primary-4 rounded-full"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCircleButton"
});
</script>

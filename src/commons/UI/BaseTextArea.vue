<template>
  <textarea
    :rows="rows"
    class="text-input border border-gray-4 rounded-lg px-1.5 focus:border-primary focus:outline-none overflow-hidden"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseTextArea",
  props: {
    rows: {
      type: Number
    }
  }
});
</script>

<style scoped>
.text-input:focus {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}
</style>

<template>
  <textarea
    :rows="rows"
    :value="modelValue"
    @input="userChange"
    class="text-input border border-gray-4 rounded-lg px-1.5 focus:border-primary focus:outline-none overflow-hidden"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  name: "BaseTextArea",
  props: {
    rows: {
      type: Number
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(_, context) {
    function userChange(event: Event) {
      const target = event.target as HTMLInputElement;
      context.emit(UPDATE_MODEL_VALUE, target.value);
    }

    return { userChange };
  }
});
</script>

<style scoped>
.text-input:focus {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}
</style>

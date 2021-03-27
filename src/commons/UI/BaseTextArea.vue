<template>
  <textarea
    :rows="rows"
    :value="modelValue"
    @input="userChange"
    class="text-input border rounded-lg px-1.5 focus:border-primary focus:outline-none overflow-hidden"
    :class="{ 'border-gray-4': !isError, 'error-shadow border-red-5': isError }"
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
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  emits: [UPDATE_MODEL_VALUE],
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

.error-shadow {
  box-shadow: 0px 0px 0px 2px rgba(255, 163, 158, 0.5);
}
</style>

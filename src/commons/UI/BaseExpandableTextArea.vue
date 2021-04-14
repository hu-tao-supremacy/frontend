<template>
  <div
    @input="userInput"
    role="textbox"
    aria-multiline="true"
    contenteditable
    class="text-input border rounded-lg px-1.5 py-0.5 focus:border-primary focus:outline-none overflow-hidden"
    :class="{ 'border-gray-4': !isError, 'error-shadow border-red-5': isError }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  name: "BaseExpandableTextArea",
  props: {
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
    const input = ref("");

    function userInput(event: InputEvent) {
      const target: HTMLElement = event.target as HTMLElement;
      context.emit(UPDATE_MODEL_VALUE, target.innerHTML);
    }

    return { userInput, input };
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

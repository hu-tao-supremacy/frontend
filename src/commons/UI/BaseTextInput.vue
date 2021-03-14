<template>
  <input
    type="text"
    :value="modelValue"
    @input="userChange"
    class="text-input border border-gray-4 rounded-lg px-1.5 focus:border-primary focus:outline-none"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseTextInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(_, context) {
    function userChange(event: Event) {
      const target = event.target as HTMLInputElement;
      context.emit("update:modelValue", target.value);
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

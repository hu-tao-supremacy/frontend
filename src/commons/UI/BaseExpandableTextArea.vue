<template>
  <textarea
    ref="textAreaRef"
    :value="modelValue"
    @input="userChange"
    :placeholder="placeholder"
    class="text-input border rounded-lg px-1.5 py-0.5 focus:border-primary focus:outline-none overflow-hidden resize-none"
    :class="{ 'border-gray-4': !isError, 'error-shadow border-red-5': isError }"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
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
    },
    minHeight: {
      type: String,
      default: "30px"
    },
    placeholder: {
      type: String
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const textAreaRef = ref<null | {
      style: { height: string };
      scrollHeight: number;
    }>(null);

    function adjustHeight() {
      if (textAreaRef.value) {
        textAreaRef.value.style.height = props.minHeight;
        textAreaRef.value.style.height = textAreaRef.value.scrollHeight + "px";
      }
    }

    onMounted(() => {
      adjustHeight();
    });

    function userChange(event: Event) {
      const target = event.target as HTMLInputElement;
      context.emit(UPDATE_MODEL_VALUE, target.value);
      adjustHeight();
    }

    return { userChange, textAreaRef };
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

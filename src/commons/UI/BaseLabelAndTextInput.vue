<template>
  <div class="flex flex-col">
    <label :for="inputName" :class="labelClass"
      >{{ label }}<span v-if="isRequired" class="text-red-5"> *</span></label
    >
    <BaseTextInput
      v-if="!isExpandableTextInput"
      @update:modelValue="userInput"
      :modelValue="modelValue"
      :id="inputName"
      :name="inputName"
      :isError="isError"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="textInputClass"
    />
    <BaseExpandableTextArea
      v-else
      @update:modelValue="userInput"
      :modelValue="modelValue"
      :id="inputName"
      :name="inputName"
      :isError="isError"
      :disabled="disabled"
      :placeholder="placeholder"
      :minHeight="expandableTextInputMinHeight"
      :class="expandableTextInputClass"
    />
    <p
      v-if="hasErrorText"
      v-show="isError"
      class="text-red-5"
      :class="errorTextClass"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRef, watch } from "vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseExpandableTextArea from "@/commons/UI/BaseExpandableTextArea.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  name: "BaseLabelAndTextInput",
  components: {
    BaseTextInput,
    BaseExpandableTextArea
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      required: true
    },
    errorText: {
      type: String
    },
    isError: {
      type: Boolean,
      default: false
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    isExpandableTextInput: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    expandableTextInputMinHeight: {
      type: String,
      default: "30px"
    },
    labelClass: {
      type: String,
      default: "mb-0.25"
    },
    textInputClass: {
      type: String,
      default: "max-w-full input-height"
    },
    errorTextClass: {
      type: String,
      default: "text-sm  mt-0.25 ml-1.5"
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const hasErrorText = computed(() => {
      return !!props.errorText && props.errorText !== "";
    });

    const expandableTextInputClass = computed(() => {
      if (props.textInputClass === "max-w-full input-height")
        return "max-w-full";
      return props.textInputClass;
    });

    function userInput(value: string) {
      context.emit(UPDATE_MODEL_VALUE, value);
    }

    return {
      hasErrorText,
      expandableTextInputClass,
      userInput
    };
  }
});
</script>

<style scoped>
.input-height {
  height: 30px;
}
</style>

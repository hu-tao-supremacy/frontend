<template>
  <div
    class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex flex-col justify-center relative"
  >
    <label :for="questionId" class="w-max font-heading text-xl mb-0.25"
      >{{ question }}
      <span v-if="!optional" class="text-red-5">*</span>
    </label>
    <BaseTextInput
      :id="questionId"
      v-model="userAnswer"
      @input="userChange"
      class="w-full h-4 flex"
      :placeholder="placeholderText"
    />
    <base-transparent-button class="cross-btn absolute" @click="removeCategory"
      ><base-icon width="24px" height="24px"><XIcon /></base-icon
    ></base-transparent-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { USER_INPUT } from "@/commons/constant";
import useCategoryInput from "./useCategoryInput";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import XIcon from "@/assets/X.vue";

export default defineComponent({
  name: "CategoryInput",
  components: {
    BaseTextInput,
    BaseTransparentButton,
    XIcon
  },
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      default: ""
    },
    placeholderText: {
      type: String,
      default: ""
    },
    questionId: {
      type: [Number, String],
      required: true
    },
    optional: {
      type: Boolean,
      default: true
    }
  },
  emits: [USER_INPUT, "remove"],
  setup(props, context) {
    const { userAnswer, userChange, removeCategory } = useCategoryInput(
      props.answer,
      context
    );
    return { userAnswer, userChange, removeCategory };
  }
});
</script>

<style scoped>
.cross-btn {
  top: 22px;
  right: 22px;
}
</style>

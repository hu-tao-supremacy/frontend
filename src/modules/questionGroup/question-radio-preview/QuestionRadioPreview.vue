<template>
  <div
    class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex flex-col justify-center relative"
  >
    <label :for="questionId" class="w-max font-heading text-xl mb-0.25">{{
      question
    }}</label>
    <BaseTextInput
      :id="questionId"
      v-model="userAnswer"
      @input="userChange"
      class="w-full h-4 flex"
      :placeholder="placeholderText"
    />
    <section class="flex">
      <h2 class="mt-3 mr-4 text-gray-4">Strongly Disagree</h2>
      <div
        v-for="(value, index) in values"
        :key="value"
        :class="getRadioMargin(index)"
        class="flex flex-col items-center"
      >
        <label :for="value" name="choice" class="mb-0.75 text-gray-4">{{
          value
        }}</label>
        <BaseRadio :id="value" class="w-2 h-2 text-gray-4" disabled />
      </div>
      <h2 class="ml-4 mt-3 text-gray-4">Strongly Agree</h2>
    </section>
    <base-transparent-button class="cross-btn absolute"
      ><base-icon width="24px" height="24px"><XIcon /></base-icon
    ></base-transparent-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { USER_INPUT } from "@/commons/constant";
import useQuestionRadioPreview from "./useQuestionRadioPreview";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import BaseRadio from "@/commons/UI/BaseRadio.vue";
import XIcon from "@/assets/X.vue";

export default defineComponent({
  name: "QuestionRadioPreview",
  components: {
    BaseTextInput,
    BaseTransparentButton,
    BaseRadio,
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
    }
  },
  emits: [USER_INPUT],
  setup(props, context) {
    const {
      userAnswer,
      userChange,
      values,
      getRadioMargin
    } = useQuestionRadioPreview(props.answer, context);
    return { userAnswer, userChange, values, getRadioMargin };
  }
});
</script>

<style scoped>
.cross-btn {
  top: 22px;
  right: 22px;
}
</style>

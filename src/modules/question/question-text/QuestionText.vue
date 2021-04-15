<template>
  <div
    class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex flex-col justify-center"
  >
    <label :for="questionId" class="w-max font-heading text-xl mb-0.25"
      >{{ question }}
      <span v-if="!optional" class="text-red-5">*</span>
    </label>
    <BaseExpandableTextArea
      :id="questionId"
      v-model="userAnswer"
      @input="userChange"
      class="input-container w-37.5"
      :placeholder="placeholderText"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseExpandableTextArea from "@/commons/UI/BaseExpandableTextArea.vue";
import { USER_INPUT } from "@/commons/constant";
import useQuestionText from "./useQuestionText";

export default defineComponent({
  name: "QuestionText",
  components: {
    BaseExpandableTextArea
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
  emits: [USER_INPUT],
  setup(props, context) {
    const { userAnswer, userChange } = useQuestionText(props.answer, context);
    return { userAnswer, userChange };
  }
});
</script>

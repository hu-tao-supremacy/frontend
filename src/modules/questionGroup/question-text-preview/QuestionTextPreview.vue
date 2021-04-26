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
    <BaseTextInput
      class="input-disable-container h-3.75"
      placeholder="Participants’ answer goes here!"
      disabled
    />
    <base-transparent-button class="cross-btn absolute"
      ><base-icon width="24px" height="24px"><XIcon /></base-icon
    ></base-transparent-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { USER_INPUT } from "@/commons/constant";
import useQuestionTextPreview from "./useQuestionTextPreview";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import XIcon from "@/assets/X.vue";

export default defineComponent({
  name: "QuestionTextPreview",
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
    }
  },
  emits: [USER_INPUT],
  setup(props, context) {
    const { userAnswer, userChange } = useQuestionTextPreview(
      props.answer,
      context
    );
    return { userAnswer, userChange };
  }
});
</script>

<style scoped>
.input-disable-container {
  width: 300px;
}
.cross-btn {
  top: 22px;
  right: 22px;
}
</style>

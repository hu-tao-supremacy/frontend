<template>
  <div class="flex flex-col p-4 items-center w-full">
    <div class="flex flex-col justify-center w-full content-max-width-s">
      <div class="text-4xl font-heading mb-3">Event Form</div>
      <div
        class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-2 px-3 flex items-center mb-4"
      >
        <base-icon
          width="40px"
          height="40px"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-primary mr-2"
          ><AlertIcon
        /></base-icon>
        <div class="text-lg font-bold font-heading">
          Basic information (e.g. Name, student info, contact, address) is
          already provided by our system!
        </div>
      </div>
      <div
        v-for="(question, index) in questions"
        :key="question.seq"
        class="mb-3"
      >
        <QuestionTextPreview
          :question="getQuestion(index)"
          :questionId="question.seq"
          @user-input="handleQuestionInput(index, $event)"
          @delete="popQuestion(index)"
          :placeholderText="'Enter your question here!'"
        />
      </div>
      <div
        class="shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex justify-center mb-3"
      >
        <base-button class="w-27 h-4" @click="addTextQuestion"
          >Add a Text Answer Question</base-button
        >
      </div>
      <div class="flex justify-end" @click="submitQuestions">
        <base-button class="w-16 h-4">Create Event</base-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import AlertIcon from "@/assets/Alert.vue";
import QuestionTextPreview from "@/modules/question/question-text-preview/QuestionTextPreview.vue";
import {
  AnswerType,
  SetEventQuestionsQuestionGroupInput,
  SetEventQuestionsQuestionInput
} from "@/apollo/types";

export default defineComponent({
  name: "CreateForm",
  components: {
    BaseButton,
    AlertIcon,
    QuestionTextPreview
  },
  setup() {
    const sqq = ref(0);
    const questions = reactive([] as SetEventQuestionsQuestionInput[]);

    const getQuestion = (index: number) => {
      return "Question" + " " + (index + 1);
    };

    const popQuestion = (index: number) => {
      questions.splice(index, 1);
    };

    const handleQuestionInput = (index: number, questionTitle: string) => {
      questions[index].title = questionTitle;
    };

    const addTextQuestion = () => {
      const seq = sqq.value++;
      questions.push({
        seq: seq,
        answerType: AnswerType.Text,
        isOptional: true,
        title: "",
        subtitle: ""
      });
    };

    return {
      getQuestion,
      popQuestion,
      handleQuestionInput,
      addTextQuestion,
      questions
    };
  }
});
</script>

<style></style>

<template>
  <div class="w-full">
    <div
      v-for="(question, index) in questions"
      :key="question.seq"
      class="mb-1"
    >
      <QuestionRadioPreview
        v-if="checkQuestionTypeScale(question.answerType)"
        :question="'Question' + ' ' + (index + 1)"
        :questionId="question.seq"
        @user-input="handleUserInput(index, $event)"
        @delete="popQuestion(index)"
      />
      <QuestionTextPreview
        v-else
        :question="'Question' + ' ' + (index + 1)"
        :questionId="question.seq"
        @user-input="handleUserInput(index, $event)"
        @delete="popQuestion(index)"
      />
    </div>
    <div
      class="shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex justify-center"
    >
      <base-button class="mr-4" @click="addTextQuestion"
        >Add a Text Answer Question</base-button
      >
      <base-button @click="addScaleQuestion"
        >Add a Scale Answer Question</base-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/commons/UI/BaseButton.vue";
import QuestionTextPreview from "../question-text-preview/QuestionTextPreview.vue";
import QuestionRadioPreview from "../question-radio-preview/QuestionRadioPreview.vue";
import { defineComponent, reactive } from "vue";
import { AnswerType, SetEventQuestionsQuestionInput } from "@/apollo/types";

export default defineComponent({
  name: "QuestionGroup",
  components: {
    BaseButton,
    QuestionTextPreview,
    QuestionRadioPreview
  },
  setup() {
    let sq = 0;
    const questions = reactive([] as SetEventQuestionsQuestionInput[]);
    const checkQuestionTypeScale = (type: string) => {
      return type === AnswerType.Scale;
    };
    const addTextQuestion = () => {
      sq++;
      questions.push({
        seq: sq,
        answerType: AnswerType.Text,
        isOptional: true,
        title: "",
        subtitle: ""
      });
      console.log(questions);
    };
    const addScaleQuestion = () => {
      sq++;
      questions.push({
        seq: sq,
        answerType: AnswerType.Scale,
        isOptional: true,
        title: "",
        subtitle: ""
      });
      console.log(questions);
    };

    const popQuestion = (index: number) => {
      questions.splice(index, 1);
      console.log(questions, "delete");
    };

    const handleUserInput = (index: number, answer: string) => {
      questions[index].title = answer;
      console.log(questions);
    };

    return {
      questions,
      checkQuestionTypeScale,
      addTextQuestion,
      addScaleQuestion,
      popQuestion,
      handleUserInput
    };
  }
});
</script>

<style></style>

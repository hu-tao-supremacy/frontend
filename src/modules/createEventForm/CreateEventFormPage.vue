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
      <div class="flex justify-end">
        <base-button
          class="w-16 h-4"
          @click="submitQuestions"
          :disabled="!isValidated"
          >Create Event</base-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import AlertIcon from "@/assets/Alert.vue";
import QuestionTextPreview from "@/modules/question/question-text-preview/QuestionTextPreview.vue";
import {
  AnswerType,
  QuestionGroupType,
  SetEventQuestionsInput,
  SetEventQuestionsQuestionGroupInput,
  SetEventQuestionsQuestionInput
} from "@/apollo/types";
import { createQuestion } from "./api";
import { useRoute } from "vue-router";

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
    const { sendQuestions } = createQuestion();
    const route = useRoute();
    const eventID = Number(route.params.id);

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
      console.log(questions);
    };

    const resetSequence = (questions: SetEventQuestionsQuestionInput[]) => {
      const input = questions.map((question, index) => {
        const newQuestion = { ...question };
        newQuestion.seq = index + 1;
        return newQuestion;
      });
      return input;
    };

    const submitQuestions = () => {
      const input = {
        eventId: eventID,
        questionGroups: [
          {
            type: QuestionGroupType.PreEvent,
            seq: 1,
            title: "",
            questions: resetSequence(questions)
          }
        ] as SetEventQuestionsQuestionGroupInput[]
      } as SetEventQuestionsInput;
      sendQuestions({ input: input });
    };

    const isValidated = computed(
      () =>
        questions.length !== 0 && !questions.find(question => !question.title)
    );

    return {
      getQuestion,
      popQuestion,
      handleQuestionInput,
      addTextQuestion,
      questions,
      submitQuestions,
      isValidated
    };
  }
});
</script>

<style></style>

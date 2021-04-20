<template>
  <div class="flex flex-col p-4 items-center w-full">
    <div class="flex flex-col justify-center w-full content-max-width-s">
      <div class="text-4xl font-heading mb-3">Event Feedback</div>
      <QuestionStarPreview class="mb-6" />
      <div
        v-for="(group, gIndex) in questionGroups"
        :key="group.seq"
        class="w-full mb-6"
      >
        <CategoryInput
          :question="'Category' + ' ' + (gIndex + 1)"
          class="mb-1"
          @user-input="handleUserInput(gIndex, $event)"
          @remove="popCategory(gIndex)"
        />
        <div class="w-full">
          <div
            v-for="(question, index) in group.questions"
            :key="question.seq"
            class="mb-1"
          >
            <QuestionRadioPreview
              v-if="checkQuestionTypeScale(question.answerType)"
              :question="'Question' + ' ' + (index + 1)"
              :questionId="question.seq"
              @user-input="handleQuestionInput(gIndex, index, $event)"
              @delete="popQuestion(gIndex, index)"
            />
            <QuestionTextPreview
              v-else
              :question="'Question' + ' ' + (index + 1)"
              :questionId="question.seq"
              @user-input="handleQuestionInput(gIndex, index, $event)"
              @delete="popQuestion(gIndex, index)"
            />
          </div>
          <div
            class="shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex justify-center"
          >
            <base-button class="mr-4" @click="addTextQuestion(gIndex)"
              >Add a Text Answer Question</base-button
            >
            <base-button @click="addScaleQuestion(gIndex)"
              >Add a Scale Answer Question</base-button
            >
          </div>
        </div>
      </div>
      <div
        class="shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex justify-center w-full"
      >
        <base-button @click="addCategory"> Add a Category Header </base-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import {
  AnswerType,
  QuestionGroupType,
  SetEventQuestionsInput,
  SetEventQuestionsQuestionGroupInput,
  SetEventQuestionsQuestionInput
} from "@/apollo/types";
import BaseButton from "@/commons/UI/BaseButton.vue";
import CategoryInput from "./category-input/CategoryInput.vue";
import QuestionTextPreview from "./question-text-preview/QuestionTextPreview.vue";
import QuestionRadioPreview from "./question-radio-preview/QuestionRadioPreview.vue";
import QuestionStarPreview from "./question-star-preview/QuestionStarPreview.vue";

export default defineComponent({
  name: "CreateFeedback",
  components: {
    BaseButton,
    CategoryInput,
    QuestionTextPreview,
    QuestionRadioPreview,
    QuestionStarPreview
  },
  setup() {
    const hello = "hello";
    let sq = 0;
    let sqq = 0;
    const route = useRoute();
    const eventID = Number(route.params.id);
    const questionInput = reactive({} as SetEventQuestionsInput);
    const questionGroups = reactive(
      [] as SetEventQuestionsQuestionGroupInput[]
    );
    const questions = reactive([] as SetEventQuestionsQuestionInput[]);
    questionInput.eventId = eventID;
    questionInput.questionGroups = questionGroups;

    const addCategory = () => {
      sq++;
      questionGroups.push({
        type: QuestionGroupType.PostEvent,
        seq: sq,
        title: "",
        questions: [] as SetEventQuestionsQuestionInput[]
      });
      console.log(questionGroups);
    };

    const popCategory = (index: number) => {
      questionGroups.splice(index, 1);
      console.log(questionGroups, "remove");
    };

    const handleUserInput = (index: number, answer: string) => {
      questionGroups[index].title = answer;
      console.log(questionGroups);
    };

    const checkQuestionTypeScale = (type: string) => {
      return type === AnswerType.Scale;
    };
    const addTextQuestion = (index: number) => {
      sqq++;
      questionGroups[index].questions.push({
        seq: sqq,
        answerType: AnswerType.Text,
        isOptional: true,
        title: "",
        subtitle: ""
      });
      console.log(questionGroups);
    };
    const addScaleQuestion = (index: number) => {
      sqq++;
      questionGroups[index].questions.push({
        seq: sqq,
        answerType: AnswerType.Scale,
        isOptional: true,
        title: "",
        subtitle: ""
      });
      console.log(questionGroups);
    };

    const popQuestion = (gIndex: number, index: number) => {
      questionGroups[gIndex].questions.splice(index, 1);
      console.log(questions, "delete");
    };

    const handleQuestionInput = (
      gIndex: number,
      index: number,
      answer: string
    ) => {
      questionGroups[gIndex].questions[index].title = answer;
      console.log(questionGroups);
    };

    return {
      hello,
      eventID,
      addCategory,
      questionGroups,
      popCategory,
      handleUserInput,
      checkQuestionTypeScale,
      addTextQuestion,
      addScaleQuestion,
      popQuestion,
      handleQuestionInput
    };
  }
});
</script>

<style></style>

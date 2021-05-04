<template>
  <div class="flex flex-col p-4 items-center w-full">
    <CreateEventSuccessModal
      v-if="isSuccessModalShown"
      @close-modal="closeSuccessModal"
    />
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
      <div class="flex justify-end items-center">
        <div
          class="underline-offset text-gray-5 mr-3 underline hover:text-gray-7 cursor-pointer"
          @click="showSuccessModal"
        >
          Not now
        </div>
        <base-button
          class="w-16 h-4"
          @click="submitQuestions"
          :disabled="!isValidated"
          >Create Form</base-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import AlertIcon from "@/assets/Alert.vue";
import QuestionTextPreview from "@/modules/question/question-text-preview/QuestionTextPreview.vue";
import CreateEventSuccessModal from "./create-event-success-modal/CreateEventSuccessModal.vue";
import useCreateEventForm from "./use-create-event-form";

export default defineComponent({
  name: "CreateForm",
  components: {
    BaseButton,
    AlertIcon,
    QuestionTextPreview,
    CreateEventSuccessModal
  },
  setup() {
    const {
      getQuestion,
      popQuestion,
      handleQuestionInput,
      addTextQuestion,
      questions,
      submitQuestions,
      isValidated,
      isSuccessModalShown,
      showSuccessModal,
      closeSuccessModal
    } = useCreateEventForm();

    return {
      getQuestion,
      popQuestion,
      handleQuestionInput,
      addTextQuestion,
      questions,
      submitQuestions,
      isValidated,
      isSuccessModalShown,
      showSuccessModal,
      closeSuccessModal
    };
  }
});
</script>

<style scoped>
.underline-offset {
  text-underline-offset: 2px;
}
</style>

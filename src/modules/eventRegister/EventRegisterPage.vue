<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <RegistrationStatus :step="step" />
    <div v-if="step === 2" class="container flex flex-col">
      <div class="mt-4 font-heading text-4xl">Summary</div>
      <PersonalInfoDes
        class="mt-3"
        :modelValue="test.user"
        @update:modelValue="value = $event"
      />
      <EventAnswer class="mt-3" :question="questionData" />
      <div class="flex justify-between mt-10">
        <base-button @click="decreaseStep" class="w-18 h-4 color"
          >Back</base-button
        >
        <base-button @click="increaseStep" class="w-18 h-4">Sumbit</base-button>
      </div>
    </div>
    <div
      v-else-if="step === 3"
      class="event-banner flex flex-col items-center justify-center"
    >
      <div class="mt-4 font-heading text-4xl">Congratulations!</div>
      <div class="mt-1 text-gray-5">
        You have successfully registered for...
      </div>
      <InfoBanner :eventBanner="test.eventBanner" class="mt-3" />
      <div class="mt-4 text-gray-5">
        An e-ticket has been sent to your inbox!
      </div>
      <div class="flex mt-6 self-end">
        <base-button class="w-20 h-4 mr-2">Go to event library</base-button>
        <base-button class="w-20 h-4">Browse more event</base-button>
      </div>
    </div>
    <div v-else class="container flex flex-col">
      <div class="mt-4 font-heading text-4xl">Personal Information</div>
      <PersonalInfo
        class="mt-3"
        :modelValue="test.user"
        @update:modelValue="value = $event"
      />
      <div class="font-heading text-4xl mt-4">Additional Question</div>
      <QuestionText
        class="mt-4"
        v-for="detail in questionData"
        :key="detail.id"
        :question="detail.seq + '. ' + detail.title"
        @user-input="handleUserAnswer(detail.id, $event)"
        :answer="detail.answer"
      />
      <div class="flex mt-10 self-end">
        <base-button @click="increaseStep" class="w-18 h-4"
          >Continue</base-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import RegistrationStatus from "./registration-status/RegistrationStatus.vue";
import PersonalInfo from "./personal-info/PersonalInfo.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import InfoBanner from "./info-banner/InfoBanner.vue";
import PersonalInfoDes from "./personal-info-des/PersonalInfoDes.vue";
import QuestionText from "@/modules/question/question-text/QuestionText.vue";
import EventAnswer from "./event-answer/EventAnswer.vue";
import useUser from "@/modules/authentication";
import { testData } from "./testData";
import { useQuestions } from "./api";
import { QuestionWithAnswer } from "./type";

export default defineComponent({
  name: "EventRegisterPage",
  components: {
    RegistrationStatus,
    PersonalInfo,
    PersonalInfoDes,
    BaseButton,
    InfoBanner,
    QuestionText,
    EventAnswer
  },
  setup() {
    const test = reactive(testData);
    const step = ref(1);
    const questionData = reactive([] as QuestionWithAnswer[]);

    const increaseStep = () => {
      step.value++;
      console.log(step.value);
    };
    const decreaseStep = () => {
      step.value--;
      console.log(step.value);
    };
    const handleUserAnswer = (id: number, answer: string) => {
      const question = questionData.find(
        value => value.id === id
      ) as QuestionWithAnswer;
      question.answer = answer;
      console.log(questionData);
    };
    const { result: questions, onResult } = useQuestions();

    onResult(result => {
      Object.assign(
        questionData,
        result.data.event.questionGroups[0].questions
      );
    });

    return {
      test,
      step,
      increaseStep,
      decreaseStep,
      handleUserAnswer,
      questions,
      questionData
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 792px;
}
.event-banner {
  max-width: 960px;
}
.color {
  background: #cbd5e0;
}
</style>

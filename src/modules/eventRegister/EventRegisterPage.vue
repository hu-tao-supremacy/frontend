<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <RegistrationStatus :step="step" />
    <div v-if="step === 2" class="container">
      <div class="mt-4 font-heading text-4xl">Summary</div>
      <PersonalInfoDes class="mt-3" />
      <div class="flex flex-col mt-4">
        <div class="font-heading text-4xl">Additional Question</div>
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
    <div v-else class="container">
      <div class="mt-4 font-heading text-4xl">Personal Information</div>
      <PersonalInfo
        class="mt-3"
        :modelValue="test.user.firstName"
        @update:modelValue="value = $event"
      />
      <div class="flex flex-col mt-4">
        <div class="font-heading text-4xl">Additional Question</div>
        <form @submit.prevent="submitAnswer">
          <BaseTextInput :value="test.user.firstName" />
        </form>
      </div>
    </div>
    <base-button v-if="step === 1" @click="increaseStep" class="w-18 h-4"
      >Continue {{ step }}</base-button
    >
    <base-button v-else-if="step === 2" @click="increaseStep" class="w-18 h-4"
      >Sumbit {{ step }}</base-button
    >
    <br />
    <base-button v-if="step === 2" @click="decreaseStep" class="w-18 h-4"
      >Back {{ step }}</base-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref, watch, reactive } from "vue";
import RegistrationStatus from "./registration-status/RegistrationStatus.vue";
import PersonalInfo from "./personal-info/PersonalInfo.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import usePersonalInfo from "./api";
import { testData } from "./testData";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import InfoBanner from "./info-banner/InfoBanner.vue";
import PersonalInfoDes from "./personal-info-des/PersonalInfoDes.vue";

export default defineComponent({
  name: "EventRegisterPage",
  components: {
    RegistrationStatus,
    PersonalInfo,
    PersonalInfoDes,
    BaseButton,
    BaseTextInput,
    InfoBanner
  },
  setup() {
    const test = reactive(testData);
    const step = ref(1);
    onUpdated(() => console.log("component update"));
    const increaseStep = () => {
      step.value++;
      console.log(step.value);
    };
    const decreaseStep = () => {
      step.value--;
      console.log(step.value);
    };
    const submitForm = () => {
      step.value++;
      console.log(step.value);
    };
    const submitAnswer = () => {
      console.log("hello");
    };
    const { result: personalInfo } = usePersonalInfo();

    watch(personalInfo, () => {
      console.log(personalInfo.value, "value");
    });
    return {
      test,
      step,
      increaseStep,
      decreaseStep,
      submitForm,
      personalInfo
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
</style>

<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <RegistrationStatus :step="step" />
    <div v-if="step === 2" class="step2">
      <div class="mt-4 font-heading text-4xl">Summary</div>
      <PersonalInfo class="mt-3" />
      <div class="flex flex-col mt-4">
        <div class="font-heading text-4xl">Additional Question</div>
      </div>
    </div>
    <div v-else-if="step === 3" class="step2">
      <div class="mt-4 font-heading text-4xl">Congratulations!</div>
      <PersonalInfo class="mt-3" />
      <div class="flex flex-col mt-4">
        <div class="font-heading text-4xl">Additional Question</div>
      </div>
    </div>
    <div v-else class="step1">
      <div class="mt-4 font-heading text-4xl">Personal Information</div>
      <PersonalInfo class="mt-3" />
      <div class="flex flex-col mt-4">
        <div class="font-heading text-4xl">Additional Question</div>
      </div>
    </div>
    <base-button v-if="step !== 3" @click="increaseStep" class="w-18 h-4"
      >Continue {{ step }}</base-button
    >
    <base-button v-else-if="step === 2" @click="submitForm" class="w-18 h-4"
      >Sumbit {{ step }}</base-button
    >
    <br />
    <base-button v-if="step === 2" @click="decreaseStep" class="w-18 h-4"
      >Back {{ step }}</base-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from "vue";
import RegistrationStatus from "./registration-status/RegistrationStatus.vue";
import PersonalInfo from "./personal-info/PersonalInfo.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";

export default defineComponent({
  name: "EventRegisterPage",
  components: {
    RegistrationStatus,
    PersonalInfo,
    BaseButton
  },
  setup() {
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
    return {
      step,
      increaseStep,
      decreaseStep,
      submitForm
    };
  }
});
</script>

<style scoped>
.step1 {
  max-width: 792px;
}
</style>

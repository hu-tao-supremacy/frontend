<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <div class="container">
      <RegistrationStatus :step="step" />
    </div>
    <base-button @click="firstClick" class="w-18 h-4"
      >Continue {{ step }}</base-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import testData from "@/modules/userCheckIn/use-user-checkin/testData";
import RegistrationStatus from "@/modules/eventRegister/registration-status/RegistrationStatus.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";

export default defineComponent({
  name: "EventRegisterPage",
  components: {
    RegistrationStatus,
    BaseButton
  },
  setup() {
    const test = testData;
    const step = ref(0);
    const firstClick = () => {
      step.value++;
      console.log(step.value);
    };
    return {
      test,
      step,
      firstClick
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 960px;
}
</style>

<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <div class="container">
      <RegistrationStatus/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import testData from "@/modules/userCheckIn/use-user-checkin/testData";
import RegistrationStatus from "@/commons/UI/RegistrationStatus.vue"

export default defineComponent({
  name: "EventRegisterPage",
  components: {
    RegistrationStatus
  },
  setup() {
    const test = testData;
    return {
      test
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 960px;
}
</style>

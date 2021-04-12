<template>
  <div class="px-10 py-4 bg-white rounded-lg flex flex-col shadow-sm">
    <div class="font-heading text-4xl">Additional Questions</div>
    <div class="flex flex-col">
      <div
        v-for="detail in question"
        :key="detail.id"
        class="mt-3 flex flex-col"
      >
        <div>{{ detail.seq + ". " + detail.title }}</div>
        <BaseTextInput
          class="w-27 h-4 disabled:bg-white text-primary-6"
          :value="detail.answer"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import { QuestionWithAnswer } from "../use-event-register/type";

export default defineComponent({
  name: "EventAnswer",
  props: {
    question: {
      type: Object as () => QuestionWithAnswer[],
      required: true
    }
  },
  components: {
    BaseTextInput
  }
});
</script>

<style scoped></style>

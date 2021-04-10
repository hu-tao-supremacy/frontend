<template>
  <div class="px-10 py-4 bg-white rounded-lg flex flex-col shadow-sm">
    <div class="font-heading text-4xl">Additional Questions</div>
    <div class="flex flex-col">
      <div v-for="detail in question" :key="detail.id" class="mt-3">
        {{ detail.seq + ". " + detail.title }}
        <span
          ><BaseTextInput
            class="w-full h-4"
            :value="detail.answer"
            :disabled="true"
        /></span>
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

<style>
.text-input:disabled {
  background: white;
  color: #ff855f;
}
</style>

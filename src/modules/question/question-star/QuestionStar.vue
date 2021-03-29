<template>
  <div
    class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-4 px-10 flex flex-col justify-center"
  >
    <h1 class="font-heading text-xl ">Overall Rating</h1>
    <p class="text-gray-5 mb-1">How good was the event in general?</p>
    <BaseStarRating v-model="rating" @update:modelValue="changeRating" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseStarRating from "@/commons/UI/star-rating/BaseStarRating.vue";
import { USER_INPUT } from "@/commons/constant";
import useQuestionRating from "./useQuestionStar";

export default defineComponent({
  name: "QuestionStar",
  components: {
    BaseStarRating
  },
  emits: [USER_INPUT],
  setup(_, context) {
    const { rating, changeRating } = useQuestionRating(_, context);

    return { rating, changeRating };
  }
});
</script>

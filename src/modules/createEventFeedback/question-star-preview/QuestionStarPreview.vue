<template>
  <div
    class="w-full shadow-sm rounded-lg overflow-hidden bg-white py-4 pl-10 flex flex-col justify-center"
  >
    <div class="flex items-center w-full mb-2">
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
        Click on satisfaction level from 1 star (Unsatisfactory) to 5 stars
        (Excellent).
      </div>
    </div>
    <h1 class="font-heading text-xl ">Overall Rating</h1>
    <p class="text-gray-5 mb-1">
      Participants will give an overall rating here.
    </p>
    <div class="flex w-max">
      <base-icon
        v-for="(rating, index) in ratings"
        :key="rating"
        width="24"
        height="24"
        :class="{
          'mr-0.5': !isLastStar(index)
        }"
        class="text-primary"
        fillColor="#FF855F"
        ><StarIcon
      /></base-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { USER_INPUT } from "@/commons/constant";
import useQuestionRating from "./useQuestionStarPreview";
import AlertIcon from "@/assets/Alert.vue";
import StarIcon from "@/assets/Star.vue";

export default defineComponent({
  name: "QuestionStarPreview",
  components: {
    AlertIcon,
    StarIcon
  },
  emits: [USER_INPUT],
  setup(_, context) {
    const { rating, changeRating } = useQuestionRating(_, context);

    const ratings = [1, 2, 3, 4, 5];

    function isLastStar(index: number) {
      return index === ratings.length - 1;
    }

    return { rating, changeRating, ratings, isLastStar };
  }
});
</script>

<template>
  <div class="flex w-max" @mouseleave="changeTemporaryRating(-1)">
    <base-icon
      v-for="(rating, index) in ratings"
      :key="rating"
      @click="changeRating(rating)"
      @mouseover="changeTemporaryRating(rating)"
      width="24"
      height="24"
      :class="{
        'mr-0.5': !isLastStar(index),
        'text-primary': isFilled(rating),
        'text-gray-4': !isFilled(rating)
      }"
      :fillColor="fillColor(rating)"
      class="cursor-pointer"
      ><StarIcon
    /></base-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import StarIcon from "@/assets/Star.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  name: "BaseStarRating",
  components: {
    StarIcon
  },
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const ratings = [1, 2, 3, 4, 5];
    const currentRating = ref(props.modelValue);
    const temporaryRating = ref(-1);

    function isLastStar(index: number) {
      return index === ratings.length - 1;
    }

    function isFilled(rating: number) {
      if (temporaryRating.value !== -1) return rating <= temporaryRating.value;
      return rating <= currentRating.value;
    }

    function changeRating(rating: number) {
      currentRating.value = rating;
      context.emit(UPDATE_MODEL_VALUE, currentRating.value);
    }

    function changeTemporaryRating(rating: number) {
      temporaryRating.value = rating;
    }

    function fillColor(rating: number) {
      if (temporaryRating.value !== -1) {
        if (rating > temporaryRating.value) return "rgb(203, 213, 224)";
        else return "rgb(255, 133, 95)";
      }
      if (rating > currentRating.value) return "rgb(203, 213, 224)"; //gray-4
      return "rgb(255, 133, 95)"; //primary
    }

    return {
      ratings,
      isLastStar,
      isFilled,
      changeRating,
      changeTemporaryRating,
      fillColor
    };
  }
});
</script>

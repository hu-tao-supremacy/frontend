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
import { defineComponent } from "vue";
import StarIcon from "@/assets/Star.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import useBaseStarRating from "./useBaseStarRating";

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
    const {
      ratings,
      isLastStar,
      isFilled,
      changeRating,
      changeTemporaryRating,
      fillColor
    } = useBaseStarRating(props.modelValue, context);

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

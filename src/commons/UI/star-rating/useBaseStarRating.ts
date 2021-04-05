import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import { ref, SetupContext } from "vue";
import { PRIMARY_6, GRAY_4 } from "@/commons/constant/color";

export default function useBaseStarRating(
  initialRating: number,
  context: SetupContext<"update:modelValue"[]>
) {
  const ratings = [1, 2, 3, 4, 5];
  const currentRating = ref(initialRating);
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
      if (rating > temporaryRating.value) return GRAY_4;
      else return PRIMARY_6;
    }
    if (rating > currentRating.value) return GRAY_4;
    return PRIMARY_6;
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

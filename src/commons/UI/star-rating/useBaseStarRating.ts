import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useBaseStarRating(
  props: Readonly<
    {
      modelValue: number;
    } & {}
  >,
  context: SetupContext<"update:modelValue"[]>
) {
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

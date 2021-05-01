import { USER_INPUT } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useQuestionStarPreview(
  _: object,
  context: SetupContext<"user-input"[]>
) {
  const rating = ref(-1);

  const ratings = [1, 2, 3, 4, 5];

  function isLastStar(index: number) {
    return index === ratings.length - 1;
  }

  function changeRating() {
    context.emit(USER_INPUT, rating.value);
  }

  return { rating, changeRating, ratings, isLastStar };
}

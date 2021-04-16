import { USER_INPUT } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useQuestionStar(
  _: object,
  context: SetupContext<"user-input"[]>
) {
  const rating = ref(-1);

  function changeRating() {
    context.emit(USER_INPUT, rating.value);
  }

  return { rating, changeRating };
}

import { USER_INPUT } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useQuestionText(
  _: object,
  context: SetupContext<"user-input"[]>
) {
  const userAnswer = ref("");

  function userChange() {
    context.emit(USER_INPUT, userAnswer.value);
  }

  return { userAnswer, userChange };
}

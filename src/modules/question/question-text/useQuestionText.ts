import { USER_INPUT } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useQuestionText(
  context: SetupContext<"user-input"[]>,
  initailAnswer: string
) {
  const userAnswer = ref(initailAnswer);

  function userChange() {
    context.emit(USER_INPUT, userAnswer.value);
  }

  return { userAnswer, userChange };
}

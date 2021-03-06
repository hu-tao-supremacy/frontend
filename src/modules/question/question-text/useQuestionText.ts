import { USER_INPUT } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useQuestionText(
  initailAnswer: string,
  context: SetupContext<"user-input"[]>
) {
  const userAnswer = ref(initailAnswer);

  function userChange() {
    context.emit(USER_INPUT, userAnswer.value);
  }

  return { userAnswer, userChange };
}

import { USER_INPUT } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useQuestionText(
  initailAnswer: string,
  context: SetupContext<("user-input" | "delete")[]>
) {
  const userAnswer = ref(initailAnswer);

  function userChange() {
    context.emit(USER_INPUT, userAnswer.value);
  }

  function deleteQuestion() {
    context.emit("delete");
  }

  return { userAnswer, userChange, deleteQuestion };
}

import { USER_INPUT } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useQuestionRadio(
  initailAnswer: string,
  context: SetupContext<("user-input" | "delete")[]>
) {
  const userAnswer = ref(initailAnswer);
  const values = [1, 2, 3, 4, 5];

  function getRadioMargin(index: number) {
    return index === 4 ? "" : "mr-8";
  }

  function userChange() {
    context.emit(USER_INPUT, userAnswer.value);
  }

  function deleteQuestion() {
    context.emit("delete");
  }

  return { userAnswer, userChange, values, getRadioMargin, deleteQuestion };
}

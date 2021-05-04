import { USER_INPUT } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useCategoryInput(
  initailAnswer: string,
  context: SetupContext<("user-input" | "remove")[]>
) {
  const userAnswer = ref(initailAnswer);

  function userChange() {
    context.emit(USER_INPUT, userAnswer.value);
  }
  function removeCategory() {
    context.emit("remove");
  }
  return { userAnswer, userChange, removeCategory };
}

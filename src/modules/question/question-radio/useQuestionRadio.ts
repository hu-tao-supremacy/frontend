import { USER_INPUT } from "@/commons/constant";
import { ref, SetupContext } from "vue";

export default function useQuestionRadio(
  context: SetupContext<"user-input"[]>
) {
  const values = [1, 2, 3, 4, 5];
  const currentValue = ref(-1);

  function changeCurrentValue(value: number) {
    currentValue.value = value;
    context.emit(USER_INPUT, currentValue.value);
  }

  function isCurrentValue(value: number) {
    return currentValue.value === value;
  }

  function changeClass(index: number) {
    return index === 4 ? "" : "mr-8";
  }

  return {
    values,
    currentValue,
    changeCurrentValue,
    isCurrentValue,
    changeClass
  };
}

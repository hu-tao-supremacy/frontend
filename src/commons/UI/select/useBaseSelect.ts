import { ref, SetupContext, watch } from "vue";
import { UPDATE_SEARCH_TEXT_MODEL } from "@/commons/constant/index";

export default function useBaseSelect(
  props: Readonly<
    {
      searchTextModel: string;
      displayedOption: string;
      isSearchable: boolean;
    } & {}
  >,
  context: SetupContext<"update:searchTextModel"[]>
) {
  const isOptionShown = ref(false);
  const userInput = ref("");
  const buttonDisplay = ref("Select Option");

  function showOption() {
    isOptionShown.value = true;
  }

  function hideOption() {
    isOptionShown.value = false;
    if (props.displayedOption !== "") userInput.value = props.displayedOption;
  }

  function userChangeSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    context.emit(UPDATE_SEARCH_TEXT_MODEL, target.value);
  }

  watch(
    () => props.displayedOption,
    () => {
      isOptionShown.value = false;
      userInput.value = props.displayedOption;
      buttonDisplay.value = props.displayedOption;
    }
  );

  return {
    isOptionShown,
    userInput,
    buttonDisplay,
    showOption,
    hideOption,
    userChangeSearch
  };
}

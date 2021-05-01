import { Ref, ref, SetupContext, watch, computed } from "vue";

export default function useBaseSelect(
  //Required whole props to be able to watch displayedOption prop
  displayedOption: Ref<string>,
  placeholder: string,
  doesResetAfterSelect: boolean,
  context: SetupContext<"update:searchTextModel"[]>
) {
  const isOptionShown = ref(false);
  const userInput = ref(""); //Is use only when able to search
  const buttonDisplay = ref(placeholder); //Is use only when unable to search

  function showOption() {
    isOptionShown.value = true;
  }

  function hideOption() {
    isOptionShown.value = false;
    //Reset search field to previously selected value or to "" if doesResetAfterSelect is true
    if (displayedOption.value !== "" || doesResetAfterSelect)
      userInput.value = displayedOption.value;
  }

  function toggleShowOption() {
    isOptionShown.value = !isOptionShown.value;
  }

  function userChangeSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    context.emit("update:searchTextModel", target.value);
  }

  const hasNotSelected = computed(() => {
    return displayedOption.value === "";
  });

  watch(
    () => displayedOption.value,
    () => {
      isOptionShown.value = false;
      userInput.value = displayedOption.value;
      buttonDisplay.value = displayedOption.value;
    }
  );

  return {
    isOptionShown,
    userInput,
    buttonDisplay,
    hasNotSelected,
    showOption,
    hideOption,
    toggleShowOption,
    userChangeSearch
  };
}

import { ref, SetupContext, watch } from "vue";

export default function useBaseSelect(
  //Required whole props to be able to watch displayedOption prop
  props: Readonly<
    {
      searchTextModel: string;
      displayedOption: string;
      isSearchable: boolean;
      isError: boolean;
      placeholder: string;
    } & {}
  >,
  context: SetupContext<"update:searchTextModel"[]>
) {
  const isOptionShown = ref(false);
  const userInput = ref(""); //Is use only when able to search
  const buttonDisplay = ref(props.placeholder); //Is use only when unable to search

  function showOption() {
    isOptionShown.value = true;
  }

  function hideOption() {
    isOptionShown.value = false;
    //Reset search field to previously selected value
    if (props.displayedOption !== "") userInput.value = props.displayedOption;
  }

  function toggleShowOption() {
    isOptionShown.value = !isOptionShown.value;
  }

  function userChangeSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    context.emit("update:searchTextModel", target.value);
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
    toggleShowOption,
    userChangeSearch
  };
}

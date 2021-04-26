import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import { computed, Ref, ref, SetupContext } from "vue";
import Fuse from "fuse.js";

export default function useSingleNameSelect(
  optionNames: string[],
  optionValues: unknown[],
  doesResetAfterSelect: boolean,
  context: SetupContext<"update:modelValue"[]>
) {
  const searchText = ref("");
  const selectedOption: Ref<{ name: string; value: unknown }> = ref({
    name: "",
    value: null
  });
  const options: { name: string; value: unknown }[] = [];
  optionNames.forEach((name, i) => {
    const option = { name: name, value: optionValues[i] };
    options.push(option);
  });

  function resetSelectedOption() {
    selectedOption.value = {
      name: "",
      value: null
    };
  }

  function changeOption(option: { name: string; value: unknown }) {
    selectedOption.value = option;
    context.emit(UPDATE_MODEL_VALUE, selectedOption.value.value);
    if (doesResetAfterSelect) resetSelectedOption();
  }

  const displayedOption = computed(() => {
    if (!selectedOption.value.value && selectedOption.value.value !== 0)
      return "";
    return selectedOption.value.name;
  });

  const filteredOptions = computed(() => {
    if (searchText.value === "") return options;
    const config = { keys: ["name"] };
    const fuse = new Fuse(options, config);
    const filteredOptions = fuse.search(searchText.value);
    return filteredOptions;
  });

  function isLastOption(index: number) {
    return index === filteredOptions.value.length;
  }

  return {
    searchText,
    changeOption,
    isLastOption,
    displayedOption,
    filteredOptions
  };
}

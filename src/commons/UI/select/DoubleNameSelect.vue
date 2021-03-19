<template>
  <base-select
    v-model:searchText="searchText"
    :selectedOption="displayedOption"
    :showOptions="showOptions"
    @toggle-show-select-option="toggleShowOptions"
    :isSearchable="isSearchable"
    v-click-outside="closeOptions"
  >
    <div
      v-for="option in filteredOptions"
      :key="option.value"
      @click="changeOption(option)"
    >
      <p>{{ option.THName }}</p>
      <p>{{ option.ENGName }}</p>
    </div>
  </base-select>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref } from "vue";
import BaseSelect from "./BaseSelect.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  name: "DoubleNameSelect",
  components: {
    BaseSelect
  },
  props: {
    isSearchable: {
      type: Boolean,
      default: false
    },
    optionTHNames: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    optionENGNames: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    optionValues: {
      type: Array,
      required: true
    }
  },
  setup(props, context) {
    const showOptions = ref(false);
    const searchText = ref("");
    const selectedOption: Ref<{
      THName: string;
      ENGName: string;
      value: unknown;
    }> = ref({
      THName: "",
      ENGName: "",
      value: null
    });
    const options: { THName: string; ENGName: string; value: unknown }[] = [];
    props.optionTHNames.forEach((name, i) => {
      const option = {
        THName: name,
        ENGName: props.optionENGNames[i],
        value: props.optionValues[i]
      };
      options.push(option);
    });

    function toggleShowOptions() {
      showOptions.value = !showOptions.value;
    }

    function closeOptions() {
      showOptions.value = false;
    }

    function changeOption(option: {
      THName: string;
      ENGName: string;
      value: unknown;
    }) {
      selectedOption.value = option;
      context.emit(UPDATE_MODEL_VALUE, selectedOption.value.value);
      toggleShowOptions();
    }

    const displayedOption = computed(() => {
      if (!selectedOption.value.value) return "Select Option";
      return `${selectedOption.value.THName} (${selectedOption.value.ENGName})`;
    });

    const filteredOptions = computed(() => {
      if (searchText.value === "") return options;
      const expression = new RegExp(searchText.value, "i");
      const isEng = searchText.value.charAt(0).match(/[a-zA-Z]/);
      let passedConditionOptions;
      if (isEng)
        passedConditionOptions = options.filter(option =>
          expression.test(option.ENGName)
        );
      else
        passedConditionOptions = options.filter(option =>
          expression.test(option.THName)
        );
      return passedConditionOptions;
    });

    return {
      searchText,
      showOptions,
      toggleShowOptions,
      changeOption,
      displayedOption,
      filteredOptions,
      closeOptions
    };
  }
});
</script>

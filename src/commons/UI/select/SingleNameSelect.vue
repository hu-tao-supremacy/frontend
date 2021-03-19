<template>
  <base-select
    v-model:searchText="searchText"
    :selectedOption="displayedOption"
    :showOptions="showOptions"
    @toggle-show-select-option="toggleShowOptions"
    :isSearchable="isSearchable"
    v-click-outside="closeOptions"
  >
    <p
      v-for="option in filteredOptions"
      :key="option.value"
      @click="changeOption(option)"
    >
      {{ option.name }}
    </p>
  </base-select>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref } from "vue";
import BaseSelect from "./BaseSelect.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  name: "SingleNameSelect",
  components: {
    BaseSelect
  },
  props: {
    isSearchable: {
      type: Boolean,
      default: false
    },
    optionNames: {
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
    const selectedOption: Ref<{ name: string; value: unknown }> = ref({
      name: "",
      value: null
    });
    const options: { name: string; value: unknown }[] = [];
    props.optionNames.forEach((name, i) => {
      const option = { name: name, value: props.optionValues[i] };
      options.push(option);
    });

    function toggleShowOptions() {
      showOptions.value = !showOptions.value;
    }

    function closeOptions() {
      showOptions.value = false;
    }

    function changeOption(option: { name: string; value: unknown }) {
      selectedOption.value = option;
      context.emit(UPDATE_MODEL_VALUE, selectedOption.value.value);
      toggleShowOptions();
    }

    const displayedOption = computed(() => {
      if (!selectedOption.value.value) return "Select Option";
      return selectedOption.value.name;
    });

    const filteredOptions = computed(() => {
      const expression = new RegExp(searchText.value, "i");
      const passedCondition = options.filter(option =>
        expression.test(option.name)
      );
      return passedCondition;
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

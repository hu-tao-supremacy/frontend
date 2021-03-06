<template>
  <base-select
    v-model:searchTextModel="searchText"
    :displayedOption="displayedOption"
    :isSearchable="isSearchable"
    :isError="isError"
    :placeholder="placeholder"
    :hasSearchIcon="hasSearchIcon"
    :doesResetAfterSelect="doesResetAfterSelect"
    :hasDropDownIcon="hasDropDownIcon"
  >
    <p
      v-for="(option, index) in filteredOptions"
      :key="option.value"
      @click="changeOption(option)"
      class="p-1 border-gray-2 cursor-pointer select-none"
      :class="{ 'border-b': !isLastOption(index) }"
    >
      {{ option.name }}
    </p>
  </base-select>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import BaseSelect from "./BaseSelect.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import useSingleNameSelect from "./useSingleNameSelect";

export default defineComponent({
  name: "SingleNameSelect",
  components: {
    BaseSelect
  },
  props: {
    modelValue: {
      default: null
    },
    initialDisplayedName: {
      type: String,
      default: ""
    },
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
    },
    isError: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Select Option"
    },
    hasSearchIcon: {
      type: Boolean,
      default: false
    },
    doesResetAfterSelect: {
      type: Boolean,
      default: false
    },
    hasDropDownIcon: {
      type: Boolean,
      default: true
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const {
      optionNames,
      optionValues,
      modelValue,
      initialDisplayedName
    } = toRefs(props);

    const {
      searchText,
      changeOption,
      isLastOption,
      displayedOption,
      filteredOptions
    } = useSingleNameSelect(
      modelValue,
      initialDisplayedName,
      optionNames,
      optionValues,
      props.doesResetAfterSelect,
      context
    );

    return {
      searchText,
      changeOption,
      isLastOption,
      displayedOption,
      filteredOptions
    };
  }
});
</script>

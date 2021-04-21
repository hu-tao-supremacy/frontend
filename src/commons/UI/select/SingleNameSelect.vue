<template>
  <base-select
    v-model:searchTextModel="searchText"
    :displayedOption="displayedOption"
    :isSearchable="isSearchable"
    :isError="isError"
    :placeholder="placeholder"
  >
    <p
      v-for="(option, index) in filteredOptions"
      :key="option.value"
      @click="changeOption(option)"
      class="p-1 border-gray-2 cursor-pointer"
      :class="{ 'border-b': !isLastOption(index) }"
    >
      {{ option.name }}
    </p>
  </base-select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseSelect from "./BaseSelect.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import useSingleNameSelect from "./useSingleNameSelect";

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
    },
    isError: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Select Option"
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const {
      searchText,
      changeOption,
      isLastOption,
      displayedOption,
      filteredOptions
    } = useSingleNameSelect(props.optionNames, props.optionValues, context);

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

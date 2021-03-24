<template>
  <base-select
    v-model:searchTextModel="searchText"
    :displayedOption="displayedOption"
    :isSearchable="isSearchable"
  >
    <p
      v-for="(option, index) in filteredOptions"
      :key="option.value"
      @click="changeOption(option)"
      class="p-1 border-gray-2"
      :class="{ 'border-b': index !== filteredOptions.length - 1 }"
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
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const {
      searchText,
      changeOption,
      displayedOption,
      filteredOptions
    } = useSingleNameSelect(props, context);

    return {
      searchText,
      changeOption,
      displayedOption,
      filteredOptions
    };
  }
});
</script>

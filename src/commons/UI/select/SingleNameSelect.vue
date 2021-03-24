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
import { computed, defineComponent, PropType, Ref, ref } from "vue";
import BaseSelect from "./BaseSelect.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import Fuse from "fuse.js";

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

    function changeOption(option: { name: string; value: unknown }) {
      selectedOption.value = option;
      context.emit(UPDATE_MODEL_VALUE, selectedOption.value.value);
    }

    const displayedOption = computed(() => {
      if (!selectedOption.value.value) return "";
      return selectedOption.value.name;
    });

    const filteredOptions = computed(() => {
      if (searchText.value === "") return options;
      const config = { keys: ["name"] };
      const fuse = new Fuse(options, config);
      const filteredOptions = fuse.search(searchText.value);
      return filteredOptions;
    });

    return {
      searchText,
      changeOption,
      displayedOption,
      filteredOptions
    };
  }
});
</script>

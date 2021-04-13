<template>
  <div v-click-outside="hideOption" class="relative">
    <input
      v-if="isSearchable"
      class="displayed-area border rounded-lg px-1.5 focus:border-primary focus:outline-none w-full truncate h-full"
      :class="{
        'border-gray-4': !isError,
        'error-shadow border-red-5': isError
      }"
      v-model="userInput"
      @focus="showOption"
      @input="userChangeSearch"
      placeholder="Select Option"
      type="text"
    />
    <input
      v-else
      class="displayed-area border rounded-lg px-1.5 focus:border-primary focus:outline-none bg-white w-full h-full"
      :class="{
        'border-gray-4': !isError,
        'error-shadow border-red-5': isError
      }"
      :value="buttonDisplay"
      @click="showOption"
      type="button"
    />
    <section
      v-show="isOptionShown"
      class="absolute left-0 top-full flex flex-col break-words bg-white z-10 w-27 mt-0.5 rounded-lg text-sm shadow-sm max-h-20 overflow-y-auto"
    >
      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useBaseSelect from "./useBaseSelect";

export default defineComponent({
  name: "BaseSelect",
  props: {
    searchTextModel: {
      type: String,
      default: ""
    },
    displayedOption: {
      type: String,
      default: ""
    },
    isSearchable: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:searchTextModel"],
  setup(props, context) {
    const {
      isOptionShown,
      userInput,
      buttonDisplay,
      showOption,
      hideOption,
      userChangeSearch
    } = useBaseSelect(props, context);

    return {
      isOptionShown,
      userInput,
      buttonDisplay,
      showOption,
      hideOption,
      userChangeSearch
    };
  }
});
</script>

<style scoped>
displayed-area:focus {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}

.error-shadow {
  box-shadow: 0px 0px 0px 2px rgba(255, 163, 158, 0.5);
}
</style>

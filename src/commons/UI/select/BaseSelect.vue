<template>
  <div class="relative w-16">
    <input
      v-if="isSearchable"
      class="displayed-area border border-gray-4 rounded-lg px-1.5 focus:border-primary focus:outline-none"
      v-model="userInput"
      @focus="showOption"
      v-click-outside="hideOption"
      @input="userChangeSearch"
      placeholder="Select Option"
      type="text"
    />
    <input
      v-else
      class="displayed-area border border-gray-4 rounded-lg px-1.5 focus:border-primary focus:outline-none bg-white"
      :value="buttonDisplay"
      @click="showOption"
      v-click-outside="hideOption"
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
import { UPDATE_SEARCH_TEXT_MODEL } from "@/commons/constant/index";
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
    }
  },
  emits: [UPDATE_SEARCH_TEXT_MODEL],
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
</style>

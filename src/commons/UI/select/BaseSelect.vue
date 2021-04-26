<template>
  <div v-click-outside="hideOption" class="relative">
    <section v-if="isSearchable" class="flex w-full h-full">
      <input
        class="displayed-area  w-full h-full px-1.5 focus:border-primary focus:outline-none"
        :class="{
          'border rounded-lg': !hasSearchIcon,
          'rounded-l-lg border-t border-b border-l focus:border-r': hasSearchIcon,
          'border-gray-4': !isError,
          'error-shadow border-red-5': isError
        }"
        v-model="userInput"
        @focus="showOption"
        @input="userChangeSearch"
        :placeholder="placeholder"
        type="text"
      />
      <base-button
        v-if="hasSearchIcon"
        class="rounded-l-none h-full w-6 flex justify-center items-center"
        ><base-icon width="12.5px" height="12.5px" class="text-white"
          ><SearchIcon /></base-icon
      ></base-button>
    </section>
    <section
      v-else
      @click="toggleShowOption"
      class="flex rounded-lg overflow-hidden border focus:outline-none w-full h-full"
      :class="{
        'select-shadow border-primary': isOptionShown,
        'border-gray-4': !isError && !isOptionShown,
        'error-shadow border-red-5': isError && !isOptionShown
      }"
    >
      <div
        class="flex items-center px-1.5 w-full h-full bg-white border-r border-gray-4"
      >
        {{ buttonDisplay }}
      </div>
      <div
        class="flex items-center justify-center w-5 h-full flex-shrink-0 bg-gray-3"
      >
        <base-icon :width="24" :height="24"><ChevronDownIcon /></base-icon>
      </div>
    </section>
    <section
      v-show="isOptionShown"
      v-on="{ click: doesResetAfterSelect ? hideOption : null }"
      class="absolute left-0 top-full flex flex-col break-words bg-white z-10 w-full mt-0.5 rounded-lg text-sm shadow-sm max-h-20 overflow-y-auto"
    >
      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import useBaseSelect from "./useBaseSelect";
import ChevronDownIcon from "@/assets/ChevronDown.vue";
import SearchIcon from "@/assets/Search.vue";

export default defineComponent({
  name: "BaseSelect",
  components: {
    BaseButton,
    ChevronDownIcon,
    SearchIcon
  },
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
      type: Boolean
    },
    isError: {
      type: Boolean
    },
    placeholder: {
      type: String,
      required: true
    },
    hasSearchIcon: {
      type: Boolean
    },
    doesResetAfterSelect: {
      type: Boolean
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
      toggleShowOption,
      userChangeSearch
    } = useBaseSelect(props, context);

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
});
</script>

<style scoped>
.displayed-area:focus {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}

.select-shadow {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}

.error-shadow {
  box-shadow: 0px 0px 0px 2px rgba(255, 163, 158, 0.5);
}
</style>

<template>
  <div v-click-outside="hideOption" class="relative">
    <input
      v-if="isSearchable"
      class="displayed-area border rounded-lg px-1.5 focus:border-primary focus:outline-none w-full h-full"
      :class="{
        'border-gray-4': !isError,
        'error-shadow border-red-5': isError
      }"
      v-model="userInput"
      @focus="showOption"
      @input="userChangeSearch"
      :placeholder="placeholder"
      type="text"
    />
    <section
      v-else
      @click="toggleShowOption"
      class="flex rounded-lg overflow-hidden border focus:outline-none w-full h-full cursor-pointer"
      :class="{
        'select-shadow border-primary': isOptionShown,
        'border-gray-4': !isError && !isOptionShown,
        'error-shadow border-red-5': isError && !isOptionShown
      }"
    >
      <div
        class="flex items-center px-1.5 w-full h-full bg-white border-r border-gray-4"
        :class="{ 'justify-center text-gray-4': hasNotSelected }"
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
      class="absolute left-0 top-full flex flex-col break-words bg-white z-10 w-full mt-0.5 rounded-lg text-sm shadow-sm max-h-20 overflow-y-auto"
    >
      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useBaseSelect from "./useBaseSelect";
import ChevronDownIcon from "@/assets/ChevronDown.vue";

export default defineComponent({
  name: "BaseSelect",
  components: {
    ChevronDownIcon
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
      type: Boolean,
      default: false
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
  emits: ["update:searchTextModel"],
  setup(props, context) {
    const {
      isOptionShown,
      userInput,
      buttonDisplay,
      hasNotSelected,
      showOption,
      hideOption,
      toggleShowOption,
      userChangeSearch
    } = useBaseSelect(props, context);

    return {
      isOptionShown,
      userInput,
      buttonDisplay,
      hasNotSelected,
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

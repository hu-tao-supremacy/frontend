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
import { defineComponent, ref, watch } from "vue";

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
  emits: ["update:searchTextModel"],
  setup(props, context) {
    const isOptionShown = ref(false);
    const userInput = ref("");
    const buttonDisplay = ref("Select Option");

    function showOption() {
      isOptionShown.value = true;
    }

    function hideOption() {
      isOptionShown.value = false;
      if (props.displayedOption !== "") userInput.value = props.displayedOption;
    }

    function userChangeSearch(event: Event) {
      const target = event.target as HTMLInputElement;
      context.emit("update:searchTextModel", target.value);
    }

    watch(
      () => props.displayedOption,
      () => {
        isOptionShown.value = false;
        userInput.value = props.displayedOption;
        buttonDisplay.value = props.displayedOption;
      }
    );

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

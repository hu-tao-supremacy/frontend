<template>
  <div class="relative w-16">
    <button class="bg-white w-full" @click="toggleShowOptions">
      {{ selectedOption }}
    </button>
    <section
      v-show="showOptions"
      class="absolute left-0 top-2 flex flex-col bg-white z-10 w-full"
    >
      <input v-if="isSearchable" @input="userChangeSearch" type="text" />
      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TOGGLE_SHOW_SELECT_OPTION } from "@/commons/constant";

export default defineComponent({
  name: "BaseSelect",
  props: {
    searchText: {
      type: String,
      default: ""
    },
    selectedOption: {
      type: String,
      default: ""
    },
    showOptions: {
      type: Boolean,
      default: false
    },
    isSearchable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:searchText", TOGGLE_SHOW_SELECT_OPTION],
  setup(_, context) {
    function toggleShowOptions() {
      context.emit(TOGGLE_SHOW_SELECT_OPTION);
    }

    function userChangeSearch(event: Event) {
      const target = event.target as HTMLInputElement;
      context.emit("update:searchText", target.value);
    }

    return {
      toggleShowOptions,
      userChangeSearch
    };
  }
});
</script>

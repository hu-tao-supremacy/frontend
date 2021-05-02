<template>
  <div class="flex items-center">
    <input
      v-model.trim="searchInput"
      type="text"
      :placeholder="placeholder"
      class="search-input h-full rounded-r-none rounded-l-lg px-1.5 border-t border-b border-l focus:border-r border-gray-4 focus:border-primary focus:outline-none"
      :class="inputClass"
    />
    <base-button
      class="rounded-l-none h-full flex justify-center items-center"
      :class="searchButtonClass"
      @click="search"
      ><base-icon width="12.5px" height="12.5px" class="text-white"
        ><SearchIcon /></base-icon
    ></base-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import SearchIcon from "@/assets/Search.vue";
import { SEARCH, UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  name: "BaseSearch",
  components: {
    BaseButton,
    SearchIcon
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    inputClass: {
      type: String,
      default: "w-28"
    },
    searchButtonClass: {
      type: String,
      default: "w-6"
    },
    placeholder: {
      type: String
    }
  },
  emits: [SEARCH, UPDATE_MODEL_VALUE],
  setup(props, context) {
    const searchInput = ref(props.modelValue);

    function search() {
      context.emit(SEARCH, searchInput.value);
    }

    watch(searchInput, () =>
      context.emit(UPDATE_MODEL_VALUE, searchInput.value)
    );

    return { searchInput, search };
  }
});
</script>

<style scoped>
.search-input:focus {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}
</style>

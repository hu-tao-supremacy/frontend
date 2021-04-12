<template>
  <div class="flex items-center">
    <input
      v-model="searchInput"
      type="text"
      :placeholder="placeholder"
      class="search-input h-full rounded-r-none rounded-l-lg px-1.5 border-t border-b border-l focus:border-r border-gray-3 focus:border-primary focus:outline-none"
      :class="inputClass"
    />
    <base-button
      class="rounded-l-none h-full w-6 flex justify-center items-center"
      @click="search"
      ><base-icon width="12.5px" height="12.5px" class="text-white"
        ><SearchIcon /></base-icon
    ></base-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import SearchIcon from "@/assets/Search.vue";
import { SEARCH } from "@/commons/constant";

export default defineComponent({
  name: "BaseSearch",
  components: {
    BaseButton,
    SearchIcon
  },
  props: {
    inputClass: {
      type: String,
      default: "w-28"
    },
    placeholder: {
      type: String
    }
  },
  emits: [SEARCH],
  setup(_, context) {
    const searchInput = ref("");

    function search() {
      context.emit(SEARCH, searchInput.value);
    }

    return { searchInput, search };
  }
});
</script>

<style scoped>
.search-input:focus {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}
</style>

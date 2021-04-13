<template>
  <div
    class="py-4 px-1 flex flex-col items-center max-h-full bg-blue-11 text-white sticky left-0 top-0 bottom-0 z-40"
    :class="{ 'w-8': !isExpand, 'w-30': isExpand }"
  >
    <span
      v-if="!isExpand"
      @click="expandNavbar"
      class="flex items-center justify-center cursor-pointer w-full h-5 -mt-1"
      ><base-icon :width="24" :height="24" class="text-white"
        ><MenuIcon /></base-icon
    ></span>
    <span
      v-else
      @click="collapseNavbar"
      class="absolute right-0 top-1 flex justify-center items-center w-5 h-5 cursor-pointer"
      ><base-icon :width="24" :height="24" class="text-white"
        ><XIcon /></base-icon
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MenuIcon from "@/assets/Menu.vue";
import XIcon from "@/assets/X.vue";

export default defineComponent({
  name: "OrgNavbarTeam",
  components: {
    MenuIcon,
    XIcon
  },
  setup() {
    const isExpand = ref(false);

    function expandNavbar() {
      isExpand.value = true;
    }

    function collapseNavbar() {
      isExpand.value = false;
    }

    return { isExpand, expandNavbar, collapseNavbar };
  }
});
</script>

<template>
  <footer class="grid grid-cols-4 h-20 bg-blue-11">
    <div></div>
    <div
      class="col-span-2 flex flex-col items-center text-center py-3 justify-center"
    >
      <base-icon
        width="160"
        height="40"
        viewBox="0 0 161 40"
        class="mb-1 text-transparent"
        ><OnePassLogo
      /></base-icon>
      <div class="w-0.5 h-2 bg-white mb-1 rounded-sm"></div>
      <p class="font-heading text-xl text-primary">
        HU TAO SUPREMACY
      </p>
    </div>
    <div
      class="flex flex-col items-end justify-between text-right text-white pr-3 py-1"
    >
      <base-transparent-button class="flex items-center group">
        Back to the top
        <span class="text-primary ml-1 group-hover:text-primary-5"
          ><base-icon width="16px" height="16px"><ChevronsUpIcon /></base-icon
        ></span>
      </base-transparent-button>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChevronsUpIcon from "@/assets/ChevronsUp.vue";
import OnePassLogo from "@/assets/OnePassLogoWhite.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";

export default defineComponent({
  name: "PageFooter",
  components: {
    ChevronsUpIcon,
    BaseTransparentButton,
    OnePassLogo
  }
});
</script>

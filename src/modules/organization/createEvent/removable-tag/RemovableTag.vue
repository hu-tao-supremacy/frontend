<template>
  <base-tag class="flex items-center cursor-pointer">
    <p class="mr-0.5">{{ tagName }}</p>
    <base-transparent-button
      ><base-icon :width="10" :height="10"><XIcon /></base-icon
    ></base-transparent-button>
  </base-tag>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import XIcon from "@/assets/X.vue";

export default defineComponent({
  name: "RemovableTag",
  components: {
    BaseTag,
    BaseTransparentButton,
    XIcon
  },
  props: {
    tagName: {
      type: String,
      required: true
    }
  }
});
</script>

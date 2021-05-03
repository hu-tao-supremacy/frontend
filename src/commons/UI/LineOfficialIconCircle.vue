<template>
  <base-circle-button class="line-icon"
    ><base-icon
      width="32"
      height="32"
      viewBox="0 0 455.731 455.731"
      iconColor="none"
      ><LineOfficialIcon /></base-icon
  ></base-circle-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LineOfficialIcon from "@/assets/LineOfficial.vue";
import BaseCircleButton from "@/commons/UI/BaseCircleButton.vue";

export default defineComponent({
  name: "LineOfficialIconCircle",
  components: {
    BaseCircleButton,
    LineOfficialIcon
  }
});
</script>

<style scoped>
.line-icon {
  background-color: #00c200;
}
</style>

<template>
  <base-circle-button class="mr-1 facebook-icon"
    ><base-icon
      width="32"
      height="32"
      viewBox="0 0 112.196 112.196"
      iconColor="none"
      ><FacebookIcon /></base-icon
  ></base-circle-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FacebookIcon from "@/assets/Facebook.vue";
import BaseCircleButton from "@/commons/UI/BaseCircleButton.vue";

export default defineComponent({
  name: "FacebookIconCircle",
  components: {
    BaseCircleButton,
    FacebookIcon
  }
});
</script>

<style scoped>
.facebook-icon {
  background-color: #3b5998;
}
</style>

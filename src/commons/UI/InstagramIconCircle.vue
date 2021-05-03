<template>
  <base-circle-button class="instagram-icon"
    ><base-icon
      width="32"
      height="32"
      viewBox="0 0 512 512.0003"
      iconColor="none"
      ><InstagramIcon /></base-icon
  ></base-circle-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InstagramIcon from "@/assets/Instagram.vue";
import BaseCircleButton from "@/commons/UI/BaseCircleButton.vue";

export default defineComponent({
  name: "InstagramIconCircle",
  components: {
    BaseCircleButton,
    InstagramIcon
  }
});
</script>

<style scoped>
.instagram-icon {
  background-color: #ff346b;
}
</style>

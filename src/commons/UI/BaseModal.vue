<template>
  <div
    class="w-screen h-screen bg-gray-4 fixed inset-0 z-50 bg-opacity-50 flex justify-center items-start pt-18"
  >
    <section class="bg-white relative px-8 pt-8 pb-4 rounded-2xl">
      <base-transparent-button class="cross-btn absolute" @click="closeModal"
        ><base-icon width="24px" height="24px"><XIcon /></base-icon
      ></base-transparent-button>
      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseTransparentButton from "./BaseTransparentButton.vue";
import XIcon from "@/assets/X.vue";

export default defineComponent({
  name: "BaseModal",
  components: {
    BaseTransparentButton,
    XIcon
  },
  setup(_, context) {
    function closeModal() {
      context.emit("close-modal");
    }

    return { closeModal };
  }
});
</script>

<style scoped>
.cross-btn {
  top: 22px;
  right: 22px;
}
</style>

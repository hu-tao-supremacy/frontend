<template>
  <div
    class="w-screen h-screen bg-gray-4 fixed inset-0 z-50 bg-opacity-50 flex justify-center items-center"
  >
    <section
      class="bg-white relative px-8 pt-8 pb-4 rounded-2xl inline-block w-full"
      :class="{ 'default-modal-width': !hasMaxModalWidth }"
      :style="{ maxWidth: maxModalWidth }"
    >
      <base-transparent-button
        v-if="isClosable"
        class="cross-btn absolute"
        @click="closeModal"
        ><base-icon width="24px" height="24px"><XIcon /></base-icon
      ></base-transparent-button>
      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import BaseTransparentButton from "./BaseTransparentButton.vue";
import XIcon from "@/assets/X.vue";

export default defineComponent({
  name: "BaseModal",
  components: {
    BaseTransparentButton,
    XIcon
  },
  props: {
    maxModalWidth: {
      type: String
    },
    isClosable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(props, context) {
    function closeModal() {
      context.emit("close");
    }

    const hasMaxModalWidth = computed(() => {
      return !!props.maxModalWidth;
    });

    return { closeModal, hasMaxModalWidth };
  }
});
</script>

<style scoped>
.cross-btn {
  top: 22px;
  right: 22px;
}
</style>

<template>
  <base-button @click="toggleModal('signup')">Show Sign Up Modal</base-button>
  <ModalSignUp v-if="showSignUpModal" @close-modal="toggleModal('signup')" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import ModalSignUp from "./modal-sign-up/ModalSignUp.vue";

export default defineComponent({
  name: "TestPage",
  components: {
    ModalSignUp,
    BaseButton
  },
  setup() {
    const showSignUpModal = ref(false);

    function toggleModal(modal: string) {
      switch (modal) {
        case "signup":
          showSignUpModal.value = !showSignUpModal.value;
          break;
      }
    }

    return {
      showSignUpModal,
      toggleModal
    };
  }
});
</script>

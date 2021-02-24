<template>
  <div class="bg-gray-1 p-2">
    <base-button @click="toggleModal('signup')">Show Sign Up Modal</base-button>
    <ModalSignUp v-if="showSignUpModal" @close-modal="toggleModal('signup')" />
    <base-button @click="toggleModal('login')">Show Log In Modal</base-button>
    <ModalLogIn v-if="showLogInModal" @close-modal="toggleModal('login')" />
    <InfoBanner class="max-w-120" />
    <EventDetail class="mt-2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import ModalSignUp from "./modal-sign-up/ModalSignUp.vue";
import ModalLogIn from "./modal-log-in/ModalLogIn.vue";
import InfoBanner from "@/modules/eventInfo/info-banner/InfoBanner.vue";
import EventDetail from "@/modules/eventInfo/event-detail/EventDetail.vue";

export default defineComponent({
  name: "TestPage",
  components: {
    ModalSignUp,
    BaseButton,
    ModalLogIn,
    InfoBanner,
    EventDetail
  },
  setup() {
    const showSignUpModal = ref(false);
    const showLogInModal = ref(false);

    function toggleModal(modal: string) {
      switch (modal) {
        case "signup":
          showSignUpModal.value = !showSignUpModal.value;
          break;
        case "login":
          showLogInModal.value = !showLogInModal.value;
          break;
      }
    }

    return {
      showSignUpModal,
      toggleModal,
      showLogInModal
    };
  }
});
</script>

<template>
  <div class="bg-gray-1 p-2">
    <base-button @click="toggleModal('signup')">Show Sign Up Modal</base-button>
    <ModalSignUp v-if="showSignUpModal" @close-modal="toggleModal('signup')" />
    <base-button @click="toggleModal('login')">Show Log In Modal</base-button>
    <ModalLogIn v-if="showLogInModal" @close-modal="toggleModal('login')" />
    <base-button @click="toggleModal('additionInfo')"
      >Show Additional Modal</base-button
    >
    <ModalAdditionalInfo
      v-if="showAdditionalInfoModal"
      @close-modal="toggleModal('additionInfo')"
    />
    <base-button @click="toggleModal('interest')"
      >Show Interests Modal</base-button
    >
    <ModalInterests
      v-if="showInterestModal"
      :interests="test.interests"
      @close-modal="toggleModal('interest')"
    />
    <InfoBanner
      :style="{ maxWidth: '960px' }"
      :eventBanner="test.eventBanner"
    />
    <EventDetail
      class="mt-2"
      :style="{ maxWidth: '628px' }"
      :eventDetail="test.eventDetail"
    />
    <EventOrganizer
      class="mt-2"
      :style="{ maxWidth: '300px' }"
      :eventOrg="test.eventOrganizer"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import ModalSignUp from "./modal-sign-up/ModalSignUp.vue";
import ModalLogIn from "./modal-log-in/ModalLogIn.vue";
import InfoBanner from "@/modules/eventInfo/info-banner/InfoBanner.vue";
import EventDetail from "@/modules/eventInfo/event-detail/EventDetail.vue";
import EventOrganizer from "@/modules/eventInfo/event-organizer/EventOrganizer.vue";
import ModalAdditionalInfo from "./modal-additional-info/ModalAdditionalInfo.vue";
import ModalInterests from "./modal-interests/ModalInterests.vue";
import testData from "./testData";

export default defineComponent({
  name: "TestPage",
  components: {
    ModalSignUp,
    BaseButton,
    ModalLogIn,
    InfoBanner,
    EventDetail,
    EventOrganizer,
    ModalAdditionalInfo,
    ModalInterests
  },
  setup() {
    const showSignUpModal = ref(false);
    const showLogInModal = ref(false);
    const showAdditionalInfoModal = ref(false);
    const showInterestModal = ref(false);
    const test = testData;

    function toggleModal(modal: string) {
      switch (modal) {
        case "signup":
          showSignUpModal.value = !showSignUpModal.value;
          break;
        case "login":
          showLogInModal.value = !showLogInModal.value;
          break;
        case "additionInfo":
          showAdditionalInfoModal.value = !showAdditionalInfoModal.value;
          break;
        case "interest":
          showInterestModal.value = !showInterestModal.value;
          break;
      }
    }

    return {
      showSignUpModal,
      toggleModal,
      showLogInModal,
      showAdditionalInfoModal,
      showInterestModal,
      test
    };
  }
});
</script>

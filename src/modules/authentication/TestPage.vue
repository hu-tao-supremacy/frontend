<template>
  <div class="bg-gray-1 p-2">
    <Wallet
      class="content-max-width"
      :profile="test.profile"
      :ongoingTickets="wallet.ongoingTickets"
      :historyTickets="wallet.historyTickets"
    />
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
    <Ticket
      class="mb-3"
      :event="test.event"
      :organization="test.organization"
      :ticketID="test.ticketID"
      :bgColor="'bg-gray-1'"
    />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import InfoBanner from "@/modules/eventInfo/info-banner/InfoBanner.vue";
import EventDetail from "@/modules/eventInfo/event-detail/EventDetail.vue";
import EventOrganizer from "@/modules/eventInfo/event-organizer/EventOrganizer.vue";
import Ticket from "@/modules/wallet/ticket/Ticket.vue";
import Wallet from "@/modules/wallet/wallet/Wallet.vue";
import { testData, walletData } from "./testData";
import { useAuth } from "./useAuth";

const ModalLogIn = defineAsyncComponent(() =>
  import("./modal-log-in/ModalLogIn.vue")
);

const ModalInterests = defineAsyncComponent(() =>
  import("./modal-interests/ModalInterests.vue")
);

const ModalSignUp = defineAsyncComponent(() =>
  import("./modal-sign-up/ModalSignUp.vue")
);

const ModalAdditionalInfo = defineAsyncComponent(() =>
  import("./modal-additional-info/ModalAdditionalInfo.vue")
);

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
    Ticket,
    Wallet,
    ModalInterests
  },
  setup() {
    const showSignUpModal = ref(false);
    const showLogInModal = ref(false);
    const showAdditionalInfoModal = ref(false);
    const showInterestModal = ref(false);
    const test = testData;
    const wallet = walletData;

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
    useAuth();

    return {
      showSignUpModal,
      toggleModal,
      showLogInModal,
      showAdditionalInfoModal,
      test,
      wallet,
      showInterestModal
    };
  }
});
</script>

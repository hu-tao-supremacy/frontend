<template>
  <div class="p-2">
    <ModalAdditionalInfo
      v-if="showAdditionalInfoModal"
      @close-modal="cancelSignup"
      @submit-modal="updateInfo"
    />
    <ModalInterests
      v-if="showInterestModal"
      :interests="test.interests"
      @close-modal="cancelSignup"
      @submit-modal="toInterestedEventsModal"
    />
    <ModalInterestedEvents
      v-if="showInterestedEventsModal"
      :interests="test.interestedEvents"
      @close-modal="cancelSignup"
      @submit-modal="finishModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalInterests from "./modal-interests/ModalInterests.vue";
import ModalAdditionalInfo from "./modal-additional-info/ModalAdditionalInfo.vue";
import ModalInterestedEvents from "./modal-interested-events/ModalInterestedEvents.vue";
import useSignup from "./useSignup";

export default defineComponent({
  name: "Signup",
  components: {
    ModalAdditionalInfo,
    ModalInterests,
    ModalInterestedEvents
  },
  setup() {
    const {
      toggleModal,
      showAdditionalInfoModal,
      showInterestedEventsModal,
      toInterestedEventsModal,
      test,
      showInterestModal,
      finishModal,
      cancelSignup,
      updateInfo
    } = useSignup();
    return {
      toggleModal,
      showAdditionalInfoModal,
      showInterestedEventsModal,
      toInterestedEventsModal,
      test,
      showInterestModal,
      finishModal,
      cancelSignup,
      updateInfo
    };
  }
});
</script>

<template>
  <div class="p-2">
    <ModalAdditionalInfo
      v-if="showAdditionalInfoModal"
      @close-modal="cancelSignup"
      @submit-modal="updateInfo"
    />
    <ModalInterests
      v-if="showInterestModal"
      :interests="tags"
      @close-modal="closeModal"
      @submit-modal="submitInterestedTags"
    />
    <ModalInterestedEvents
      v-if="showInterestedEventsModal"
      :interests="interestedEventsCandidate"
      @close-modal="closeModal"
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
import { tags } from "./data";

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
      submitInterestedTags,
      showInterestModal,
      finishModal,
      cancelSignup,
      updateInfo,
      interestedEventsCandidate,
      closeModal
    } = useSignup();
    return {
      toggleModal,
      showAdditionalInfoModal,
      showInterestedEventsModal,
      submitInterestedTags,
      showInterestModal,
      finishModal,
      cancelSignup,
      updateInfo,
      interestedEventsCandidate,
      closeModal,
      tags
    };
  }
});
</script>

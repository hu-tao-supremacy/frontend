<template>
  <div class="bg-gray-1 p-2">
    <ModalSignUp
      v-if="showSignUpModal"
      @close-modal="toggleModal('additionInfo')"
    />
    <ModalAdditionalInfo
      v-if="showAdditionalInfoModal"
      @close-modal="toggleModal('interest')"
    />
    <ModalInterests v-if="showInterestModal" :interests="test.interests" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { testData } from "@/modules/test/testData";
import ModalInterests from "./modal-interests/ModalInterests.vue";
import ModalAdditionalInfo from "./modal-additional-info/ModalAdditionalInfo.vue";
import ModalSignUp from "./modal-sign-up/ModalSignUp.vue";

export default defineComponent({
  name: "TestPage",
  components: {
    ModalSignUp,
    ModalAdditionalInfo,
    ModalInterests
  },
  setup() {
    const showSignUpModal = ref(false);
    const showAdditionalInfoModal = ref(false);
    const showInterestModal = ref(false);
    const test = testData;

    function toggleModal(modal: string) {
      switch (modal) {
        case "signup":
          showSignUpModal.value = !showSignUpModal.value;
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
      showAdditionalInfoModal,
      test,
      showInterestModal
    };
  }
});
</script>

<template>
  <div class="bg-gray-1 p-2">
    <ModalAdditionalInfo
      v-if="showAdditionalInfoModal"
      @close-modal="cancelSignup"
      @submit-modal="updateInfo"
    />
    <ModalInterests
      v-if="showInterestModal"
      :interests="test.interests"
      @close-modal="finishModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalInterests from "./modal-interests/ModalInterests.vue";
import ModalAdditionalInfo from "./modal-additional-info/ModalAdditionalInfo.vue";
import useSignup from "./useSignup";

export default defineComponent({
  name: "Signup",
  components: {
    ModalAdditionalInfo,
    ModalInterests
  },
  setup() {
    const {
      toggleModal,
      showAdditionalInfoModal,
      test,
      showInterestModal,
      finishModal,
      cancelSignup,
      updateInfo
    } = useSignup();
    return {
      toggleModal,
      showAdditionalInfoModal,
      test,
      showInterestModal,
      finishModal,
      cancelSignup,
      updateInfo
    };
  }
});
</script>

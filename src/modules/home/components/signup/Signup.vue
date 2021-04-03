<template>
  <div class="bg-gray-1 p-2">
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

export default defineComponent({
  name: "Signup",
  components: {
    ModalAdditionalInfo,
    ModalInterests
  },
  setup() {
    const showAdditionalInfoModal = ref(true);
    const showInterestModal = ref(false);
    const test = testData;

    function toggleModal(modal: string) {
      switch (modal) {
        case "additionInfo":
          showAdditionalInfoModal.value = !showAdditionalInfoModal.value;
          break;
        case "interest":
          showInterestModal.value = !showInterestModal.value;
          break;
      }
    }

    return {
      toggleModal,
      showAdditionalInfoModal,
      test,
      showInterestModal
    };
  }
});
</script>

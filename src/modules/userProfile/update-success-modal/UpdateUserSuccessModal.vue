<template>
  <base-modal :isClosable="false" maxModalWidth="680px"
    ><div class="flex flex-col items-center">
      <base-icon :width="85" :height="85" class="text-green-5 mb-4"
        ><CheckCircleIcon
      /></base-icon>
      <h1 class="flex font-heading text-3xl mb-2">
        Your user profile has been updated!
      </h1>
      <p class="text-gray-5 text-center mb-7 leading-relaxed">
        Your updated user profile information has been sent to out database.<br />
        Please check later for verification of change in information.
      </p>
      <base-button @click="closeModal" class="w-16 py-px">Close</base-button>
    </div></base-modal
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseModal from "@/commons/UI/BaseModal.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import CheckCircleIcon from "@/assets/CheckCircle.vue";
import { CLOSE_MODAL } from "@/commons/constant";

export default defineComponent({
  name: "UpdateUserSuccessModal",
  components: {
    BaseModal,
    BaseButton,
    CheckCircleIcon
  },
  emits: [CLOSE_MODAL],
  setup(_, context) {
    function closeModal() {
      context.emit(CLOSE_MODAL);
    }

    return { closeModal };
  }
});
</script>

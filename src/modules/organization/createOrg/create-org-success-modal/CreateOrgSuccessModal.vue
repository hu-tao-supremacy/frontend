<template>
  <base-modal :maxModalWidth="'650px'" :isClosable="false"
    ><div class="flex flex-col items-center">
      <base-icon :width="85" :height="85" class="text-green-5 mb-4"
        ><CheckCircleIcon
      /></base-icon>
      <h1 class="font-heading text-3xl mb-2">
        Your organization has been created!
      </h1>
      <p class="text-gray-5 text-center mb-7 leading-relaxed">
        Your organization has been created.<br />
        To be a verified organization, verification is needed.<br />
        Please contact <span class="text-primary">admin@onepass.com</span> for
        verification.
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
  name: "CreateOrgSuccessModal",
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

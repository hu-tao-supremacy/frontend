<template>
  <base-modal maxModalWidth="680px" :isClosable="false"
    ><div class="flex flex-col items-center">
      <base-icon :width="85" :height="85" class="text-green-5 mb-4"
        ><CheckCircleIcon
      /></base-icon>
      <h1 class="font-heading text-center text-3xl mb-2">
        Your feedback form has been created!
      </h1>
      <p class="text-gray-5 mb-7 text-center leading-relaxed">
        Your feedback form has been created.<br />
        Now participants can feedback submit feedback after joined the event.
      </p>
      <base-button @click="closeModal" class="w-16 py-px">Close</base-button>
    </div></base-modal
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import BaseModal from "@/commons/UI/BaseModal.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import CheckCircleIcon from "@/assets/CheckCircle.vue";
import { CLOSE_MODAL } from "@/commons/constant";
import useOrgEvent from "@/modules/organization/event/use-org-event";

export default defineComponent({
  name: "CreateEventFeebackSuccess",
  components: {
    BaseModal,
    BaseButton,
    CheckCircleIcon
  },
  emits: [CLOSE_MODAL],
  setup(_, context) {
    const router = useRouter();
    const { eventId } = useOrgEvent();
    function closeModal() {
      context.emit(CLOSE_MODAL);
      router.push(`/org/event/${eventId}`);
    }

    return { closeModal };
  }
});
</script>

<template>
  <base-modal :isClosable="false"
    ><div class="flex flex-col items-center">
      <div class="w-48 h-48 relative">
        <div class="w-1 h-4 bg-blue-11 absolute -left-2 -top-2 "></div>
        <div class="w-4 h-1 bg-blue-11 absolute -left-2 -top-2"></div>
        <div class="w-1 h-4 bg-blue-11 absolute -right-2 -top-2 "></div>
        <div class="w-4 h-1 bg-blue-11 absolute -right-2 -top-2"></div>
        <div class="w-1 h-4 bg-blue-11 absolute -left-2 -bottom-2 "></div>
        <div class="w-4 h-1 bg-blue-11 absolute -left-2 -bottom-2"></div>
        <div class="w-1 h-4 bg-blue-11 absolute -right-2 -bottom-2 "></div>
        <div class="w-4 h-1 bg-blue-11 absolute -right-2 -bottom-2"></div>
        <qr-stream @decode="onDecode">
          <div style="color: red;" class="frame"></div>
        </qr-stream>
      </div>
      <div
        class="mt-5 mb-3 text-2xl"
        :class="{ 'text-red-5': !isCheckinSuccess }"
      >
        <span v-show="isCheckinSuccess" class="text-primary">{{
          attendeeName
        }}</span
        >{{ textMessage }}
      </div>
      <base-button @click="closeModal" class="w-16 py-px">Close</base-button>
    </div></base-modal
  >
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseModal from "@/commons/UI/BaseModal.vue";
import { QrStream } from "vue3-qr-reader";
import { CLOSE_MODAL, TICKET } from "@/commons/constant";
export default defineComponent({
  name: "QrReader",
  components: {
    BaseButton,
    BaseModal,
    QrStream
  },
  props: {
    attendeeName: {
      type: String,
      default: ""
    },
    isCheckinSuccess: {
      type: Boolean,
      default: false
    },
    textMessage: {
      type: String,
      default: ""
    }
  },
  emits: [CLOSE_MODAL, TICKET],
  setup(_, context) {
    function closeModal() {
      context.emit(CLOSE_MODAL);
    }
    const code = ref("");

    function onDecode(ticket: string) {
      code.value = ticket;
      context.emit(TICKET, code.value);
    }
    return { closeModal, code, onDecode };
  }
});
</script>

<style scoped></style>

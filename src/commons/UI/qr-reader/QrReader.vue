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
      <div class="mt-5 mb-3 text-2xl">{{ code }}</div>
      <base-button @click="closeModal" class="w-16 py-px">Close</base-button>
    </div></base-modal
  >
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseModal from "@/commons/UI/BaseModal.vue";
import { QrStream } from "vue3-qr-reader";
export default defineComponent({
  name: "QrReader",
  components: {
    BaseButton,
    BaseModal,
    QrStream
  },
  setup() {
    const code = ref("");

    function onDecode(ticket: string) {
      code.value = ticket;
    }
    return {
      code,
      onDecode
    };
  }
});
</script>

<style scoped></style>

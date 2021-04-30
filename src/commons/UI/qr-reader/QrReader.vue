<template>
  <base-modal :isClosable="true"
    ><div class="flex flex-col items-center">
      <qr-stream @decode="onDecode">
        <div style="color: red;" class="frame"></div>
      </qr-stream>
      <div>Result: {{ code }}</div>
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

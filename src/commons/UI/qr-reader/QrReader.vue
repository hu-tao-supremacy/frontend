<template>
  <base-modal :isClosable="false" maxModalWidth="712px"
    ><div class="flex flex-col items-center">
      <qr-stream @decode="onDecode" class="qr">
        <div style="color: red;" class="frame"></div>
      </qr-stream>
      <div class="my-3 text-2xl">{{ code }}</div>
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

<style scoped>
.qr video {
  border-radius: 12px !important;
}
</style>

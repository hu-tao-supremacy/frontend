<template>
  <div class="flex flex-col bg-white rounded-2xl shadow-sm">
    <div class="font-heading text-3xl">Ticket ID: {{}}</div>
    <qrcode-vue :value="value" :size="size" level="H" />
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import QrcodeVue from "qrcode.vue";

export default defineComponent({
  name: "TicketQR",
  components: {
    QrcodeVue,
    BaseButton
  },
  props: {
    ticket: {
      type: Object as () => {},
      required: true
    }
  }
});
</script>

<style></style>

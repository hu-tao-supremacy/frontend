<template>
  <div
    class="flex flex-col bg-white rounded-2xl items-center justify-center shadow-sm relative pt-8 pb-6 px-12"
  >
    <div class="font-heading text-3xl">
      Ticket ID:<span class="text-primary ml-2">{{ ticket.id }}</span>
    </div>
    <qrcode-vue class='mt-4' :value="ticket.id" size="300" renderAs="svg" />
    <div class="flex flex-col self-start mt-11">
      <div class="font-heading text-xl">Owner's Information</div>
      <div class="flex mt-2">
        <div class="h-12 w-12 rounded-full overflow-hidden mr-2 flex-shrink-0">
          <LazyImage
            :width="100"
            :height="100"
            alt="will change to api"
            :url="ticket.profileImg"
            :placeholder="ticket.profileImgHash"
            class="object-cover w-full h-full"
          />
        </div>
        <div
          class="flex flex-col justify-center font-heading text-lg mr-2 "
        >
          <div>Name:</div>
          <div class="mt-0.5">Email:</div>
          <div class="mt-0.5">Phone:</div>
        </div>
        <div class="flex flex-col justify-center text-lg">
          <div>{{ ticket.ownerName }}</div>
          <div class="mt-0.5">{{ ticket.ownerEmail }}</div>
          <div class="mt-0.5">{{ ticket.ownerPhone }}</div>
        </div>
        <base-button class="absolute bottom-6 right-12 w-15 h-4.5"
          >Return to wallet</base-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import QrcodeVue from "qrcode.vue";

export default defineComponent({
  name: "TicketQR",
  components: {
    QrcodeVue,
    LazyImage,
    BaseButton
  },
  props: {
    ticket: {
      type: Object as () => {
        id: string;
        profileImg: string;
        profileImgHash: string;
        ownerName: string;
        ownerEmail: string;
        ownerPhone: string;
      },
      required: true
    }
  }
});
</script>

<style></style>

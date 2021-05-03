<template>
  <div
    class="flex flex-col bg-white rounded-2xl items-center justify-center shadow-sm relative pt-8 pb-6 px-12"
  >
    <div class="font-heading text-3xl">
      Ticket ID:<span class="text-primary ml-2">
        {{ ticketID }}
      </span>
    </div>
    <qrcode-vue
      class="mt-4"
      :value="ticketID || ''"
      :size="300"
      renderAs="svg"
    />
    <div class="flex flex-col self-start mt-11">
      <div class="font-heading text-xl">Owner's Information</div>
      <div class="flex mt-2">
        <div class="h-12 w-12 rounded-full overflow-hidden mr-2 flex-shrink-0">
          <LazyImage
            :width="100"
            :height="100"
            alt="will change to api"
            :url="user && user.profilePictureUrl"
            :placeholder="hash"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="flex flex-col justify-center font-heading text-lg mr-2 ">
          <div>Name:</div>
          <div class="mt-0.5">Email:</div>
          <div class="mt-0.5">Phone:</div>
        </div>
        <div class="flex flex-col justify-center text-lg">
          <div>
            {{ user && user.firstName }}
            {{ user && user.lastName }}
          </div>
          <div class="mt-0.5">{{ user && user.email }}</div>
          <div class="mt-0.5">{{ user && user.phoneNumber }}</div>
        </div>
        <router-link to="/wallet">
          <base-button class="absolute bottom-6 right-12 w-15 h-4.5"
            >Return to wallet</base-button
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import QrcodeVue from "qrcode.vue";
import { User } from "@/apollo/types";

export default defineComponent({
  name: "TicketQR",
  components: {
    QrcodeVue,
    LazyImage,
    BaseButton
  },
  props: {
    user: {
      type: Object as () => User
    },
    ticketID: {
      type: String
    }
  },
  setup() {
    const hash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";
    return {
      hash
    };
  }
});
</script>

<style></style>

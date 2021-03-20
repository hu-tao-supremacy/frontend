<template>
  <div class="flex flex-col rounded-2xl overflow-hidden p-2 bg-white shadow">
    <section class="flex w-full mb-2">
      <div class="h-10 w-10 rounded-full overflow-hidden mr-2 flex-shrink-0">
        <LazyImage
          :width="100"
          :height="100"
          alt="will change to api"
          :url="eventOrg.imgUrl"
          :placeholder="eventOrg.imgHash"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col">
        <h1 class="font-heading text-3xl text-blue-10">
          {{ eventOrg.shortName }}
        </h1>
        <p class="font-body text-sm">{{ eventOrg.fullName }}</p>
        <div class="mt-1">{{ eventOrg.detail }}</div>
      </div>
    </section>
    <section class="flex justify-between items-center">
      <base-button class="px-2 py-0.5">Follow</base-button>
      <div class="flex items-center">
        <base-circle-button class="mr-1"
          ><base-icon
            width="32"
            height="32"
            viewBox="0 0 30 30"
            iconColor="none"
            ><FacebookIcon /></base-icon
        ></base-circle-button>
        <base-circle-button class="p-1 text-black"
          ><base-icon width="16" height="16"><MailIcon /></base-icon
        ></base-circle-button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseCircleButton from "@/commons/UI/BaseCircleButton.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import FacebookIcon from "@/assets/Facebook.vue";
import MailIcon from "@/assets/Mail.vue";

export default defineComponent({
  name: "EventOrganizer",
  components: {
    BaseButton,
    BaseCircleButton,
    LazyImage,
    FacebookIcon,
    MailIcon
  },
  props: {
    eventOrg: {
      type: Object as () => {
        imgUrl: string;
        imgHash: string;
        shortName: string;
        fullName: string;
        detail: string;
      },
      required: true
    }
  }
});
</script>

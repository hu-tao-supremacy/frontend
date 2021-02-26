<template>
  <div class="flex flex-col rounded-2xl overflow-hidden p-2 bg-white">
    <section class="flex w-full mb-2">
      <div class="h-10 w-10 rounded-full overflow-hidden mr-2">
        <img :src="imgUrl" alt="" class="object-cover w-full h-full" />
      </div>
      <div class="flex flex-col" :style="{ maxWidth: '170px' }">
        <h1 class="font-heading text-3xl text-blue-10">{{ orgShortName }}</h1>
        <p class="text-sm">{{ orgFullName }}</p>
      </div>
    </section>
    <section class="mb-2">{{ orgDetail }}</section>
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
import FacebookIcon from "@/assets/Facebook.vue";
import MailIcon from "@/assets/Mail.vue";
import useEventOrganizer from "./useEventOrganizer";

export default defineComponent({
  name: "EventOrganizer",
  components: {
    BaseButton,
    BaseCircleButton,
    FacebookIcon,
    MailIcon
  },
  setup() {
    const {
      imgUrl,
      orgShortName,
      orgFullName,
      orgDetail
    } = useEventOrganizer();

    return {
      imgUrl,
      orgShortName,
      orgFullName,
      orgDetail
    };
  }
});
</script>

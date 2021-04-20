<template>
  <div
    class="flex flex-col // w-120 px-8 py-5 m-1 space-y-3 // text-blue-11 bg-white shadow-sm rounded-lg"
  >
    <div class="flex items-center space-x-3">
      <div class="w-20 h-20 // rounded-full overflow-hidden">
        <LazyImage
          :height="1000"
          :width="1000"
          alt="will change to api"
          :url="organization.img"
          :placeholder="organization.imgHash"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col">
        <h1
          class="flex items-center // space-x-1 // font-bold font-heading text-4xl"
        >
          <div>{{ organization.name }}</div>
          <TickIcon v-if="organization.isVerified" />
        </h1>
        <div>
          <span class=" text-primary">{{
            organization.numOfRelatedEvents ?? "0"
          }}</span>
          related events
        </div>
      </div>
    </div>
    <div class="flex space-x-3">
      <div class="flex flex-col // w-3/5">
        <h3 class="text-2xl font-bold font-heading">Description</h3>
        <p>
          {{ organization.description }}
        </p>
      </div>
      <div class="flex flex-col // w-2/5">
        <h3 class="text-2xl font-bold font-heading">Contact</h3>
        <ul>
          <li>Facebook : {{ organization.social.facebook ?? "-" }}</li>
          <li>Instagram : {{ organization.social.instagram ?? "-" }}</li>
          <li>
            Line :
            {{ organization.social.line ?? "-" }}
          </li>
          <li>Email : {{ organization.social.email ?? "-" }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TickIcon from "@/assets/Tick.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import { OrgBannerProps } from "./types";

export default defineComponent({
  name: "OrgBanner",
  components: {
    TickIcon,
    LazyImage
  },
  props: {
    organization: {
      type: Object as PropType<OrgBannerProps>,
      required: true
    }
  }
});
</script>

<template>
  <div class="flex flex-col rounded-2xl overflow-hidden p-2 bg-white shadow-sm">
    <section class="flex w-full mb-2">
      <div class="h-10 w-10 rounded-full overflow-hidden mr-2 flex-shrink-0">
        <LazyImage
          :width="100"
          :height="100"
          alt="will change to api"
          :url="eventOrg?.profilePictureUrl"
          :placeholder="eventOrg?.profilePictureHash"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col">
        <h1 class="font-heading text-3xl text-blue-10">
          {{ eventOrg?.abbreviation }}
        </h1>
        <p class="text-sm">{{ eventOrg?.name }}</p>
        <div class="mt-1">{{ eventOrg?.description }}</div>
      </div>
    </section>
    <section class="flex justify-between items-center">
      <base-button @click="follow" class="px-2 py-0.5">Follow</base-button>
      <div class="flex items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="mr-1"
          v-if="eventOrg?.facebookPage"
          :href="eventOrg?.facebookPage"
        >
          <FacebookIconCircle />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="mr-1"
          v-if="eventOrg?.email"
          :href="eventOrg?.email"
        >
          <base-circle-button class="p-1 text-black"
            ><base-icon width="16" height="16"><MailIcon /></base-icon
          ></base-circle-button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="mr-1"
          v-if="eventOrg?.lineOfficialAccount"
          :href="eventOrg?.lineOfficialAccount"
        >
          <base-circle-button class="p-1"
            ><base-icon width="16" height="16"><MailIcon /></base-icon
          ></base-circle-button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="mr-1"
          v-if="eventOrg?.instagram"
          :href="eventOrg?.instagram"
        >
          <base-circle-button class="p-1"
            ><base-icon width="16" height="16"><MailIcon /></base-icon
          ></base-circle-button>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseCircleButton from "@/commons/UI/BaseCircleButton.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import FacebookIconCircle from "@/commons/UI/FacebookIconCircle.vue";
import MailIcon from "@/assets/Mail.vue";
import { Organization } from "@/apollo/types";
import useEventOrganizer from "./useEventOrganizer";

export default defineComponent({
  name: "EventOrganizer",
  components: {
    BaseButton,
    BaseCircleButton,
    LazyImage,
    FacebookIconCircle,
    MailIcon
  },
  props: {
    eventOrg: {
      type: Object as () => Organization
    },
    isSignin: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { follow } = useEventOrganizer(props.isSignin);
    return { follow };
  }
});
</script>

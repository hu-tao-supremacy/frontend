<template>
  <div class="flex flex-col rounded-2xl overflow-hidden p-2 bg-white shadow-sm">
    <section class="flex w-full mb-2">
      <div class="h-10 w-10 rounded-full overflow-hidden mr-2 flex-shrink-0">
        <LazyImage
          :width="100"
          :height="100"
          alt="will change to api"
          :url="eventOrg && eventOrg.profilePictureUrl"
          :placeholder="eventOrg && eventOrg.profilePictureHash"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col min-w-0">
        <section class="flex items-center">
          <h1 class="font-heading text-3xl text-blue-10 truncate mr-1">
            {{ eventOrg && eventOrg.abbreviation }}
          </h1>
          <base-icon
            v-if="eventOrg && eventOrg.isVerified"
            :width="20"
            :height="20"
            class="text-blue-10"
            ><CheckCircle
          /></base-icon>
        </section>
        <p class="text-sm">{{ eventOrg && eventOrg.name }}</p>
        <div class="mt-1">{{ eventOrg && eventOrg.description }}</div>
      </div>
    </section>
    <section class="flex items-center self-end space-x-1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        v-if="eventOrg && eventOrg.facebookPage"
        :href="eventOrg && `https://${eventOrg.facebookPage}`"
      >
        <FacebookIconCircle />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        v-if="eventOrg && eventOrg.lineOfficialAccount"
        :href="eventOrg && `https://${eventOrg.lineOfficialAccount}`"
      >
        <LineIconCircle />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        v-if="eventOrg && eventOrg.instagram"
        :href="eventOrg && `https://${eventOrg.instagram}`"
      >
        <InstagramIconCircle />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        v-if="eventOrg && eventOrg.email"
        :href="eventOrg && `mailto:${eventOrg.email}`"
      >
        <base-circle-button class="p-1 text-black"
          ><base-icon width="16" height="16"><MailIcon /></base-icon
        ></base-circle-button>
      </a>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCircleButton from "@/commons/UI/BaseCircleButton.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import FacebookIconCircle from "@/commons/UI/FacebookIconCircle.vue";
import MailIcon from "@/assets/Mail.vue";
import CheckCircle from "@/assets/CheckCircle.vue";
import LineIconCircle from "@/commons/UI/LineOfficialIconCircle.vue";
import InstagramIconCircle from "@/commons/UI/InstagramIconCircle.vue";
import { Organization } from "@/apollo/types";

export default defineComponent({
  name: "EventOrganizer",
  components: {
    BaseCircleButton,
    LazyImage,
    FacebookIconCircle,
    MailIcon,
    CheckCircle,
    LineIconCircle,
    InstagramIconCircle
  },
  props: {
    eventOrg: {
      type: Object as () => Organization
    }
  }
});
</script>

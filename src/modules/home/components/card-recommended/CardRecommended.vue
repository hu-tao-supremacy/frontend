<template>
  <router-link :disabled="!isLinkReady" :to="eventInfoUrl">
    <div
      class="event-container h-30 w-full flex flex-col rounded-lg shadow bg-cover relative overflow-hidden"
    >
      <div
        v-if="day || month"
        class="event-date h-6 w-6 absolute rounded-lg font-heading text-lg text-center bg-primary-1"
      >
        {{ day }}<br />{{ month }}
      </div>
      <div class="event-image h-20">
        <LazyImage
          :width="299"
          :height="160"
          alt="will change to api"
          :url="recommended.posterImageUrl"
          :placeholder="recommended.posterImageHash"
          class="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <div class="event-detail-container h-10 w-full flex rounded-b-lg bg-blue">
        <div class="w-1"></div>
        <div
          class="event-detail w-full flex flex-grow flex-row justify-between items-center bg-white pl-2 py-1 pr-1 rounded-br-lg"
        >
          <div class="event-details-list w-28 flex flex-col">
            <div class="event-duration w-full text-primary">
              {{ time }}
            </div>
            <div
              class="event-name w-full font-heading text-lg leading-6 truncate"
            >
              {{ recommended.name }}
            </div>
            <div
              class="event-faculty w-full text-blue-10 text-sm mt-0.5 truncate"
            >
              {{ locationText }}
            </div>
          </div>
          <base-button
            :disabled="!isLinkReady"
            class="btn flex justify-center items-center "
          >
            <base-icon
              width="24px"
              height="24px"
              iconColor="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><ArrowRightIcon
            /></base-icon>
          </base-button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import ArrowRightIcon from "@/assets/ArrowRight.vue";
import { Event } from "@/apollo/types";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import useEventCard from "../../useEventCard";
export default defineComponent({
  components: {
    LazyImage,
    BaseButton,
    ArrowRightIcon
  },
  props: {
    recommended: {
      type: Object as () => Event,
      required: true
    }
  },
  setup(props) {
    const { recommended } = toRefs(props);
    const {
      day,
      month,
      time,
      locationText,
      eventInfoUrl,
      isLinkReady
    } = useEventCard(recommended);
    return { day, month, time, locationText, eventInfoUrl, isLinkReady };
  }
});
</script>

<style scoped>
.event-container {
  max-width: 299px;
}
.event-date {
  top: 8px;
  bottom: 184px;
  left: 243px;
  right: 8px;
  padding: 0px 10px 0px 10px;
}
.event-image {
  width: 299px;
}
.btn {
  height: 38px;
  width: 38px;
}
</style>

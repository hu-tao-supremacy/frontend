<template>
  <router-link :disabled="!isLinkReady" :to="eventInfoUrl">
    <div
      class="event-container flex flex-col rounded-lg shadow bg-cover relative overflow-hidden"
    >
      <div
        v-if="day || month"
        class="event-date h-6 w-6 bg-primary-1 absolute rounded-lg font-heading text-lg text-center "
      >
        {{ day }}<br />{{ month }}
      </div>
      <div class="event-image">
        <LazyImage
          :width="216"
          :height="200"
          alt="will change to api"
          :url="events.posterImageUrl"
          :placeholder="events.posterImageHash"
          class="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div class="event-detail-container h-10 w-full flex rounded-b-lg bg-blue">
        <div class="w-1"></div>
        <div
          class="event-detail w-26 flex flex-col items-start bg-white px-2 py-1 rounded-br-lg "
        >
          <div class="event-duration text-primary">{{ time }}</div>
          <div
            class="event-name w-full font-heading text-lg leading-6 truncate"
          >
            {{ events.name }}
          </div>
          <div
            class="event-faculty w-full text-blue-10 text-sm truncate mt-0.5"
          >
            {{ locationText }}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import { Event } from "@/apollo/types";
import useEventCard from "../../useEventCard";

export default defineComponent({
  components: {
    LazyImage
  },
  props: {
    events: {
      type: Object as () => Event,
      required: true
    }
  },
  setup(props) {
    const { events } = toRefs(props);
    const {
      day,
      month,
      time,
      locationText,
      isLinkReady,
      eventInfoUrl
    } = useEventCard(events);
    return { day, month, time, locationText, isLinkReady, eventInfoUrl };
  }
});
</script>

<style scoped>
.event-container {
  height: 280px;
  width: 216px;
}
.event-date {
  top: 8px;
  bottom: 224px;
  left: 160px;
  right: 8px;
  padding: 0 10px;
}
.event-image {
  height: 200px;
  width: 216px;
}
</style>

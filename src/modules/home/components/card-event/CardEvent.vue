<template>
  <div
    class="event-container flex flex-col rounded-lg shadow bg-cover relative"
  >
    <div
      class="event-date h-6 w-6 bg-primary-1 absolute rounded-lg font-heading text-lg text-center "
    >
      {{ events.day }}<br />{{ events.month }}
    </div>
    <div class="event-image">
      <LazyImage
        :width="216"
        :height="200"
        alt="will change to api"
        :url="events.img"
        placeholder="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
        class="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div class="event-detail-container h-10 w-full flex rounded-b-lg bg-blue">
      <div class="w-1"></div>
      <div
        class="event-detail w-26 flex flex-col items-start bg-white px-2 py-1 rounded-br-lg "
      >
        <div class="event-duration text-primary">{{ events.time }}</div>
        <div class="event-name w-full font-heading text-xl leading-6 truncate">
          {{ events.title }}
        </div>
        <div class="event-faculty w-full text-blue-10 truncate">
          {{ events.faculty }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCardEvent from "./useCardEvent";
import { Event } from "@/commons/Interfaces/index.ts";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";

export default defineComponent({
  components: {
    LazyImage
  },
  props: {
    events: {
      type: Object as () => Event,
      default: {
        day: 99,
        month: "Jan",
        time: "10:00-18:00",
        title: "Fun Event",
        faculty: "Faculty of Engineering",
        img: "https://picsum.photos/200"
      }
    }
  },
  setup() {
    const {
      imgUrl,
      eventTitle,
      eventDay,
      eventMonth,
      eventTime,
      eventFaculty
    } = useCardEvent();

    return {
      imgUrl,
      eventTitle,
      eventDay,
      eventMonth,
      eventTime,
      eventFaculty
    };
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

<template>
  <div class="flex h-40">
    <div class="w-2/3 min-h-full">
      <LazyImage
        :width="1000"
        :height="1000"
        alt="will change to api"
        :url="event.coverImageUrl"
        :placeholder="event.coverImageHash"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="w-1/3 relative flex flex-col justify-between p-2">
      <section>
        <h3 class="text-2xl font-heading text-blue-10 truncate mb-1">
          {{ event.name }}
        </h3>
        <div class="flex mb-2 items-center overflow-x-auto space-x-1">
          <base-tag v-for="tag in event.tags" :key="tag.name">{{
            tag.name
          }}</base-tag>
        </div>
        <div class="text-sm mb-1 w-full text-truncate text-truncate-4">
          {{ event.description }}
        </div>
        <base-icon-and-detail class="mb-1" :detail="date"
          ><CalendarIcon
        /></base-icon-and-detail>
        <base-icon-and-detail class="mb-1" :detail="time"
          ><ClockIcon
        /></base-icon-and-detail>
        <base-icon-and-detail class="mb-1 truncate" :detail="location"
          ><PinIcon
        /></base-icon-and-detail>
      </section>
      <router-link
        :disabled="!isLinkReady"
        :to="eventInfoUrl"
        class="w-4/5 self-center"
      >
        <base-button :disabled="!isLinkReady" class="h-5 w-full"
          >Get Tickets</base-button
        >
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import BaseIconAndDetail from "@/commons/UI/BaseIconAndDetail.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import { Event } from "@/apollo/types";
import useCardBanner from "./useCardBanner";

export default defineComponent({
  name: "CardBanner",
  components: {
    BaseButton,
    BaseTag,
    BaseIconAndDetail,
    PinIcon,
    CalendarIcon,
    ClockIcon,
    LazyImage
  },
  props: {
    event: {
      type: Object as () => Event
    }
  },
  setup(props) {
    const { event } = toRefs(props);
    const { date, time, location, eventInfoUrl, isLinkReady } = useCardBanner(
      event
    );
    return {
      date,
      time,
      location,
      eventInfoUrl,
      isLinkReady
    };
  }
});
</script>

<style scoped>
::-webkit-scrollbar {
  background-color: #f7fafc;
  height: 16px;
}

::-webkit-scrollbar-track {
  background-color: #f7fafc;
}

::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
  border: 4px solid #f7fafc;
}

::-webkit-scrollbar-button {
  display: none;
}
</style>

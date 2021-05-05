<template>
  <div class="grid ticket-container bg-primary-1 rounded-2xl">
    <section class="h-auto shadow-sm rounded-l-2xl overflow-hidden">
      <LazyImage
        :width="120"
        :height="160"
        alt="will change to api"
        :url="event && event.posterImageUrl"
        :placeholder="event && event.posterImageHash"
        class="object-cover w-full h-full"
      />
    </section>
    <section class="flex flex-col pt-2 px-2 pb-1 shadow-sm z-10">
      <h1 class="text-blue-10 font-heading text-xl mb-1">
        {{ event && event.name }}
      </h1>
      <div class="flex flex-wrap mb-1">
        <base-tag
          v-for="tag in event.tags"
          :key="tag"
          class="mr-1 mb-1 h-2 bg-primary-3"
          >{{ tag.name }}</base-tag
        >
      </div>
      <h3 class="mb-1">Organized by</h3>
      <div class="flex items-center">
        <div
          class="h-4.5 w-4.5 rounded-full overflow-hidden mr-1 flex-shrink-0"
        >
          <LazyImage
            :width="100"
            :height="100"
            alt="will change to api"
            :url="event && event.organization.profilePictureUrl"
            :placeholder="event && event.organization.profilePictureHash"
            class="object-cover w-full h-full"
          />
        </div>
        <h2 class="font-heading text-xl mr-1">
          {{ event && event.organization.abbreviation }}
        </h2>
        <p class="text-sm">{{ event && event.organization.name }}</p>
      </div>
    </section>
    <section
      class="flex flex-col items-center justify-between bg-primary-1 z-20 overflow-hidden relative"
    >
      <div
        class="circle circle-top w-full h-3 rounded-b-full mb-1.5"
        :class="parentBgColor"
      ></div>
      <div class="dash-line h-full w-px"></div>
      <div
        class="circle circle-bottom w-full h-3 rounded-t-full mt-1.5"
        :class="parentBgColor"
      ></div>
    </section>
    <section class="rounded-r-2xl flex flex-col pt-2 pb-1 px-2 shadow-sm">
      <div class="flex font-heading text-lg items-center mb-1">
        <h2 v-if="ticketID" class="mr-1">Ticket ID:</h2>
        <p v-if="isPending" class="text-primary">Pending</p>
        <p v-else-if="isRejected" class="text-gray-6">
          Rejected
        </p>
        <p v-else class="text-primary">{{ ticketID }}</p>
      </div>
      <div class="text-sm mb-1">
        <base-icon-and-detail class="mb-1" :detail="date"
          ><CalendarIcon
        /></base-icon-and-detail>
        <base-icon-and-detail class="mb-1" :detail="time"
          ><ClockIcon
        /></base-icon-and-detail>
        <base-icon-and-detail :detail="event && event.location.name"
          ><PinIcon
        /></base-icon-and-detail>
      </div>
      <router-link :to="routerLinkId">
        <base-button
          v-if="isOngoing"
          class="check-in-btn self-center mt-auto h-3.5 w-full"
          >Check in</base-button
        >
        <base-button
          v-else-if="isAttended"
          :disabled="isSubmittedFeedback"
          class="check-in-btn self-center mt-auto h-3.5 w-full"
          >{{
            isSubmittedFeedback ? "Submited Feedback" : "Feedback"
          }}</base-button
        >
      </router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import BaseIconAndDetail from "@/commons/UI/BaseIconAndDetail.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import useTicket from "./useTicket";
import { Event, UserEventStatus } from "@/apollo/types";

export default defineComponent({
  name: "Ticket",
  components: {
    LazyImage,
    BaseTag,
    BaseButton,
    BaseIconAndDetail,
    PinIcon,
    ClockIcon,
    CalendarIcon
  },
  props: {
    event: {
      type: Object as () => Event,
      required: true
    },
    ticketID: {
      type: String
    },
    parentBgColor: {
      type: String,
      default: "bg-white"
    },
    ticketStatus: {
      type: String as () => UserEventStatus,
      required: true
    }
  },
  setup(props) {
    const { event } = toRefs(props);
    const {
      isPending,
      isOngoing,
      isHistory,
      date,
      time,
      routerLinkId,
      isAttended,
      isSubmittedFeedback,
      isRejected
    } = useTicket(props.ticketStatus, event);
    return {
      isPending,
      isOngoing,
      isHistory,
      date,
      time,
      routerLinkId,
      isAttended,
      isSubmittedFeedback,
      isRejected
    };
  }
});
</script>

<style scoped>
.ticket-container {
  grid-template-columns: 15% 56% 3% 26%;
}

.check-in-btn {
  max-width: 170px;
}

.circle {
  padding-top: 100%;
}

.circle-top {
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.04) inset;
  margin-top: -50%;
}

.circle-bottom {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.055) inset;
  margin-bottom: -50%;
}

.dash-line {
  background: linear-gradient(rgb(160, 174, 192) 50%, rgba(255, 255, 255, 0) 0%)
    right/2px 8px repeat-y;
}
</style>

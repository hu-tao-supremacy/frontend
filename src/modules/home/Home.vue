<template>
  <div class="flex flex-col px-4 justify-center items-center w-full">
    <div class="container">
      <EventCarousel :eventsList="featureEvents" class="my-4 w-full" />
      <div class="flex h-6 w-full mb-3 justify-between items-center">
        <div class="text-4xl font-heading">Recommended For You</div>
        <base-transparent-button
          class="group w-16 h-4 flex justify-center items-center "
        >
          View More
          <span class="text-primary ml-1 group-hover:text-primary-5">
            <base-icon
              width="24px"
              height="24px"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><ArrowRightIcon
            /></base-icon>
          </span>
        </base-transparent-button>
      </div>

      <div
        class="recommended grid gap-4 mb-4 w-full justify-center md:justify-start"
      >
        <CardRecommended
          v-for="detail in recommendedEvents"
          :key="detail.id"
          :recommended="detail"
        />
      </div>
      <div class="flex h-6 w-full mb-3 justify-between items-center">
        <div class="text-4xl font-heading">Upcoming Events</div>
        <base-transparent-button
          class="group w-16 h-4 flex justify-center items-center "
        >
          View More
          <span class="text-primary ml-1 group-hover:text-primary-5">
            <base-icon
              width="24px"
              height="24px"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><ArrowRightIcon
            /></base-icon>
          </span>
        </base-transparent-button>
      </div>
      <div class="card grid gap-4 mb-4 w-full justify-center md:justify-start">
        <CardEvent
          v-for="event in upcommingEvents"
          :key="event.id"
          :events="event"
        />
      </div>
      <div class="flex h-6 w-full mb-3 justify-between items-center">
        <div class="text-4xl font-heading">Organization</div>
      </div>
      <div
        class="card grid gap-4 mb-4 w-full justify-center md:justify-start"
        v-if="state.orgs"
      >
        <CardOrganization v-for="org in state.orgs" :key="org.id" :orgs="org" />
      </div>
      <div class="flex h-6 w-full mb-3 justify-between items-center">
        <div class="text-4xl font-heading">Online Events</div>
        <base-transparent-button
          class="group w-16 h-4 flex justify-center items-center "
        >
          View More
          <span class="text-primary ml-1 group-hover:text-primary-5">
            <base-icon
              width="24px"
              height="24px"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><ArrowRightIcon
            /></base-icon>
          </span>
        </base-transparent-button>
      </div>
      <div class="card grid gap-4 mb-4 w-full justify-center md:justify-start">
        <CardEvent
          v-for="event in onlineEvents"
          :key="event.id"
          :events="event"
        />
      </div>
      <div class="flex h-6 w-full mb-3 justify-between items-center">
        <div class="text-4xl font-heading">Nearby Events</div>
        <base-transparent-button
          class="group w-16 h-4 flex justify-center items-center "
        >
          View More
          <span class="text-primary ml-1 group-hover:text-primary-5">
            <base-icon
              width="24px"
              height="24px"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><ArrowRightIcon
            /></base-icon>
          </span>
        </base-transparent-button>
      </div>
      <div class="card grid gap-4 mb-20 w-full justify-center md:justify-start">
        <CardEvent
          v-for="event in nearbyEvents"
          :key="event.id"
          :events="event"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardEvent from "./components/card-event/CardEvent.vue";
import CardRecommended from "./components/card-recommended/CardRecommended.vue";
import CardOrganization from "./components/card-organization/CardOrganization.vue";
import EventCarousel from "./components/event-carousel/EventCarousel.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import ArrowRightIcon from "@/assets/ArrowRight.vue";
import useHome from "./use-home";

export default defineComponent({
  components: {
    CardEvent,
    CardRecommended,
    CardOrganization,
    EventCarousel,
    BaseTransparentButton,
    ArrowRightIcon
  },

  setup() {
    const {
      state,
      showModal,
      toggleModal,
      featureEvents,
      recommendedEvents,
      upcommingEvents,
      onlineEvents,
      nearbyEvents
    } = useHome();

    return {
      state,
      showModal,
      toggleModal,
      featureEvents,
      recommendedEvents,
      upcommingEvents,
      onlineEvents,
      nearbyEvents
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 961px;
}
.recommended {
  grid-template-columns: repeat(auto-fit, 299px);
}
.card {
  grid-template-columns: repeat(auto-fit, 216px);
}
</style>

<template>
  <div class="flex flex-col mx-4 justify-center items-center w-full md:mx-0">
    <div class="container">
      <EventCarousel :eventsList="state.eventsList" class="my-4 w-full" />
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
          v-for="detail in state.recommendedEvents"
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
          v-for="event in state.events"
          :key="event.id"
          :events="event"
        />
      </div>
      <div class="flex h-6 w-full mb-3 justify-between items-center">
        <div class="text-4xl font-heading">Organization</div>
      </div>
      <div class="card grid gap-4 mb-4 w-full justify-center md:justify-start">
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
          v-for="event in state.events"
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
          v-for="event in state.events"
          :key="event.id"
          :events="event"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import CardEvent from "./components/card-event/CardEvent.vue";
import CardRecommended from "./components/card-recommended/CardRecommended.vue";
import CardOrganization from "./components/card-organization/CardOrganization.vue";
<<<<<<< HEAD
import CardInterest from "@/modules/global/card-interest/CardInterest.vue";
=======
>>>>>>> 488b59e56b25a6a8fa00c3e3e5279fda404f70c7
import EventCarousel from "./components/event-carousel/EventCarousel.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import ArrowRightIcon from "@/assets/ArrowRight.vue";
import { testData } from "./useHome/testData";

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
    const state = reactive(testData);
    const showModal = ref(false);

    function toggleModal() {
      showModal.value = !showModal.value;
    }

    return { state, showModal, toggleModal };
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

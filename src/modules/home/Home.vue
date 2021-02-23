<template>
  <div class="flex flex-col mx-4 justify-center items-center w-full md:mx-0">
    <EventCarousel
      :style="{ maxWidth: '960px' }"
      :eventList="state.eventList"
      class="my-4 w-full"
    />
    <div
      :style="{ maxWidth: '960px' }"
      class="flex h-6 w-full mb-3 justify-between items-center"
    >
      <div class="text-4xl font-heading">Recommended For You</div>
      <base-transparent-button
        class="btn w-16 h-4 flex justify-center items-center "
      >
        <div class="mr-1">View More</div>
        <base-icon
          width="24px"
          height="24px"
          iconColor="#FF855F"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><ArrowRightIcon
        /></base-icon>
      </base-transparent-button>
    </div>
    
    <div class="recommended grid gap-4 mb-4 w-full justify-center md:justify-start">
      <CardRecommended
        v-for="detail in state.recommendedEvents"
        :key="detail.id"
        :recommended="detail"
      />
    </div>
    <div
      :style="{ maxWidth: '960px' }"
      class="flex h-6 w-full mb-3 justify-between items-center"
    >
      <div class="text-4xl font-heading">Upcoming Events</div>
      <base-transparent-button
        class="btn w-16 h-4 flex justify-center items-center "
      >
        <div class="mr-1">View More</div>
        <base-icon
          width="24px"
          height="24px"
          iconColor="#FF855F"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><ArrowRightIcon
        /></base-icon>
      </base-transparent-button>
    </div>
    <div class="card grid gap-4 mb-4 w-full justify-center md:justify-start">
      <CardEvent
        v-for="event in state.events"
        :key="event.id"
        :events="event"
      />
    </div>
    <div
      :style="{ maxWidth: '960px' }"
      class="flex h-6 w-full mb-3 justify-between items-center"
    >
      <div class="text-4xl font-heading">Organization</div>
    </div>
    <div class="card grid gap-4 mb-4 w-full justify-center md:justify-start">
      <CardOrganization v-for="org in state.orgs" :key="org.id" :orgs="org" />
    </div>
    <div
      :style="{ maxWidth: '960px' }"
      class="flex h-6 w-full mb-3 justify-between items-center"
    >
      <div class="text-4xl font-heading">Online Events</div>
      <base-transparent-button
        class="btn w-16 h-4 flex justify-center items-center "
      >
        <div class="mr-1">View More</div>
        <base-icon
          width="24px"
          height="24px"
          iconColor="#FF855F"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><ArrowRightIcon
        /></base-icon>
      </base-transparent-button>
    </div>
    <div class="card grid gap-4 mb-4 w-full justify-center md:justify-start">
      <CardEvent
        v-for="event in state.events"
        :key="event.id"
        :events="event"
      />
    </div>
    <div
      :style="{ maxWidth: '960px' }"
      class="flex h-6 w-full mb-3 justify-between items-center"
    >
      <div class="text-4xl font-heading">Nearby Events</div>
      <base-transparent-button
        class="btn w-16 h-4 flex justify-center items-center "
      >
        <div class="mr-1">View More</div>
        <base-icon
          width="24px"
          height="24px"
          iconColor="#FF855F"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><ArrowRightIcon
        /></base-icon>
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
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import CardEvent from "./components/card-event/CardEvent.vue";
import CardRecommended from "./components/card-recommended/CardRecommended.vue";
import CardOrganization from "./components/card-organization/CardOrganization.vue";
import EventCarousel from "./components/event-carousel/EventCarousel.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import ArrowRightIcon from "@/assets/ArrowRight.vue";

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
    const state = reactive({
      recommendedEvents: [
        {
          id: 1,
          title: "Chula Collective Investment",
          faculty: "Faculty of Engineering",
          day: "15",
          month: "Feb",
          time: "10:00-18:00",
          img: "https://picsum.photos/300"
        },
        {
          id: 2,
          title: "Chula Collective",
          faculty: "Faculty of Engineering",
          day: "15",
          month: "Feb",
          time: "10:00-18:00",
          img: "https://picsum.photos/400"
        },
        {
          id: 3,
          title: "Chula Investment",
          faculty: "Faculty of Engineering",
          day: "15",
          month: "Feb",
          time: "10:00-18:00",
          img: "https://picsum.photos/400"
        }
      ],
      events: [
        {
          id: 1,
          title: "Chula Collective Investment",
          faculty: "Faculty of Engineering",
          day: "15",
          month: "Feb",
          time: "10:00-18:00",
          img: "https://picsum.photos/500"
        },
        {
          id: 2,
          title: "Chula Collective",
          faculty: "Faculty of Engineering",
          day: "15",
          month: "Feb",
          time: "10:00-18:00",
          img: "https://picsum.photos/200"
        },
        {
          id: 3,
          title: "Chula Investment",
          faculty: "Faculty of Engineering",
          day: "15",
          month: "Feb",
          time: "10:00-18:00",
          img: "https://picsum.photos/300"
        },
        {
          id: 4,
          title: "Chula Investment",
          faculty: "Faculty of Engineering",
          day: "15",
          month: "Feb",
          time: "10:00-18:00",
          img: "https://picsum.photos/400"
        }
      ],
      orgs: [
        {
          id: 1,
          fullName: "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)",
          shortName: "SGCU",
          img:
            "https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/147484347_3819070534802922_4929298246220081385_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFi4rMh7Yw3qrsCMcaWiRlF6aoBGZo3Aa_pqgEZmjcBr-lDqtVr3_Nw9D1HnHa9jaWxAA8LHpnpABTuXdp3YF-j&_nc_ohc=2xxv2bLVx_0AX_1OVgC&_nc_ht=scontent.fbkk22-6.fna&oh=71b718d7148f60b83f2effa8b469b04a&oe=605694B7"
        },
        {
          id: 2,
          fullName: "องค์การช่วยชีวิตนิสิต",
          shortName: "HELPLS",
          img: "https://picsum.photos/200"
        }
      ],
      interestName: "Music & Festival",
      eventList: [
        {
          title: "Chula Reuy",
          tags: ["Engineering", "Food", "Education", "Fun"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.",
          location: "Engineering Faculty, Chula",
          date: "Sun, 14 Feb - 16 April",
          time: "10:00-18:00",
          img: "https://picsum.photos/1000"
        },
        {
          title: "Chula Reuy Mak",
          tags: ["Engineering", "Food", "Education", "Fun"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.",
          location: "Engineering Faculty, Chula",
          date: "Sun, 14 Feb - 16 April",
          time: "10:00-18:00",
          img: "https://picsum.photos/1100"
        },
        {
          title: "Chula Reuy Lei",
          tags: ["Engineering", "Food", "Education", "Fun"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.",
          location: "Engineering Faculty, Chula",
          date: "Sun, 14 Feb - 16 April",
          time: "10:00-18:00",
          img: "https://picsum.photos/900"
        },
        {
          title: "Chula Jeng",
          tags: ["Engineering", "Food", "Education", "Fun"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.",
          location: "Engineering Faculty, Chula",
          date: "Sun, 14 Feb - 16 April",
          time: "10:00-18:00",
          img: "https://picsum.photos/1200"
        }
      ]
    });
    const showModal = ref(false);

    function toggleModal() {
      showModal.value = !showModal.value;
    }

    return { state, showModal, toggleModal };
  }
});
</script>

<style scoped>
.recommended {
  max-width: 961px;
  grid-template-columns: repeat(auto-fit, 299px);
}
.card {
  max-width: 960px;
  grid-template-columns: repeat(auto-fit, 216px);
}
</style>

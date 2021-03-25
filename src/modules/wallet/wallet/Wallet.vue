<template>
  <div
    class="rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col pt-3 pb-8 px-8"
  >
    <section class="flex items-center mb-4">
      <div
        class="h-20 w-20 shadow-sm rounded-full overflow-hidden flex-shrink-0 mr-4"
      >
        <LazyImage
          :width="200"
          :height="200"
          alt="will change to api"
          :url="profile.img"
          :placeholder="profile.imgHash"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex items-center mb-1">
          <h1 class="font-heading text-4xl mr-3">
            {{ profile.firstName }} {{ profile.lastName }}
          </h1>
          <base-icon
            @click="editInfo"
            width="20px"
            height="20px"
            class="cursor-pointer"
            ><EditIcon
          /></base-icon>
        </div>
        <p class="text-gray-6 mb-1">{{ profile.email }}</p>
        <div class="flex items-center">
          <p class="mr-1">{{ profile.like }}</p>
          <h3 class="mr-1">Like</h3>
          <div class="w-1 h-1 rounded-full bg-primary mr-1"></div>
          <p class="mr-1">{{ profile.ticket }}</p>
          <h3 class="mr-1">Like</h3>
          <div class="w-1 h-1 rounded-full bg-primary mr-1"></div>
          <p class="mr-1">{{ profile.following }}</p>
          <h3>Like</h3>
        </div>
      </div>
    </section>
    <section class="flex font-heading text-xl relative mb-3">
      <div
        @click="showOngoingTicket"
        class="mr-3.5 cursor-pointer flex flex-col z-10"
      >
        <h2 class="mb-1" :class="{ 'text-primary': isOngoingTicket }">
          Ongoing
        </h2>
        <div
          class="w-full h-0.5 rounded-full"
          :class="{
            'bg-primary': isOngoingTicket,
            'bg-gray-2': !isOngoingTicket
          }"
        ></div>
      </div>
      <div
        @click="showHistoryTicket"
        class="mr-3.5 cursor-pointer flex flex-col z-10"
      >
        <h2 class="mb-1" :class="{ 'text-primary': !isOngoingTicket }">
          History
        </h2>
        <div
          class="w-full h-0.5 rounded-full"
          :class="{
            'bg-primary': !isOngoingTicket,
            'bg-gray-2': isOngoingTicket
          }"
        ></div>
      </div>
      <div class="w-full h-0.5 rounded-full bg-gray-2 absolute bottom-0"></div>
    </section>
    <section class="flex flex-col">
      <TicketComponent
        v-show="isOngoingTicket"
        v-for="(ticket, index) in ongoingTickets"
        :key="ticket"
        :event="ticket.event"
        :organization="ticket.organization"
        :ticketID="ticket.ticketID"
        :bgColor="'bg-white'"
        :class="{ 'mb-2': index != ongoingTickets.length - 1 }"
      />
      <TicketComponent
        v-show="!isOngoingTicket"
        v-for="(ticket, index) in historyTickets"
        :key="ticket"
        :event="ticket.event"
        :organization="ticket.organization"
        :ticketID="ticket.ticketID"
        :bgColor="'bg-white'"
        :class="{ 'mb-2': index != historyTickets.length - 1 }"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import EditIcon from "@/assets/Edit.vue";
import TicketComponent from "@/modules/wallet/ticket/Ticket.vue";
import { Profile, Ticket } from "@/commons/Interfaces";

export default defineComponent({
  name: "Wallet",
  components: {
    LazyImage,
    EditIcon,
    TicketComponent
  },
  props: {
    profile: {
      type: Object as () => Profile,
      required: true
    }
  },
  setup() {
    const isOngoingTicket = ref(true);
    const ticket = {
      event: {
        title: "Information and Communication Event (ICE)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero pellentesque, hendrerit eros vitae, malesuada nisi. Nam tempus dolor vitae mauris luctus aliquet. Sed et finibus erat.",
        date: "Sun, 14 Feb - 16 April",
        time: "10:00 - 18:00",
        location: "Engineering Faculty, Chula",
        faculty: "ISE",
        imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
        img: "https://picsum.photos/400",
        tags: ["Engineering", "Food", "Education"]
      },
      organization: {
        img: "https://picsum.photos/100",
        imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
        shortName: "SGCU",
        fullName: "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)",
        description: `<ORG - BIO>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque pulvinar ornare orci amet. Quis arcu rhoncus velit amet nulla eleifend tristique quis? `
      },
      ticketID: "175FD57"
    };
    const ongoingTickets = [ticket, ticket, ticket];
    const historyTickets = [ticket, ticket];

    function showOngoingTicket() {
      isOngoingTicket.value = true;
    }

    function showHistoryTicket() {
      isOngoingTicket.value = false;
    }

    function editInfo() {
      //Send to edit info page
      console.log("Edit info");
    }

    return {
      isOngoingTicket,
      ongoingTickets,
      historyTickets,
      showOngoingTicket,
      showHistoryTicket,
      editInfo
    };
  }
});
</script>

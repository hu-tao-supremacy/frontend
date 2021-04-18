<template>
  <div
    class="rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col pt-3 pb-8 px-8 w-full"
  >
    <section class="flex items-center mb-4">
      <div
        class="h-20 w-20 shadow-sm rounded-full overflow-hidden flex-shrink-0 mr-4"
      >
        <LazyImage
          :width="200"
          :height="200"
          alt="will change to api"
          :url="profile.profilePictureUrl"
          :placeholder="profile.profilePictureHash"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex items-center mb-1">
          <h1 class="font-heading text-4xl mr-3">
            {{ profile.firstName }} {{ profile.lastName }}
          </h1>
          <base-transparent-button @click="editInfo"
            ><base-icon width="20px" height="20px"><EditIcon /></base-icon
          ></base-transparent-button>
        </div>
        <p class="text-gray-6 mb-1">{{ profile.email }}</p>
        <div class="flex items-center">
          <div class="w-1 h-1 rounded-full bg-primary mr-1"></div>
          <p class="mr-1">{{ profile.events && profile.events.length }}</p>
          <h3 class="mr-1">Events attended</h3>
        </div>
      </div>
    </section>
    <section class="flex font-heading text-xl relative mb-3">
      <div
        @click="changeTicketStatusView(UserEventStatus.Approved)"
        class="mr-3.5 cursor-pointer flex flex-col z-10"
      >
        <h2 class="mb-1" :class="{ 'text-primary': isOngoingTicketView }">
          Ongoing
        </h2>
        <div
          class="w-full h-0.5 rounded-full"
          :class="{
            'bg-primary': isOngoingTicketView,
            'bg-gray-2': !isOngoingTicketView
          }"
        ></div>
      </div>
      <div
        @click="changeTicketStatusView(UserEventStatus.Pending)"
        class="mr-3.5 cursor-pointer flex flex-col z-10"
      >
        <h2 class="mb-1" :class="{ 'text-primary': isPendingTicketView }">
          Pending
        </h2>
        <div
          class="w-full h-0.5 rounded-full"
          :class="{
            'bg-primary': isPendingTicketView,
            'bg-gray-2': !isPendingTicketView
          }"
        ></div>
      </div>
      <div
        @click="changeTicketStatusView(UserEventStatus.Rejected)"
        class="cursor-pointer flex flex-col z-10"
      >
        <h2 class="mb-1" :class="{ 'text-primary': isHistoryTicketView }">
          History
        </h2>
        <div
          class="w-full h-0.5 rounded-full"
          :class="{
            'bg-primary': isHistoryTicketView,
            'bg-gray-2': !isHistoryTicketView
          }"
        ></div>
      </div>
      <div class="w-full h-0.5 rounded-full bg-gray-2 absolute bottom-0"></div>
    </section>
    <section class="flex flex-col">
      <TicketComponent
        v-show="isOngoingTicketView"
        v-for="(ticket, index) in findApprovedEvents"
        :key="index"
        :ticketStatus="UserEventStatus.Approved"
        :event="ticket"
        :ticketID="ticket.attendance.ticket"
        :parentBgColor="'bg-white'"
        :class="{ 'mb-2': index != findApprovedEvents.length - 1 }"
      />
      <!-- <TicketComponent
        v-show="isPendingTicketView"
        v-for="(ticket, index) in pendingTickets"
        :key="index"
        :ticketStatus="UserEventStatus.Pending"
        :event="ticket.event"
        :organization="ticket.organization"
        :parentBgColor="'bg-white'"
        :class="{ 'mb-2': index != pendingTickets.length - 1 }"
      />
      <TicketComponent
        v-show="isHistoryTicketView"
        v-for="(ticket, index) in historyTickets"
        :key="index"
        :ticketStatus="UserEventStatus.Rejected"
        :event="ticket.event"
        :organization="ticket.organization"
        :ticketID="ticket.ticketID"
        :bgColor="'bg-white'"
        :class="{ 'mb-2': index != historyTickets.length - 1 }"
      /> -->
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import EditIcon from "@/assets/Edit.vue";
import TicketComponent from "@/modules/wallet/ticket/Ticket.vue";
import useWallet from "./useWallet";
import { User, UserEventStatus } from "@/apollo/types";

export default defineComponent({
  name: "Wallet",
  components: {
    LazyImage,
    BaseTransparentButton,
    EditIcon,
    TicketComponent
  },
  props: {
    profile: {
      type: Object as () => User,
      required: true
    }
  },
  setup(props) {
    const {
      ticketStatusView,
      changeTicketStatusView,
      editInfo,
      isOngoingTicketView,
      isPendingTicketView,
      isHistoryTicketView
    } = useWallet();

    const findApprovedEvents = computed(() =>
      props.profile.history?.filter(
        value => value.attendance?.status === UserEventStatus.Approved
      )
    );

    return {
      ticketStatusView,
      changeTicketStatusView,
      editInfo,
      isOngoingTicketView,
      isPendingTicketView,
      isHistoryTicketView,
      UserEventStatus,
      findApprovedEvents
    };
  }
});
</script>

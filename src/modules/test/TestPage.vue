<template>
  <div class="bg-gray-1 p-2">
    <Wallet
      class="content-max-width"
      :profile="test.profile"
      :ongoingTickets="wallet.ongoingTickets"
      :historyTickets="wallet.historyTickets"
    />
    <InfoBanner
      :style="{ maxWidth: '960px' }"
      :eventBanner="test.eventBanner"
    />
    <EventDetail
      class="mt-2"
      :style="{ maxWidth: '628px' }"
      :eventDetail="test.eventDetail"
    />
    <EventOrganizer
      class="mt-2"
      :style="{ maxWidth: '300px' }"
      :eventOrg="test.eventOrganizer"
    />
    <Ticket
      class="mb-3"
      :event="test.event"
      :organization="test.organization"
      :ticketID="test.ticketID"
      :bgColor="'bg-gray-1'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBanner from "@/modules/eventInfo/info-banner/InfoBanner.vue";
import EventDetail from "@/modules/eventInfo/event-detail/EventDetail.vue";
import EventOrganizer from "@/modules/eventInfo/event-organizer/EventOrganizer.vue";
import Ticket from "@/modules/wallet/ticket/Ticket.vue";
import Wallet from "@/modules/wallet/wallet/Wallet.vue";
import { testData, walletData } from "./testData";

export default defineComponent({
  name: "TestPage",
  components: {
    InfoBanner,
    EventDetail,
    EventOrganizer,
    Ticket,
    Wallet
  },
  setup() {
    const test = testData;
    const wallet = walletData;

    return {
      test,
      wallet
    };
  }
});
</script>

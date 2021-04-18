<template>
  <div class="flex flex-col p-4 justify-center items-center w-full">
    <div class="container">
      <InfoBannerCompact :eventBanner="event" />
      <TicketQR
        class="mt-3"
        :user="user"
        :ticketID="event && event.attendance && event.attendance.ticket"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBannerCompact from "@/modules/userCheckIn/info-banner-compact/InfoBannerCompact.vue";
import TicketQR from "@/modules/userCheckIn/ticket-qr/TicketQR.vue";
import useUserCheckIn from "./use-user-checkin/useUserCheckIn";

export default defineComponent({
  name: "UserCheckInPage",
  components: {
    InfoBannerCompact,
    TicketQR
  },
  setup() {
    const { event, user } = useUserCheckIn();
    return { event, user };
  }
});
</script>

<style scoped>
.container {
  max-width: 960px;
}
</style>

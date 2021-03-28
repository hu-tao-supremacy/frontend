<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <div class="container">
      <InfoBannerCompact :eventBanner="test.eventBanner" />
      <TicketQR class="mt-3" :ticket="test.ticket" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBannerCompact from "@/modules/userCheckIn/info-banner-compact/InfoBannerCompact.vue";
import TicketQR from "@/modules/userCheckIn/ticket-qr/TicketQR.vue";
import testData from "@/modules/userCheckIn/use-user-checkin/testData";

export default defineComponent({
  name: "UserCheckInPage",
  components: {
    InfoBannerCompact,
    TicketQR
  },
  setup() {
    console.log("test");
    const test = testData;
    return {
      test
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 960px;
}
</style>

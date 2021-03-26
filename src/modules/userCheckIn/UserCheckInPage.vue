<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <div class="container">
      <InfoBannerNoBg :eventBanner="test.eventBanner" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBannerNoBg from "@/modules/userCheckIn/info-banner-no-bg/InfoBannerNoBg.vue";
import testData from "@/modules/eventInfo/use-event-info/testData";

export default defineComponent({
  name: "UserCheckInPage",
  components: {
    InfoBannerNoBg
  },
  setup() {
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

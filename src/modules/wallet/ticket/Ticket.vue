<template>
  <div class="flex bg-primary-1 rounded-2xl" :style="{ maxWidth: '832px' }">
    <section
      class="image-container h-auto shadow-sm rounded-l-2xl overflow-hidden"
    >
      <LazyImage
        :width="200"
        :height="200"
        alt="will change to api"
        :url="eventImg"
        :placeholder="eventImgHash"
        class="object-cover w-full h-full"
      />
    </section>
    <section
      class="event-info-container flex flex-col pt-2 px-2 pb-1 shadow-sm z-10"
    >
      <h1 class="text-blue-10 font-heading text-xl mb-1">{{ eventTitle }}</h1>
      <div class="flex flex-wrap mb-1">
        <base-tag
          v-for="tag in eventTags"
          :key="tag"
          class="mr-1 mb-1 h-2 bg-primary-3"
          >{{ tag }}</base-tag
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
            :url="eventOrgImg"
            :placeholder="eventOrgImgHash"
            class="object-cover w-full h-full"
          />
        </div>
        <h2 class="font-heading text-xl mr-1">{{ eventOrgShortName }}</h2>
        <p class="text-sm">{{ eventOrgLongName }}</p>
      </div>
    </section>
    <section
      class="dash-container flex flex-col items-center justify-between bg-primary-1 z-20 overflow-hidden relative"
    >
      <div
        class="circle circle-top w-full h-3 rounded-b-full mb-1.5"
        :class="bgColor"
      ></div>
      <div class="dash-line h-full w-px"></div>
      <div
        class="circle circle-bottom w-full h-3 rounded-t-full mt-1.5"
        :class="bgColor"
      ></div>
    </section>
    <section
      class="ticket-info-container rounded-r-2xl flex flex-col pt-2 pb-1 px-2 shadow-sm"
    >
      <div class="flex font-heading text-lg items-center mb-1">
        <h2 class="mr-1">Ticket ID:</h2>
        <p class="text-primary">{{ ticketID }}</p>
      </div>
      <div class="text-sm mb-1">
        <div class="flex items-center mb-1">
          <base-icon
            width="14px"
            height="14px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><CalendarIcon
          /></base-icon>
          {{ eventDate }}
        </div>
        <div class="flex items-center mb-1">
          <base-icon
            width="14px"
            height="14px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><ClockIcon
          /></base-icon>
          {{ eventTime }}
        </div>
        <div class="flex items-center">
          <base-icon
            width="14px"
            height="14px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><PinIcon
          /></base-icon>
          {{ eventLocation }}
        </div>
      </div>
      <base-button
        class="check-in-btn self-center mt-auto py-0.25 w-full"
        @click="checkIn"
        >Check in</base-button
      >
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";

export default defineComponent({
  name: "Ticket",
  components: {
    LazyImage,
    BaseTag,
    BaseButton,
    PinIcon,
    ClockIcon,
    CalendarIcon
  },
  setup() {
    const eventImg = "https://picsum.photos/200";
    const eventImgHash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";
    const eventTitle = "Information and Communication Event (ICE)";
    const eventTags = ["Engineering", "Food", "Education"];
    const eventOrgImg = "https://picsum.photos/201";
    const eventOrgImgHash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";
    const eventOrgShortName = "SGCU";
    const eventOrgLongName =
      "องค์การบริหารสโมสรนิสิต จุฬาลงกรณ์มหาวิทยาลัย (อบจ.)";
    const ticketID = "175FD57";
    const eventDate = "Sun, 14 Feb - 16 April";
    const eventTime = "10:00 - 18:00";
    const eventLocation = "Engineering Faculty, Chula";
    const bgColor = "bg-gray-1";

    function checkIn() {
      //Do something when check in
      console.log("Do checkin");
    }

    return {
      eventImg,
      eventImgHash,
      eventTitle,
      eventTags,
      eventOrgImg,
      eventOrgImgHash,
      eventOrgShortName,
      eventOrgLongName,
      ticketID,
      eventDate,
      eventTime,
      eventLocation,
      bgColor,
      checkIn
    };
  }
});
</script>

<style scoped>
.image-container {
  width: 15%;
}

.event-info-container {
  width: 56%;
}

.dash-container {
  width: 3%;
}

.ticket-info-container {
  width: 26%;
}

.check-in-btn {
  max-width: 170px;
}

.circle {
  padding-top: 100%;
}

.circle-top {
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.04) inset;
}

.circle-bottom {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.055) inset;
}

.dash-line {
  background-image: linear-gradient(
    rgb(160, 174, 192) 50%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: right;
  background-size: 2px 8px;
  background-repeat: repeat-y;
}
</style>

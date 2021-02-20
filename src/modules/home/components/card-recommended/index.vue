<template>
  <div
    class="event-container flex flex-col rounded-lg shadow bg-cover relative min-h-full"
  >
    <div
      class="event-date h-6 w-6 absolute rounded-lg font-heading text-lg text-center"
    >
      {{ eventDay }}<br />{{ eventMonth }}
    </div>
    <div class="event-image">
      <img
        src="https://picsum.photos/300/600"
        class="h-full w-full object-cover rounded-t-lg"
      />
    </div>
    <div class="event-detail-container h-10 w-full flex rounded-b-lg bg-blue">
      <div class="w-1"></div>
      <div
        class="event-detail flex flex-grow flex-row justify-between bg-white pl-2 py-1 pr-1 rounded-br-lg"
      >
        <div class="event-details-list flex flex-col items-start">
          <div class="event-duration text-primary text-sm">{{ eventTime }}</div>
          <div class="event-name font-heading text-xl">{{ eventTitle }}</div>
          <div class="event-faculty text-blue-dark text-sm">
            {{ eventFaculty }}
          </div>
        </div>
        <button class="btn flex justify-center items-center bg-primary rounded-lg">
          <base-icon
            width="24px"
            height="24px"
            iconColor="#FFFFFF"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><ArrowRightIcon
          /></base-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ArrowRightIcon from "@/assets/ArrowRight.vue";
export default defineComponent({
  components: {
    ArrowRightIcon
  },
  setup() {
    const eventTitle = "Chula Invest";
    const imgUrl = "https://picsum.photos/400/500";
    const eventDay = "15";
    const eventMonth = "Feb";
    const eventTime = "10:00-18:00";
    const eventFaculty = "Faculty of Engineering";

    return {
      imgUrl,
      eventTitle,
      eventDay,
      eventMonth,
      eventTime,
      eventFaculty
    };
  }
});
</script>

<style scoped>
.event-container {
  height: 240px;
  width: 299px;
}
.event-date {
  top: 8px;
  bottom: 184px;
  left: 243px;
  right: 8px;
  background-color: #fff6f0;
  padding: 0px 10px 0px 10px;
}
.event-image {
  height: 160px;
  width: 299px;
}

.btn {
  height: 38px;
  width: 38px;
  margin-top: 13px;
}
</style>

<template>
  <div
    class="event-container h-30 flex flex-col rounded-lg shadow bg-cover relative min-h-full"
  >
    <div
      class="event-date h-6 w-6 absolute rounded-lg font-heading text-lg text-center bg-primary-1"
    >
      {{ eventDay }}<br />{{ eventMonth }}
    </div>
    <div class="event-image h-20">
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
        <div class="event-details-list w-28 flex flex-col items-start">
          <div class="event-duration w-full text-primary text-sm">
            {{ eventTime }}
          </div>
          <div class="event-name w-full font-heading text-xl truncate">
            {{ eventTitle }}
          </div>
          <div class="event-faculty w-full text-blue-10 text-sm truncate">
            {{ eventFaculty }}
          </div>
        </div>
        <div class="event-button flex flex-col justify-center">
          <base-button class="btn w-4/5 h-5 flex justify-center items-center ">
            <base-icon
              width="24px"
              height="24px"
              iconColor="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><ArrowRightIcon
            /></base-icon>
          </base-button>
          <!-- </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import ArrowRightIcon from "@/assets/ArrowRight.vue";
export default defineComponent({
  components: {
    BaseButton,
    ArrowRightIcon
  },
  setup() {
    const eventTitle = "Chula Collective Investmentnlkjnknlkmlk";
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
  width: 299px;
}
.event-date {
  top: 8px;
  bottom: 184px;
  left: 243px;
  right: 8px;
  padding: 0px 10px 0px 10px;
}
.event-image {
  width: 299px;
}

.btn {
  height: 38px;
  width: 38px;
}
</style>

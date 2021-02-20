<template>
  <div
    class="event-container flex flex-col rounded-lg shadow bg-cover relative"
  >
    <div
      class="event-date h-6 w-6 absolute rounded-lg font-heading text-lg text-center"
    >
      {{ eventDay }}<br />{{ eventMonth }}
    </div>
    <div class="event-image">
      <img :src="imgUrl" class="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div class="event-detail-container h-10 w-full flex rounded-b-lg bg-blue">
      <div class="w-1"></div>
      <div
        class="event-detail flex flex-grow flex-col items-start justify-center bg-white pl-2 py-1 rounded-br-lg "
      >
        <div class="event-duration text-primary text-sm">{{ eventTime }}</div>
        <div class="event-name font-heading text-xl">{{ eventTitle }}</div>
        <div class="event-faculty text-blue-dark text-sm">
          {{ eventFaculty }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const eventTitle = "Chula Invest";
    const imgUrl = "https://picsum.photos/300/600";
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
  height: 280px;
  width: 216px;
}
.event-date {
  top: 8px;
  bottom: 224px;
  left: 160px;
  right: 8px;
  background-color: #fff6f0;
  padding: 0px 10px 0px 10px;
}
.event-image {
  height: 200px;
  width: 216px;
}

.event-detail-container {
  height: 80px;
}
</style>

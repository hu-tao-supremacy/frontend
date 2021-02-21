<template>
  <div
    class="event-container flex flex-col rounded-lg shadow bg-cover relative"
  >
    <div
      class="event-date h-6 w-6 bg-primary-1 absolute rounded-lg font-heading text-lg text-center"
    >
      {{ eventDay }}<br />{{ eventMonth }}
    </div>
    <div class="event-image">
      <img :src="imgUrl" class="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div class="event-detail-container h-10 w-full flex rounded-b-lg bg-blue">
      <div class="w-1"></div>
      <div class="event-detail w-26 bg-white pl-2 pr-2 py-1 rounded-br-lg ">
        <div class="event-detail-list flex flex-col items-start">
          <div class="event-duration text-primary text-sm">{{ eventTime }}</div>
          <div class="event-name w-full font-heading text-xl truncate">
            {{ eventTitle }}
          </div>
          <div class="event-faculty w-full text-blue-10 text-sm truncate">
            {{ eventFaculty }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const eventTitle = "Chula Invest ruey mak";
    const imgUrl = "https://picsum.photos/300/600";
    const eventDay = "15";
    const eventMonth = "Feb";
    const eventTime = "10:00-18:00";
    const eventFaculty = "Faculty of Engineering dsadadsdsasdadasdssadads";

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
  padding: 0px 10px 0px 10px;
}
.evemt-detail {
  width: 200px;
}
.event-image {
  height: 200px;
  width: 216px;
}
</style>

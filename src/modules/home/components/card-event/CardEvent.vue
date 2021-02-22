<template>
  <div
    class="event-container flex flex-col rounded-lg shadow bg-cover relative"
  >
    <div
      class="event-date h-6 w-6 bg-primary-1 absolute rounded-lg font-heading text-lg text-center "
    >
      {{ eventDay }}<br />{{ eventMonth }}
    </div>
    <div class="event-image">
      <img :src="imgUrl" class="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div class="event-detail-container h-10 w-full flex rounded-b-lg bg-blue">
      <div class="w-1"></div>
      <div
        class="event-detail w-26 flex flex-col items-start bg-white px-2 py-1 rounded-br-lg "
      >
        <div class="event-duration text-primary">{{ eventTime }}</div>
        <div class="event-name w-full font-heading text-xl leading-6 truncate">
          {{ eventTitle }}
        </div>
        <div class="event-faculty w-full text-blue-10 truncate">
          {{ eventFaculty }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useCardEvent from "./useCardEvent";

export default defineComponent({
  setup() {
    const {
      imgUrl,
      eventTitle,
      eventDay,
      eventMonth,
      eventTime,
      eventFaculty
    } = useCardEvent();

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
.event-image {
  height: 200px;
  width: 216px;
}
</style>

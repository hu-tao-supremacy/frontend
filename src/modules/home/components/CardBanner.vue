<template>
  <div class="grid grid-cols-3 rounded-2xl h-40 event-container">
    <div class="col-span-2">
      <img :src="img" alt="" class="object-cover w-full h-40 rounded-l-2xl" />
    </div>
    <div class="col-span-1 flex flex-col justify-between items-center p-1.5">
      <section>
        <h3 class="text-2xl font-heading text-blue-dark mb-1">
          {{ eventTitle }}
        </h3>
        <div class="flex gap-1 mb-1">
          <base-tag v-for="tag in tags" :key="tag">{{ tag }}</base-tag>
        </div>
        <div class="text-xs font-body text-left mb-1 w-full event-description">
          {{ eventDescription }}
        </div>
        <div class="flex items-center font-body text-sm mb-1">
          <base-icon
            width="12px"
            height="12px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><CalendarIcon
          /></base-icon>
          {{ eventDate }}
        </div>
        <div class="flex items-center font-body text-sm mb-1">
          <base-icon
            width="12px"
            height="12px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><ClockIcon
          /></base-icon>
          {{ eventTime }}
        </div>
        <div class="flex items-center font-body text-sm mb-1">
          <base-icon
            width="12px"
            height="12px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><PinIcon
          /></base-icon>
          {{ eventLocation }}
        </div>
      </section>
      <base-button class="text-sm w-4/5 h-5">Get Tickets</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../../commons/UI/BaseButton.vue";
import BaseTag from "./BaseTag.vue";
import PinIcon from "../../../assets/MapPin.vue";
import ClockIcon from "../../../assets/Clock.vue";
import CalendarIcon from "../../../assets/Calendar.vue";

export default {
  components: {
    BaseButton,
    BaseTag,
    PinIcon,
    CalendarIcon,
    ClockIcon
  },
  setup() {
    const eventTitle = "Event Title";
    const tags = ["Tech", "Math", "Science"];
    const eventDescription =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.";
    const img = "https://picsum.photos/1000";
    const eventDate = "Sun, 14 Feb - 16 April";
    const eventTime = "10:00 - 18:00";
    const eventLocation = "Engineering Faculty, Chula";

    return {
      img,
      eventTitle,
      tags,
      eventDescription,
      eventDate,
      eventTime,
      eventLocation
    };
  }
};
</script>

<style scoped>
.event-container {
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
}

.event-description {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

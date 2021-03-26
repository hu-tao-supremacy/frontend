<template>
  <div class="grid grid-cols-3 h-40">
    <div class="col-span-2 min-h-full">
      <LazyImage
        :width="1000"
        :height="1000"
        alt="will change to api"
        :url="event.img"
        :placeholder="event.imgHash"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="col-span-1 flex flex-col justify-between items-center p-2">
      <section>
        <h3 class="text-2xl font-heading text-blue-10 mb-1">
          {{ event.title }}
        </h3>
        <div class="flex mb-2 items-center">
          <base-tag
            v-for="(tag, index) in event.tags"
            :key="tag"
            :class="changeClass(index)"
            >{{ tag }}</base-tag
          >
        </div>
        <div class="text-sm mb-1 w-full event-description">
          {{ event.description }}
        </div>
        <div class="flex items-center mb-1">
          <base-icon
            width="12px"
            height="12px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><CalendarIcon
          /></base-icon>
          {{ event.date }}
        </div>
        <div class="flex items-center mb-1">
          <base-icon
            width="12px"
            height="12px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><ClockIcon
          /></base-icon>
          {{ event.time }}
        </div>
        <div class="flex items-center mb-1">
          <base-icon
            width="12px"
            height="12px"
            iconColor="#FF855F"
            class="mr-1.5"
            ><PinIcon
          /></base-icon>
          {{ event.faculty }}
        </div>
      </section>
      <base-button class="w-4/5 h-5">Get Tickets</base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTag from "@/commons/UI/BaseTag.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import PinIcon from "@/assets/MapPin.vue";
import ClockIcon from "@/assets/Clock.vue";
import CalendarIcon from "@/assets/Calendar.vue";
import { Event } from "@/commons/Interfaces/index";

export default defineComponent({
  name: "CardBanner",
  components: {
    BaseButton,
    BaseTag,
    PinIcon,
    CalendarIcon,
    ClockIcon,
    LazyImage
  },
  props: {
    event: {
      type: Object as () => Event
    }
  },
  setup(props){
    function changeClass(index : number){
      return index === props.event!.tags.length - 1 ? '' : 'mr-1'
    }
    return{
      changeClass
    }
  }
});
</script>

<style scoped>
.event-description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

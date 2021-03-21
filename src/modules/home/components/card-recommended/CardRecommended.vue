<template>
  <div
    class="event-container h-30 w-full flex flex-col rounded-lg shadow bg-cover relative overflow-hidden"
  >
    <div
      class="event-date h-6 w-6 absolute rounded-lg font-heading text-lg text-center bg-primary-1"
    >
      {{ recommended.day }}<br />{{ recommended.month }}
    </div>
    <div class="event-image h-20">
      <LazyImage
        :width="299"
        :height="160"
        alt="will change to api"
        :url="recommended.img"
        :placeholder="recommended.imgHash"
        class="h-full w-full object-cover rounded-t-lg"
      />
    </div>
    <div class="event-detail-container h-10 w-full flex rounded-b-lg bg-blue">
      <div class="w-1"></div>
      <div
        class="event-detail w-full flex flex-grow flex-row justify-between items-center bg-white pl-2 py-1 pr-1 rounded-br-lg"
      >
        <div class="event-details-list w-28 flex flex-col">
          <div class="event-duration w-full text-primary">
            {{ recommended.time }}
          </div>
          <div
            class="event-name w-full font-heading text-lg leading-6 truncate"
          >
            {{ recommended.title }}
          </div>
          <div class="event-faculty w-full text-blue-10 text-sm mt-0.5 truncate">
            {{ recommended.faculty }}
          </div>
        </div>
        <base-button class="btn flex justify-center items-center ">
          <base-icon
            width="24px"
            height="24px"
            iconColor="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><ArrowRightIcon
          /></base-icon>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import ArrowRightIcon from "@/assets/ArrowRight.vue";
import { Event } from "@/commons/Interfaces/index";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";

export default defineComponent({
  components: {
    LazyImage,
    BaseButton,
    ArrowRightIcon
  },
  props: {
    recommended: {
      type: Object as () => Event
    }
  }
});
</script>

<style scoped>
.event-container {
  max-width: 299px;
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

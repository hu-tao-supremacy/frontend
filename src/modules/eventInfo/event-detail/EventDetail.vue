<template>
  <div
    class="flex flex-col rounded-2xl overflow-hidden py-2 px-3 bg-white shadow-sm"
  >
    <section class="mb-2">
      {{ eventDetail }}
    </section>
    <section class="text-blue-10 flex items-center">
      Share this event
      <base-circle-button class="ml-1 p-1"
        ><base-icon width="16" height="16"><ShareIcon /></base-icon
      ></base-circle-button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShareIcon from "@/assets/Share.vue";
import BaseCircleButton from "@/commons/UI/BaseCircleButton.vue";

export default defineComponent({
  name: "EventDetail",
  components: {
    ShareIcon,
    BaseCircleButton
  },
  props: {
    eventDetail: {
      type: String
    }
  }
});
</script>

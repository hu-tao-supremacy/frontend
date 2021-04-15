<template>
  <div class="w-full h-full flex flex-col py-8 px-22 items-center">
    <div class="relative flex flex-col xl:w-128 xl-content-height">
      <section class="flex flex-col w-60">
        <h1 class="font-heading text-4xl text-blue-10">All - in - one</h1>
        <h1 class="font-heading text-4xl text-blue-10">Event Solution</h1>
        <h2 class="font-heading text-4xl text-primary mb-2">For Organizers</h2>
        <p class="mb-4">
          Vivamus pretium ac mi quis hendrerit. Pellentesque quis enim lectus.
          Sed facilisis et felis vitae porta. Suspendisse egestas, eros vel
          scelerisque dictum, nibh est venenatis erat, at egestas dolor ipsum
          vel diam. Praesent in vestibulum mauris. Cras porta tincidunt ante,
          vel euismod urna blandit feugiat.
        </p>
        <base-button class="w-15 h-4.5">Create Team</base-button>
      </section>
      <base-icon
        :width="500"
        :height="500"
        :viewBox="'0 0 500 500'"
        class="text-transparent mt-4 xl:absolute xl:bottom-0 xl:right-0"
        ><MobileMarketingIcon
      /></base-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import MobileMarketingIcon from "@/assets/MobileMarketing.vue";

export default defineComponent({
  name: "GreetingPage",
  components: {
    BaseButton,
    MobileMarketingIcon
  }
});
</script>

<style scoped>
@media (min-width: 1280px) {
  .xl-content-height {
    height: 666px;
  }
}
</style>

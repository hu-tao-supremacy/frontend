<template>
  <div class="flex flex-col rounded-2xl overflow-hidden py-2 px-3 bg-white">
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
  setup() {
    const eventDetail = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero pellentesque, hendrerit eros vitae, malesuada nisi. Nam tempus dolor vitae mauris luctus aliquet. Sed et finibus erat. Fusce sit amet nisi laoreet purus suscipit luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent non gravida lectus, congue euismod sem. Proin vel leo quam. Integer vitae elit elit. Morbi non elit suscipit, posuere est et, hendrerit nulla. Cras ipsum massa, luctus et tellus ac, placerat pretium augue. Nunc eget tempor eros. Cras ac massa eu justo consectetur facilisis vitae eget eros. Mauris sed ultrices sem, nec commodo libero. Quisque gravida non ipsum vel egestas. Duis ultricies ullamcorper lacus vitae auctor.

Vivamus pretium ac mi quis hendrerit. Pellentesque quis enim lectus. Sed facilisis et felis vitae porta. Suspendisse egestas, eros vel scelerisque dictum, nibh est venenatis erat, at egestas dolor ipsum vel diam. Praesent in vestibulum mauris. Cras porta tincidunt ante, vel euismod urna blandit feugiat. Phasellus auctor sollicitudin leo, et dictum libero rutrum a. Nulla est neque, malesuada quis mattis vel, commodo sit amet justo. Donec a sapien elit. Curabitur et lacinia diam. Ut gravida faucibus magna. Ut ac odio diam.`;
    return { eventDetail };
  }
});
</script>

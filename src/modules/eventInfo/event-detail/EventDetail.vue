<template>
  <div
    class="flex flex-col rounded-2xl overflow-hidden py-2 px-3 bg-white shadow-sm"
  >
    <section class="mb-2">
      {{ eventDetail }}
    </section>
    <section class="text-blue-10 flex items-center">
      Share this event
      <a target="_blank" rel="noopener noreferrer" :href="shareUrl" class="ml-1"
        ><base-circle-button class="p-1"
          ><base-icon width="16" height="16"
            ><ShareIcon /></base-icon></base-circle-button
      ></a>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import ShareIcon from "@/assets/Share.vue";
import BaseCircleButton from "@/commons/UI/BaseCircleButton.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "EventDetail",
  components: {
    ShareIcon,
    BaseCircleButton
  },
  props: {
    eventDetail: {
      type: String
    },
    shareTitle: {
      type: String
    }
  },
  setup(props) {
    const route = useRoute();

    const shareUrl = computed(() => {
      const currentUrl = "https://www.onepass.app" + route.path;
      const shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${currentUrl}&title=${props.shareTitle}`;
      return shareUrl;
    });

    return { shareUrl };
  }
});
</script>

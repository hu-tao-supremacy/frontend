<template>
  <div class="flex flex-col">
    <section class="flex mb-4">
      <CardRecommendSkeleton :posterImg="posterImg" class="mr-10" />
      <CardEventSkeleton :posterImg="posterImg" />
    </section>
    <CardBannerSkeleton :coverImg="coverImg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardRecommendSkeleton from "./card-recommend-skeleton/CardRecommendSkeleton.vue";
import CardEventSkeleton from "./card-event-skeleton/CardEventSkeleton.vue";
import CardBannerSkeleton from "./card-banner-skeleton/CardBannerSkeleton.vue";

export default defineComponent({
  name: "FormPreviewCards",
  components: {
    CardRecommendSkeleton,
    CardEventSkeleton,
    CardBannerSkeleton
  },
  props: {
    coverImg: {
      type: String
    },
    posterImg: {
      type: String
    }
  }
});
</script>

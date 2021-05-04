<template>
  <div
    class="flex w-full min-container-height shadow-sm rounded-2xl overflow-hidden bg-white"
  >
    <section class="w-24 flex-shrink-0 min-h-full">
      <LazyImage
        :width="200"
        :height="200"
        alt="will change to api"
        :url="org.profilePictureUrl"
        :placeholder="org.profilePictureHash"
        class="object-cover w-full h-full"
      />
    </section>
    <section class="p-3 w-full relative">
      <div class="flex items-center">
        <h1 class="text-blue-10 text-4xl font-heading">
          {{ (!loading && org.abbreviation) || "" }}
        </h1>
        <base-icon
          v-if="org.isVerified && !loading"
          :width="20"
          :height="20"
          class="text-blue-10 ml-1"
          ><CheckCircleIcon
        /></base-icon>
      </div>
      <h3 class="font-heading text-xl mb-3">
        {{ (!loading && org.name) || "" }}
      </h3>
      <p>{{ (!loading && org.description) || "" }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import CheckCircleIcon from "@/assets/CheckCircle.vue";
import { GetOrgTeamItemQuery } from "@/apollo/types";

export default defineComponent({
  name: "OrgBanner",
  components: {
    LazyImage,
    CheckCircleIcon
  },
  props: {
    org: {
      type: Object as () => GetOrgTeamItemQuery,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    loading: function(val: boolean) {
      if (val) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (this as any).$Progress.start();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (this as any).$Progress.increase(50);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (this as any).$Progress.finish();
      }
    }
  }
});
</script>

<style scoped>
.min-container-height {
  min-height: 192px;
}
</style>

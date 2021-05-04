<template>
  <router-link :to="`/org-info/${orgs.id}`">
    <div
      class="card-org grid grid-cols-9 rounded-lg shadow-sm h-12 overflow-hidden"
    >
      <div class="col-span-4 min-h-full">
        <LazyImage
          :width="216"
          :height="96"
          alt="will change to api"
          :url="orgs.profilePictureUrl"
          :placeholder="orgs.profilePictureHash"
          class="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div class="col-span-5 flex flex-col px-1 py-0.5">
        <div class="font-heading mb-0.25" :class="orgShortNameTextSize">
          {{ orgs.abbreviation }}
        </div>
        <div class="text-xs w-full text-truncate text-truncate-4">
          {{ orgs.name }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import useCardOrganization from "./useCardOrganization";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import { Organization } from "@/apollo/types";
export default defineComponent({
  components: {
    LazyImage
  },
  name: "CardOrganization",
  props: {
    orgs: {
      type: Object as () => Organization
    }
  },
  setup(props) {
    const { orgs: organization } = toRefs(props);

    const { orgShortNameTextSize } = useCardOrganization(organization);

    return {
      orgShortNameTextSize
    };
  }
});
</script>

<style scoped>
.card-org {
  width: 216px;
}
</style>

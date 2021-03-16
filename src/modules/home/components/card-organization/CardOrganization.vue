<template>
  <div class="card-org grid grid-cols-9 rounded-lg shadow-sm h-12 overflow-hidden">
    <div class="col-span-4 min-h-full">
      <LazyImage
        :width="216"
        :height="96"
        alt="will change to api"
        :url="orgs.img"
        :placeholder="orgs.imgHash"
        class="w-full h-full object-cover rounded-l-lg"
      />
    </div>
    <div class="col-span-5 flex flex-col px-1 py-0.5">
      <div class="font-heading mb-0.25" :class="orgShortNameTextSize">
        {{ orgs.shortName }}
      </div>
      <div class="text-xs w-full org-description">{{ orgs.fullName }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCardOrganization from "./useCardOrganization";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import { Org } from "@/commons/Interfaces/index";

export default defineComponent({
  components: {
    LazyImage
  },
  name: "CardOrganization",
  props: {
    orgs: {
      required: true,
      type: Object as () => Org
    }
  },
  setup(props) {
    const {
      orgShortNameTextSize
    } = useCardOrganization(props.orgs.shortName);

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
.org-description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

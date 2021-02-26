<template>
  <div class="card-org grid grid-cols-9 rounded-lg shadow-sm h-12">
    <div class="col-span-4 min-h-full">
      <img
        :src="orgs.img"
        alt=""
        class="object-cover w-full h-full rounded-l-lg"
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
interface Org {
  img: string;
  shortName: string;
  fullName: string;
}
export default defineComponent({
  name: "CardOrganization",
  props: {
    orgs: {
      required: true,
      type: Object as () => Org
    }
  },
  setup() {
    const {
      imgUrl,
      orgShortName,
      orgFullName,
      orgShortNameTextSize
    } = useCardOrganization();

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

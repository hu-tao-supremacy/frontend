<template>
  <div class="grid grid-cols-9 rounded-lg shadow-sm h-12 w-28">
    <div class="col-span-4 min-h-full">
      <img
        :src="imgUrl"
        alt=""
        class="object-cover w-full h-full rounded-l-lg"
      />
    </div>
    <div class="col-span-5 flex flex-col px-1 py-0.5">
      <div class="font-heading mb-0.25" :class="orgShortNameTextSize">
        {{ orgShortName }}
      </div>
      <div class="text-xs w-full org-description">{{ orgFullName }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCardOrganization from "./useCardOrganization";

export default defineComponent({
  name: "CardOrganization",
  setup() {
    const {
      imgUrl,
      orgShortName,
      orgFullName,
      orgShortNameTextSize
    } = useCardOrganization();

    return {
      imgUrl,
      orgShortName,
      orgFullName,
      orgShortNameTextSize
    };
  }
});
</script>

<style scoped>
.org-description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

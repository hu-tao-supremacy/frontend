<template>
  <div
    class="flex w-full min-container-height shadow-sm rounded-2xl overflow-hidden bg-white"
  >
    <section class="w-24 flex-shrink-0 min-h-full">
      <LazyImage
        :width="200"
        :height="200"
        alt="will change to api"
        :url="org.img"
        :placeholder="org.imgHash"
        class="object-cover w-full h-full"
      />
    </section>
    <section class="p-3 w-full relative">
      <h1 class="text-blue-10 text-4xl font-heading">{{ org.shortName }}</h1>
      <h3 class="font-heading text-xl mb-3">{{ org.fullName }}</h3>
      <p>{{ org.description }}</p>
      <base-icon
        :width="20"
        :height="20"
        class="absolute top-3 right-3 cursor-pointer hover:text-primary"
        ><EditIcon
      /></base-icon>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import EditIcon from "@/assets/Edit.vue";
import { Org } from "@/commons/Interfaces";

export default defineComponent({
  name: "OrgBanner",
  components: {
    LazyImage,
    EditIcon
  },
  props: {
    org: {
      type: Object as () => Org,
      required: true
    }
  }
});
</script>

<style scoped>
.min-container-height {
  min-height: 192px;
}
</style>

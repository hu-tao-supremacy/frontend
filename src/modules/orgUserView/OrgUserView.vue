<template>
  <div class="flex flex-col justify-center items-center // px-4 w-full">
    <div class="content-max-width">
      <OrgCard :organization="organization" class="my-4" />
      <h1 class="font-heading text-4xl">
        Related events
      </h1>
      <div
        class="card grid gap-4 justify-center md:justify-start // mt-4 mb-8 w-full"
      >
        <CardEvent v-for="event in events" :events="event" :key="event.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgCard from "./org-card/OrgCard.vue";
import CardEvent from "././../home/components/card-event/CardEvent.vue";
import useOrgUserView from "./use-org-user-view";
import "@/index.css";

export default defineComponent({
  name: "OrgUserView",
  components: {
    OrgCard,
    CardEvent
  },
  setup() {
    const { organization, events } = useOrgUserView();
    return { organization, events };
  }
});
</script>

<style scoped>
.card {
  grid-template-columns: repeat(auto-fit, 216px);
}
</style>

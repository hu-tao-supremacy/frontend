<template>
  <div class="flex flex-col justify-center items-center // px-4 w-full">
    <div class="container">
      <OrgCard :organization="testData.organization" class="my-4" />
      <h1 class="font-heading text-4xl">
        Related events
      </h1>
      <div
        class="card grid gap-4 justify-center md:justify-start // my-4 w-full"
      >
        <CardEvent
          v-for="event in eventsListData"
          :events="event.event"
          :key="event.title"
          class="flex"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgCard from "./org-card/OrgCard.vue";
import CardEvent from "././../home/components/card-event/CardEvent.vue";
import { eventsListData, testData } from "./../test/testData";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "OrgUserView",
  components: {
    OrgCard,
    CardEvent
  },
  setup() {
    const route = useRoute();
    const organizationId = Number(route.params.id);

    //query from database

    return { testData, eventsListData };
  }
});
</script>

<style scoped>
.container {
  max-width: 960px;
}
.card {
  grid-template-columns: repeat(auto-fit, 216px);
}
</style>

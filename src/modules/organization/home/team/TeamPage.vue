<template>
  <div class="w-full h-full flex flex-col py-4 items-center">
    <div class="flex flex-col content-max-width w-full">
      <OrgBanner :loading="loading" :org="organization" class="mb-3" />
      <section class="flex justify-between mb-3">
        <BaseSearch
          v-model="searchValue"
          class="h-4"
          :inputClass="'w-31.5'"
          :placeholder="'Search'"
        />
        <router-link to="/org/team/create-event">
          <base-button class="px-1.5">Create an Event</base-button>
        </router-link>
      </section>
      <section v-if="!loading" class="flex flex-col space-y-2">
        <OrgEventListCard
          v-for="event in filteredEvents"
          :key="event.id"
          :event="event"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import OrgBanner from "./org-banner/OrgBanner.vue";
import OrgEventListCard from "./org-event-list-card/OrgEventListCard.vue";
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { useOrgTeamApi } from "./api";
import { useResult } from "@vue/apollo-composable";
import Fuse from "fuse.js";
import useOrganization from "../../useOrganization";

export default defineComponent({
  name: "TeamPage",
  components: {
    OrgBanner,
    OrgEventListCard,
    BaseButton,
    BaseSearch
  },
  setup() {
    const { currentOrganizationId } = useOrganization();
    const { result: orgTeamResult, loading } = useOrgTeamApi(
      currentOrganizationId
    );
    const organization = useResult(
      orgTeamResult,
      {},
      data => data.organization
    );
    const events = useResult(
      orgTeamResult,
      [],
      data => data.organization.events
    );
    const searchValue = ref("");

    const fuse = computed(() => {
      return new Fuse(events.value, { keys: ["name"] });
    });

    const filteredEvents = computed(() => {
      if (searchValue.value === "") return events.value;
      return fuse.value.search(searchValue.value);
    });

    return { organization, filteredEvents, searchValue, loading };
  }
});
</script>

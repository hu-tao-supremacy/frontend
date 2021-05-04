<template>
  <div class="bg-gray-1 flex flex-col p-4 justify-center items-center w-full">
    <MoreOrgs :heading="input" :orgs="orgs" class="content-max-width" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoreOrgs from "@/commons/components/more-organizations/MoreOrganizations.vue";
import { useAllOrganizations } from "./api";
import { useResult } from "@vue/apollo-composable";

export default defineComponent({
  name: "MoreOrganizations",
  components: {
    MoreOrgs
  },
  setup() {
    const input = "Organizations";
    const { result } = useAllOrganizations();
    const orgs = useResult(result, null, data => data.organizations);
    return {
      input,
      orgs
    };
  }
});
</script>

<style scoped></style>

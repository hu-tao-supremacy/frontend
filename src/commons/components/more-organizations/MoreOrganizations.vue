<template>
  <div class="flex flex-col w-full">
    <div class="text-4xl font-heading mb-4">{{ heading }}</div>
    <div class="card grid gap-4 w-full justify-center md:justify-start">
      <CardOrganization v-for="org in orgs" :key="org.id" :orgs="org" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CardOrganization from "@/modules/home/components/card-organization/CardOrganization.vue";
import { Organization } from "@/apollo/types";
export default defineComponent({
  name: "MoreOrgs",
  components: {
    CardOrganization
  },
  props: {
    orgs: {
      type: Array as PropType<Organization[]>
    },
    heading: {
      type: String
    }
  }
});
</script>

<style scoped>
.card {
  grid-template-columns: repeat(auto-fit, 216px);
}
</style>

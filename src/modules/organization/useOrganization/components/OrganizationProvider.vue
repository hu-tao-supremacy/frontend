<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { userOrganizationSymbol } from "../constant";
import useOrganizationHooks from "../useOrganizationHooks";

export default defineComponent({
  name: "OrganizationProvider",
  components: {},
  setup() {
    provide(userOrganizationSymbol, useOrganizationHooks());
  }
});
</script>

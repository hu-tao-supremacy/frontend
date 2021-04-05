<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { userSymbol } from "../constant";
import useUserHooks from "../useUser";

export default defineComponent({
  name: "AuthProvider",
  components: {},
  setup() {
    provide(userSymbol, useUserHooks());
  }
});
</script>

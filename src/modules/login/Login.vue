<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useLogin from "./useLogin";

export default defineComponent({
  name: "LoginPage",
  components: {},
  setup() {
    useLogin();
  }
});
</script>

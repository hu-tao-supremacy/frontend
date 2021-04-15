<template>
  <div
    class=" text-center text-gray-5 flex flex-col justify-center not-found-height"
  >
    <div>
      <span class="text-4xl">
        404
      </span>
      <br />
      <span class="text-2xl">
        Not Found
      </span>
    </div>
    <router-link to="/">
      <base-button class="mt-8 px-3 py-1">
        Return Home
      </base-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/commons/UI/BaseButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { BaseButton },
  name: "NotFound"
});
</script>

<style scoped>
.not-found-height {
  height: calc(100vh - 224px);
}
</style>

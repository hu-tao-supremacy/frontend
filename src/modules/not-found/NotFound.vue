<template>
  <div class="h-full text-center text-gray-5 py-30">
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

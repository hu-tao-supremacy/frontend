<template>
  <a target="_blank" rel="noopener noreferrer" :href="href">
    <section class="w-6 h-6 text-center rounded-full bg-white overflow-hidden">
      <img
        v-if="imgUrl"
        :src="imgUrl"
        alt="profileImage"
        class="h-full object-cover w-full"
      />
      <p v-else>{{ name[0] }}</p>
    </section></a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseGithubProfileCircle",
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    }
  }
});
</script>

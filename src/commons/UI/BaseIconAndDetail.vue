<template>
  <div class="flex items-center">
    <base-icon
      :width="iconWidth"
      :height="iconHeight"
      :viewBox="iconViewBox"
      class="flex-shrink-0"
      :class="[iconClass, iconColor]"
      ><slot></slot
    ></base-icon>
    <p :class="detailClass">{{ detail }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseIconAndDetail",
  props: {
    iconWidth: {
      type: [Number, String],
      default: 14
    },
    iconHeight: {
      type: [Number, String],
      default: 14
    },
    iconColor: {
      type: String,
      default: "text-primary"
    },
    iconViewBox: {
      type: String
    },
    detail: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      default: "mr-1.5"
    },
    detailClass: {
      type: String
    }
  }
});
</script>

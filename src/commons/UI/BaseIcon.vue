<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <g :stroke="iconColor" :fill="fillColor" stroke-width="2">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseIcon",
  props: {
    iconName: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    viewBox: { type: String, default: "0 0 24 24" },
    fillColor: {
      type: String,
      default: "none"
    }
  },
  setup(props) {
    const theme = () => {
      if (props.iconColor === "primary") {
        return "#FF855F";
      }
      return;
    };
  }
});
</script>

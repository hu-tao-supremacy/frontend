<template>
  <div
    class="bg-primary-3 rounded-full text-center flex flex-col align-center justify-center overflow-hidden"
    :class="[
      widthHeight,
      { 'border-primary border-2': hasBorder && user.profilePictureUrl }
    ]"
  >
    <img
      v-if="user.profilePictureUrl"
      :src="user.profilePictureUrl"
      alt="profileImage"
      class="h-full object-cover min-w-full"
    />
    <div
      class="font-bold font-heading text-primary"
      :class="nameInitialFontSize"
      v-else
    >
      {{ initial }}
    </div>
  </div>
</template>

<script lang="ts">
import { User } from "@/apollo/types";
import { defineComponent, toRefs } from "vue";
import useUserProfile from "./useUserProfile";

export default defineComponent({
  name: "UserProfile",
  props: {
    user: {
      type: Object as () => User,
      required: true
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    widthHeight: {
      type: String,
      default: "h-5 w-5"
    },
    nameInitialFontSize: {
      type: String,
      default: "text-lg"
    }
  },
  setup(props) {
    const { user } = toRefs(props);
    const { initial } = useUserProfile(user);
    return { initial };
  }
});
</script>

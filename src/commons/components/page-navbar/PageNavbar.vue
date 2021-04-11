<template>
  <div
    class="flex justify-between h-8 w-full px-8 py-2 items-center sticky top-0 bg-white z-40"
  >
    <section class="flex items-center">
      <router-link to="/">
        <base-icon
          width="160"
          height="40"
          viewBox="0 0 161 40"
          class="mr-6 text-transparent"
          ><OnePassLogo
        /></base-icon>
      </router-link>
      <BaseSearch class="mr-6 h-4" :placeholder="'Search...'" />
      <router-link
        to="/"
        class="font-heading text-primary hover:text-primary-7 text-lg mr-6 cursor-pointer"
      >
        Events
      </router-link>
      <router-link
        to="/test"
        class="font-heading text-primary hover:text-primary-7 text-lg cursor-pointer"
      >
        About One Pass
      </router-link>
    </section>
    <base-button class="sign-in-btn w-16" @click="logout" v-if="isLogIn"
      >Logout</base-button
    >
    <base-button class="sign-in-btn w-16" @click="login" v-if="!isLogIn"
      >Login / Signup</base-button
    >
    <section v-else class="flex items-center">
      <UserProfile :user="user" />
      <div class="text-lg font-heading max-w-20 truncate">{{ nameShown }}</div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import UserProfile from "@/commons/UI/user-profile/UserProfile.vue";
import OnePassLogo from "@/assets/OnePassLogoColor.vue";
import usePageNavbar from "./usePageNavbar";

export default defineComponent({
  name: "PageNavbar",
  components: {
    BaseButton,
    BaseSearch,
    OnePassLogo,
    UserProfile
  },
  setup() {
    const { isLogIn, imgUrl, nameShown, login, logout, user } = usePageNavbar();

    return { isLogIn, imgUrl, nameShown, login, logout, user };
  }
});
</script>

<style scoped>
.sign-in-btn {
  height: 30px;
}
</style>

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
      <div class="flex items-center mr-6">
        <input
          type="text"
          placeholder="input search text"
          class="search-input w-28 h-4 rounded-r-none rounded-l-lg px-1.5 border-t border-b border-l focus:border-r border-gray-3 focus:border-primary focus:outline-none"
        />
        <base-button
          class="rounded-l-none h-4 w-6 shadow-sm flex justify-center items-center"
          ><base-icon width="12.5px" height="12.5px"><SearchIcon /></base-icon
        ></base-button>
      </div>
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
import UserProfile from "@/commons/UI/user-profile/UserProfile.vue";
import SearchIcon from "@/assets/Search.vue";
import OnePassLogo from "@/assets/OnePassLogoColor.vue";
import usePageNavbar from "./usePageNavbar";

export default defineComponent({
  name: "PageNavbar",
  components: {
    BaseButton,
    SearchIcon,
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
.search-input:focus {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}

.sign-in-btn {
  height: 30px;
}
</style>

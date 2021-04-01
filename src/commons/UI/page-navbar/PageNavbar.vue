<template>
  <div
    class="flex justify-between h-8 w-full px-8 py-2 items-center sticky top-0 bg-white z-50"
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
    <base-button class="sign-in-btn w-20" @click="login" v-if="!isLogIn"
      >Login in with CU SSO</base-button
    >
    <section
      v-else
      class="flex items-center relative"
      v-click-outside="hideDropDown"
    >
      <div
        class="mr-3 h-5 w-5 border-2 border-primary rounded-full overflow-hidden flex-shrink-0"
      >
        <LazyImage
          :width="50"
          :height="50"
          alt="will change to api"
          :url="imgUrl"
          :placeholder="imgHash"
          class="object-cover w-full h-full"
        />
      </div>
      <div @click="toggleDropDown" class="flex items-center cursor-pointer">
        <div class="text-lg font-heading max-w-20 truncate mr-1.5">
          {{ nameShown }}
        </div>
        <base-icon v-show="!isDropDownShown" :height="14" :width="14">
          <ChevronDownIcon />
        </base-icon>
        <base-icon v-show="isDropDownShown" :height="14" :width="14">
          <ChevronUpIcon />
        </base-icon>
      </div>
      <NavbarDropDownOptions
        v-show="isDropDownShown"
        @select-navbar-option="hideDropDown"
        @logout="logout"
        class="w-25 absolute top-full right-0 mt-1.5"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import SearchIcon from "@/assets/Search.vue";
import OnePassLogo from "@/assets/OnePassLogoColor.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import ChevronDownIcon from "@/assets/ChevronDown.vue";
import ChevronUpIcon from "@/assets/ChevronUp.vue";
import NavbarDropDownOptions from "./NavbarDropDownOptions.vue";
import usePageNavbar from "./usePageNavbar";

export default defineComponent({
  name: "PageNavbar",
  components: {
    BaseButton,
    SearchIcon,
    LazyImage,
    OnePassLogo,
    ChevronDownIcon,
    ChevronUpIcon,
    NavbarDropDownOptions
  },
  setup() {
    const {
      isLogIn,
      imgUrl,
      imgHash,
      nameShown,
      isDropDownShown,
      login,
      toggleDropDown,
      hideDropDown,
      logout
    } = usePageNavbar();

    return {
      isLogIn,
      imgUrl,
      imgHash,
      nameShown,
      isDropDownShown,
      login,
      toggleDropDown,
      hideDropDown,
      logout
    };
  }
});
</script>

<style scoped>
.search-input {
  -webkit-appearance: none;
}
.search-input:focus {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}

.sign-in-btn {
  height: 30px;
}
</style>

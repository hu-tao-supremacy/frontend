<template>
  <div
    class="flex justify-between h-8 w-full px-8 py-2 items-center sticky top-0 bg-white z-40"
  >
    <section class="flex items-center">
      <router-link :to="homePage">
        <div class="flex items-center">
          <base-icon
            width="160"
            height="40"
            viewBox="0 0 161 40"
            class="text-transparent"
            :class="{ 'mr-1': isOrgView, 'mr-6': !isOrgView }"
            ><OnePassLogo
          /></base-icon>
          <h1 v-if="isOrgView" class="mt-1 text-blue-10 font-semibold">
            for Organizer
          </h1>
        </div>
      </router-link>
      <BaseSearch
        v-if="!isOrgView"
        class="mr-6 h-4"
        :placeholder="'Search...'"
        @search="searchEvent"
      />
    </section>
    <base-button class="w-20 h-3.75" @click="login" v-if="!isLogIn"
      >Login with CU SSO</base-button
    >
    <section
      v-else
      class="flex items-center relative"
      v-click-outside="hideDropDown"
    >
      <UserProfile class="mr-3" :user="user" />
      <div @click="toggleDropDown" class="flex items-center cursor-pointer">
        <div class="text-lg font-heading max-w-20 truncate mr-1.5">
          {{ nameShown }}
        </div>
        <base-transparent-button
          ><base-icon v-show="!isDropDownShown" :height="14" :width="14">
            <ChevronDownIcon /> </base-icon
        ></base-transparent-button>
        <base-transparent-button
          ><base-icon v-show="isDropDownShown" :height="14" :width="14">
            <ChevronUpIcon /> </base-icon
        ></base-transparent-button>
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
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import UserProfile from "@/commons/UI/user-profile/UserProfile.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import OnePassLogo from "@/assets/OnePassLogoColor.vue";
import ChevronDownIcon from "@/assets/ChevronDown.vue";
import ChevronUpIcon from "@/assets/ChevronUp.vue";
import NavbarDropDownOptions from "./NavbarDropDownOptions.vue";
import usePageNavbar from "./usePageNavbar";
import { login } from "@/commons/utils/auth";

export default defineComponent({
  name: "PageNavbar",
  components: {
    BaseButton,
    BaseSearch,
    UserProfile,
    BaseTransparentButton,
    OnePassLogo,
    ChevronDownIcon,
    ChevronUpIcon,
    NavbarDropDownOptions
  },
  props: {
    isOrgView: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {
      isLogIn,
      imgUrl,
      nameShown,
      isDropDownShown,
      user,
      homePage,
      toggleDropDown,
      hideDropDown,
      logout,
      searchEvent
    } = usePageNavbar(props.isOrgView);

    return {
      isLogIn,
      imgUrl,
      nameShown,
      isDropDownShown,
      user,
      homePage,
      login,
      toggleDropDown,
      hideDropDown,
      logout,
      searchEvent
    };
  }
});
</script>

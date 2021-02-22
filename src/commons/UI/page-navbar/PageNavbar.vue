<template>
  <div
    class="flex justify-between h-8 w-full px-8 py-2 items-center sticky top-0 bg-white z-50"
  >
    <section class="flex items-center">
      <img
        src="@/assets/one-pass-logo-color.png"
        alt=""
        class="w-20 h-5 mr-6"
      />
      <div class="flex items-center mr-6">
        <input
          type="text"
          placeholder="input search text"
          class="search-input w-28 h-4 rounded-r-none rounded-l-lg px-1.5 text-sm border-t border-b border-l focus:border-r border-gray-3 focus:border-primary focus:outline-none"
        />
        <base-button
          class="rounded-l-none h-4 w-6 shadow-sm flex justify-center items-center"
          ><base-icon width="12.5px" height="12.5px"><SearchIcon /></base-icon
        ></base-button>
      </div>
      <nav
        class="font-heading text-primary hover:text-primary-7 text-lg mr-6 cursor-pointer"
      >
        Events
      </nav>
      <nav
        class="font-heading text-primary hover:text-primary-7 text-lg cursor-pointer"
      >
        About One Pass
      </nav>
    </section>
    <base-button class="sign-in-btn w-16" @click="login" v-if="!isLogIn"
      >Login / Signup</base-button
    >
    <section v-else class="flex items-center">
      <div class="mr-3 h-5 w-5 border-2 border-primary rounded-full">
        <img
          :src="imgUrl"
          alt=""
          class="h-full object-cover w-full rounded-full"
        />
      </div>
      <div class="text-lg font-heading max-w-20 truncate">{{ nameShown }}</div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import SearchIcon from "@/assets/Search.vue";
import usePageNavbar from "./usePageNavbar";

export default defineComponent({
  name: "PageNavbar",
  components: {
    BaseButton,
    SearchIcon
  },
  setup() {
    const { isLogIn, login, imgUrl, nameShown } = usePageNavbar();

    return { isLogIn, login, imgUrl, nameShown };
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

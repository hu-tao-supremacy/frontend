<template>
  <div
    class="flex flex-col w-25 bg-white rounded-b-lg pt-0.5 pb-1 font-heading text-lg"
  >
    <section
      @click="selectOption"
      class="group flex items-center rounded-sm px-3 mb-0.5 cursor-pointer hover:text-white hover:bg-primary"
    >
      <base-icon
        :height="16"
        :width="16"
        class="mr-4 text-primary group-hover:text-white"
        ><UsersIcon
      /></base-icon>
      <h3>Organization</h3>
    </section>
    <span class="mx-2 border-t border-gray-3 mb-0.5"></span>
    <section
      @click="selectOption"
      class="group flex items-center rounded-sm px-3 mb-1 cursor-pointer hover:text-white hover:bg-primary"
    >
      <base-icon
        :height="16"
        :width="16"
        class="mr-4 text-primary group-hover:text-white"
        ><UserIcon
      /></base-icon>
      <h3>User Profile</h3>
    </section>
    <section
      @click="selectOption"
      class="group flex items-center rounded-sm px-3 mb-0.5 cursor-pointer hover:text-white hover:bg-primary"
    >
      <base-icon
        :height="16"
        :width="16"
        class="mr-4 text-primary group-hover:text-white"
        ><CreditCardIcon
      /></base-icon>
      <h3>One Wallet</h3>
    </section>
    <span class="mx-2 border-t border-gray-3 mb-0.5"></span>
    <section
      @click="selectOption"
      class="group flex items-center rounded-sm px-3 mb-1 cursor-pointer hover:text-white hover:bg-primary"
    >
      <base-icon
        :height="16"
        :width="16"
        class="mr-4 text-primary group-hover:text-white"
        ><SettingsIcon
      /></base-icon>
      <h3>Setting</h3>
    </section>
    <section
      @click="logout"
      class="group flex items-center rounded-sm px-3 cursor-pointer hover:text-white hover:bg-primary"
    >
      <base-icon
        :height="16"
        :width="16"
        class="mr-4 text-primary group-hover:text-white"
        ><LogOutIcon
      /></base-icon>
      <h3>Log Out</h3>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UsersIcon from "@/assets/Users.vue";
import UserIcon from "@/assets/User.vue";
import CreditCardIcon from "@/assets/CreditCard.vue";
import SettingsIcon from "@/assets/Settings.vue";
import LogOutIcon from "@/assets/LogOut.vue";
import { SELECT_NAVBAR_OPTION, LOGOUT } from "@/commons/constant";

export default defineComponent({
  name: "NavbarDropDownOptions",
  components: {
    UsersIcon,
    UserIcon,
    CreditCardIcon,
    SettingsIcon,
    LogOutIcon
  },
  emits: [SELECT_NAVBAR_OPTION, LOGOUT],
  setup(_, context) {
    function selectOption() {
      context.emit(SELECT_NAVBAR_OPTION);
    }

    function logout() {
      context.emit(LOGOUT);
    }

    return {
      selectOption,
      logout
    };
  }
});
</script>

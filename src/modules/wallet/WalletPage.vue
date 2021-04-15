<template>
  <div class="flex w-full justify-center items-center pt-4 pb-8 px-4">
    <Wallet class="content-max-width" :profile="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useUser from "../authentication";
import Wallet from "./wallet/Wallet.vue";

export default defineComponent({
  name: "WalletPage",
  components: {
    Wallet
  },
  setup() {
    const { user } = useUser();
    console.log(user.value);
    return { user };
  }
});
</script>

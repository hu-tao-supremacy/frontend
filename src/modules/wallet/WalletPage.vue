<template>
  <div class="flex w-full justify-center items-center pt-4 pb-8 px-4">
    <Wallet class="content-max-width" :profile="userWalletProfile" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useWalletPage from "./useWalletPage";
import Wallet from "./wallet/Wallet.vue";

export default defineComponent({
  name: "WalletPage",
  components: {
    Wallet
  },
  setup() {
    const { userWalletProfile } = useWalletPage();
    return { userWalletProfile };
  }
});
</script>

<template>
  <div
    class="content-min-height flex w-full bg-gray-1 justify-center items-center pt-4 pb-8 px-4"
  >
    <Wallet
      class="content-max-width"
      :profile="test.profile"
      :ongoingTickets="test.ongoingTickets"
      :historyTickets="test.historyTickets"
      :pendingTickets="test.pendingTickets"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Wallet from "./wallet/Wallet.vue";
import testData from "./walletPageData";

export default defineComponent({
  name: "WalletPage",
  components: {
    Wallet
  },
  setup() {
    const test = testData;

    return { test };
  }
});
</script>

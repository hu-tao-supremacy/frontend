<template>
  <base-modal @close="closeModal">
    <div class="flex flex-col">
      <section class="mb-2">
        <h1 class="font-heading text-3xl">Log in</h1>
        <p class="text-gray-5">Powered by Chula SSO</p>
      </section>
      <button @click="login">
        Login with Chula SSO
      </button>
      <base-button class="w-16 h-4 self-center">Continue</base-button>
    </div>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseModal from "@/commons/UI/BaseModal.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { CLOSE_MODAL } from "@/commons/constant";

export default defineComponent({
  name: "ModalLogIn",
  components: {
    BaseModal,
    BaseButton
  },
  emits: [CLOSE_MODAL],
  setup(_, context) {
    function closeModal() {
      context.emit(CLOSE_MODAL);
    }

    function login() {
      window.location.replace(
        `https://account.it.chula.ac.th/html/login.html?service=${window.location}`
      );
    }

    return { closeModal, login };
  }
});
</script>

<template>
  <base-modal @close="closeModal">
    <div class="flex flex-col">
      <section class="mb-2">
        <h1 class="font-heading text-3xl">Log in</h1>
        <p class="text-gray-5">Powered by Chula SSO</p>
      </section>
      <section class="mb-2">
        <h2>Student Email</h2>
        <BaseTextInput class="w-full h-3.5" type="email" />
      </section>
      <section class="mb-4">
        <h2>Password</h2>
        <BaseTextInput class="w-full h-3.5" type="password" />
      </section>
      <base-button class="w-16 h-4 self-center">Continue</base-button>
    </div>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseModal from "@/commons/UI/BaseModal.vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { CLOSE_MODAL } from "@/commons/constant";

export default defineComponent({
  name: "ModalLogIn",
  components: {
    BaseModal,
    BaseTextInput,
    BaseButton
  },
  emits: [CLOSE_MODAL],
  setup(_, context) {
    function closeModal() {
      context.emit(CLOSE_MODAL);
    }

    return { closeModal };
  }
});
</script>

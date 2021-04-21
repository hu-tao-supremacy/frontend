<template>
  <div class="flex w-full h-full py-4 justify-center">
    <section class="flex flex-col content-max-width-s w-full">
      <h1 class="font-heading text-4xl mb-3">Create Organization</h1>
      <CreateOrgForm @submit-form="showSuccessModal" />
    </section>
    <CreateOrgSuccessModal
      v-if="isSuccessModalShown"
      @close-modal="closeSuccessModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CreateOrgForm from "./create-org-form/CreateOrgForm.vue";
import CreateOrgSuccessModal from "./create-org-success-modal/CreateOrgSuccessModal.vue";

export default defineComponent({
  name: "CreateOrgPage",
  components: {
    CreateOrgForm,
    CreateOrgSuccessModal
  },
  setup() {
    const isSuccessModalShown = ref(false);

    function showSuccessModal() {
      isSuccessModalShown.value = true;
    }

    function closeSuccessModal() {
      isSuccessModalShown.value = false;
      //Perform redirect to some other page after create org
      console.log("To team page");
    }

    return { isSuccessModalShown, showSuccessModal, closeSuccessModal };
  }
});
</script>

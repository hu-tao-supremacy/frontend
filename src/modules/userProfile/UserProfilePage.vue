<template>
  <div class="flex justify-center pt-4 pb-6">
    <UserProfile @submit-form="showSuccessModal" class="content-max-width-s" />
    <UpdateUserSuccessModal
      v-if="isSuccessModalShown"
      @close-modal="hideSuccessModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UserProfile from "./user-profile/UserProfile.vue";
import UpdateUserSuccessModal from "./update-success-modal/UpdateUserSuccessModal.vue";

export default defineComponent({
  name: "UserProfilePage",
  components: { UserProfile, UpdateUserSuccessModal },
  setup() {
    const isSuccessModalShown = ref(false);

    function showSuccessModal() {
      isSuccessModalShown.value = true;
    }

    function hideSuccessModal() {
      isSuccessModalShown.value = false;
    }

    return { isSuccessModalShown, showSuccessModal, hideSuccessModal };
  }
});
</script>

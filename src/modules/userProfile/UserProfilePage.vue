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
import { useUpdateUserInfo } from "../signup/api";
import { UpdateUserInput } from "@/apollo/types";
import { useRouter } from "vue-router";
import useUser from "../authentication";

export default defineComponent({
  name: "UserProfilePage",
  components: { UserProfile, UpdateUserSuccessModal },
  setup() {
    const isSuccessModalShown = ref(false);
    const { updateUser, onUpdateUserDone } = useUpdateUserInfo();
    const { refetch } = useUser();
    const router = useRouter();

    function showSuccessModal(result: UpdateUserInput) {
      updateUser({ input: result });
    }

    onUpdateUserDone(() => {
      isSuccessModalShown.value = true;
    });

    function hideSuccessModal() {
      isSuccessModalShown.value = false;
      refetch();
      router.push("/wallet");
    }

    return { isSuccessModalShown, showSuccessModal, hideSuccessModal };
  }
});
</script>

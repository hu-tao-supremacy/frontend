<template>
  <base-modal maxModalWidth="570px" @close-modal="closeModal">
    <div class="flex flex-col">
      <section class="mb-2">
        <h1 class="font-heading text-3xl">Additional Information</h1>
        <p class="font-medium text-gray-5">
          We would like to know more about you!
        </p>
      </section>
      <form action="">
        <section class="mb-2">
          <h2 class="mb-1">Profile Picture</h2>
          <div class="flex items-center">
            <div
              class="w-8 h-8 rounded-full border-2 border-primary bg-primary-2 flex items-center justify-center mr-3 overflow-hidden"
            >
              <base-icon
                v-if="!fileLoaded"
                width="24"
                height="24"
                class="text-primary"
                ><ImageIcon
              /></base-icon>
              <img
                v-else
                :src="img"
                alt=""
                class="object-cover w-full h-full"
              />
            </div>
            <div>
              <base-button class="button-height px-1 mb-0.25"
                ><label for="fileLoader">Upload</label></base-button
              >
              <input
                id="fileLoader"
                type="file"
                class="hidden"
                accept="image/*"
                ref="fileInput"
                :onchange="previewFile"
              />
              <p class="text-gray-5 text-xs">(e.g. JPEG, .PNG or .GIF)</p>
            </div>
          </div>
        </section>
        <section class="mb-2">
          <h2 class="mb-0.25">Personal Email</h2>
          <BaseTextInput class="w-full h-3.5" />
        </section>
        <section class="mb-2">
          <h2 class="mb-0.25">Phone Number</h2>
          <BaseTextInput class="w-full h-3.5" />
        </section>
        <section class="flex space-between">
          <div class="w-9 mr-2">
            <h2 class="mb-0.25">Zip Code</h2>
            <BaseTextInput class="w-full h-3.5" />
          </div>
          <div class="w-21 mr-2">
            <h2 class="mb-0.25">City</h2>
            <BaseTextInput class="w-full h-3.5" />
          </div>
          <div class="w-21">
            <h2 class="mb-0.25">Province</h2>
            <BaseTextInput class="w-full h-3.5" />
          </div>
        </section>
        <section class="mb-4">
          <h2 class="mb-0.25">Address</h2>
          <BaseTextArea :rows="3" class="w-full resize-none" />
        </section>
        <base-button class="button-height w-20 self-center"
          >Sign up</base-button
        >
      </form>
    </div>
  </base-modal>
  <input type="file" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import BaseModal from "@/commons/UI/BaseModal.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseTextArea from "@/commons/UI/BaseTextArea.vue";
import ImageIcon from "@/assets/Image.vue";
import { uploadFile } from "@/commons/utils/uploadImage";

export default defineComponent({
  name: "ModalAdditionalInfo",
  components: {
    BaseModal,
    BaseButton,
    BaseTextInput,
    BaseTextArea,
    ImageIcon
  },
  emits: ["close-modal"],
  setup(_, context) {
    const img = ref<string | null>(null);
    const reader = new FileReader();

    async function previewFile(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target.files?.[0].type.match("image.*")) {
        const uploadedFile = await uploadFile(reader, target);
        img.value = uploadedFile;
      }
    }

    function closeModal() {
      context.emit("close-modal");
    }

    const fileLoaded = computed(function() {
      return img.value;
    });

    return {
      img,
      previewFile,
      fileLoaded,
      closeModal
    };
  }
});
</script>

<style scoped>
.button-height {
  height: 30px;
}
</style>

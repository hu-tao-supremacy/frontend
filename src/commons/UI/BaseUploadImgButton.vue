<template>
  <div>
    <base-button class="h-full z-10"
      ><label class="p-1 cursor-pointer" :for="name">Upload</label></base-button
    >
    <input
      :id="name"
      :name="name"
      type="file"
      class="hidden"
      accept="image/*"
      :onchange="uploadFile"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { parseImageFile } from "@/commons/utils/parseImage";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  name: "BaseUploadImgButton",
  components: {
    BaseButton
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "imgFileLoader"
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const uploadedImgFile = ref<Blob | null>(null);
    const uploadedImg = ref<string | null>(props.modelValue);
    const reader = new FileReader();

    async function uploadFile(event: Event) {
      event.preventDefault();
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file?.type.match("image.*")) {
        uploadedImgFile.value = file;
      }
    }

    watch(uploadedImgFile, async () => {
      if (uploadedImgFile.value !== null) {
        const uploadedFile = await parseImageFile(
          reader,
          uploadedImgFile.value
        );
        uploadedImg.value = uploadedFile;
      }
    });

    watch(uploadedImg, () => {
      context.emit(UPDATE_MODEL_VALUE, uploadedImg.value);
    });

    return { uploadFile };
  }
});
</script>

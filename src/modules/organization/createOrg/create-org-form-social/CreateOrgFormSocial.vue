<template>
  <section class="mb-6">
    <div class="flex items-center mb-2">
      <h1 class="font-heading text-xl mr-2">Social Media</h1>
      <base-icon :width="16" :height="16" class="mr-1"><InfoIcon /></base-icon>
      <p class="text-xs">Please fill in at least one</p>
    </div>
    <div class="flex mb-1">
      <BaseLabelAndTextInput
        v-model="facebook"
        inputName="facebook"
        label="Facebook Page"
        class="w-30 flex-shrink-0 mr-4"
      />
      <BaseLabelAndTextInput
        v-model="instagram"
        inputName="instagram"
        label="Instagram"
        class="w-30 flex-shrink-0"
      />
    </div>
    <div class="flex">
      <BaseLabelAndTextInput
        v-model="line"
        inputName="line"
        label="line Official Account"
        class="w-30 flex-shrink-0 mr-4"
      />
      <BaseLabelAndTextInput
        v-model="email"
        inputName="email"
        label="Organization email"
        :isError="!isValidEmail"
        errorText="Please input valid email with @"
        class="w-30 flex-shrink-0"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import InfoIcon from "@/assets/Info.vue";
import { OrgSocial } from "../interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import useCreateOrgFormSocial from "./useCreateOrgFormSocial";

export default defineComponent({
  name: "CreateOrgFormOrganizationDetail",
  components: {
    BaseLabelAndTextInput,
    InfoIcon
  },
  props: {
    modelValue: {
      type: Object as () => OrgSocial,
      required: true
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const { modelValue } = toRefs(props);

    const {
      facebook,
      instagram,
      line,
      email,
      isValidEmail
    } = useCreateOrgFormSocial(modelValue, context);

    return { facebook, instagram, line, email, isValidEmail };
  }
});
</script>

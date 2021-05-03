<template>
  <div class="w-full">
    <section class="flex mb-2 items-center">
      <h1 class="font-heading text-xl mr-4">Contact Person</h1>
      <button
        @click="toggleOwnerAsContactPerson"
        type="button"
        class="flex items-center justify-center w-2 h-2 rounded-sm overflow-hidden focus:outline-none mr-1"
        :class="{
          'bg-gray-3 hover:bg-green-1': !ownerIsContactPerson,
          'bg-green-1 text-green-6': ownerIsContactPerson
        }"
      >
        <base-icon v-show="ownerIsContactPerson" :width="16" :height="16"
          ><CheckIcon
        /></base-icon>
      </button>
      <p class="text-sm">I am the contact person</p>
    </section>
    <section class="flex mb-1">
      <BaseLabelAndTextInput
        v-model="contactName"
        inputName="contactName"
        label="Full name"
        :isRequired="true"
        :disabled="ownerIsContactPerson"
        class="w-30 mr-1 flex-shrink-0"
      />
      <BaseLabelAndTextInput
        v-model="contactEmail"
        inputName="contactEmail"
        label="Email"
        :isRequired="true"
        :isError="!isValidContactEmail"
        :disabled="ownerIsContactPerson"
        errorText="Please input valid email with @"
        class="w-full"
      />
    </section>
    <section class="flex">
      <BaseLabelAndTextInput
        v-model="contactPhone"
        inputName="contactPhone"
        label="Phone number"
        :isRequired="true"
        :isError="!isValidContactPhone"
        :disabled="ownerIsContactPerson && ownerHasPhoneNumber"
        errorText="Please input phone number without '-'"
        class="w-30 mr-1 flex-shrink-0"
      />
      <BaseLabelAndTextInput
        v-model="contactLINE"
        inputName="contactLINE"
        label="line ID"
        class="w-full"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import CheckIcon from "@/assets/Check.vue";
import { OrgContactPerson } from "../interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import { User } from "@/apollo/types";
import useCreateOrgFormContactPerson from "./useCreateOrgFormContactPerson";

export default defineComponent({
  name: "CreateOrgFormOrganizationDetail",
  components: {
    BaseLabelAndTextInput,
    CheckIcon
  },
  props: {
    modelValue: {
      type: Object as () => OrgContactPerson,
      required: true
    },
    orgOwner: {
      type: Object as () => User
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const { modelValue, orgOwner } = toRefs(props);

    const {
      contactName,
      contactEmail,
      contactPhone,
      contactLINE,
      ownerIsContactPerson,
      ownerHasPhoneNumber,
      isValidContactEmail,
      isValidContactPhone,
      toggleOwnerAsContactPerson
    } = useCreateOrgFormContactPerson(context, modelValue, orgOwner);

    return {
      contactName,
      contactEmail,
      contactPhone,
      contactLINE,
      ownerIsContactPerson,
      ownerHasPhoneNumber,
      isValidContactEmail,
      isValidContactPhone,
      toggleOwnerAsContactPerson
    };
  }
});
</script>

<template>
  <section class="flex mb-3">
    <BaseLabelAndTextInput
      v-model="abbreviation"
      inputName="abbreviation"
      label="Organization abbreviations"
      :isRequired="true"
      class="w-24 flex-shrink-0 mr-3"
    />
    <BaseLabelAndTextInput
      v-model="fullName"
      inputName="fullName"
      label="Organization full name"
      :isRequired="true"
      class="w-full"
    />
  </section>
  <section class="flex mb-3">
    <BaseLabelAndTextInput
      v-model="advisor"
      inputName="advisor"
      label="Organization advisor"
      :isRequired="true"
      class="w-40 flex-shrink-0 mr-3"
    />
    <div class="w-full">
      <label for="faculty" class="mb-0.25"
        >Associated faculty <span class="text-red-5">*</span></label
      >
      <SingleNameSelect
        id="faculty"
        name="faculty"
        v-model="faculty"
        :isSearchable="false"
        :optionNames="facultyList"
        :optionValues="facultyList"
        :placeholder="'——— Select faculty ———'"
        class="w-full h-4"
      />
    </div>
  </section>
  <section class="w-full mb-4">
    <BaseLabelAndTextInput
      v-model="description"
      inputName="description"
      label="Organization description"
      :isExpandableTextInput="true"
      :expandableTextInputMinHeight="'30px'"
      class="w-full"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import { OrgDetail } from "../interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import useCreateOrgFormOrganizationDetail from "./useCreateOrgFromOrganizationDetail";

export default defineComponent({
  name: "CreateOrgFormOrganizationDetail",
  components: {
    BaseLabelAndTextInput,
    SingleNameSelect
  },
  props: {
    modelValue: {
      type: Object as () => OrgDetail,
      required: true
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const { modelValue } = toRefs(props);
    const {
      abbreviation,
      fullName,
      advisor,
      faculty,
      facultyList,
      description,
      isValidOrgDetail
    } = useCreateOrgFormOrganizationDetail(modelValue, context);

    return {
      abbreviation,
      fullName,
      advisor,
      faculty,
      facultyList,
      description,
      isValidOrgDetail
    };
  }
});
</script>

<template>
  <div class="px-10 py-4 bg-white rounded-lg flex flex-col shadow-sm">
    <div class="flex">
      <div class="flex flex-col w-1/3 mr-4">
        <div>First Name</div>
        <BaseTextInput
          :modelValue="user && user.firstName"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3 mr-4">
        <div>Last Name</div>
        <BaseTextInput
          :modelValue="user && user.lastName"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3">
        <div>Gender</div>
        <BaseTextInput
          :modelValue="gender"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
    </div>
    <div class="flex mt-4">
      <div class="flex flex-col w-1/3 mr-4">
        <div>Student ID</div>
        <BaseTextInput
          :modelValue="user && user.chulaId"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3 mr-4">
        <div>Faculty</div>
        <BaseTextInput
          :modelValue="user && faculty"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3">
        <div>Year</div>
        <BaseTextInput
          :modelValue="user && String(user.academicYear)"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
    </div>
    <div class="flex justify-between mt-4">
      <div class="flex flex-col w-1/2 mr-4">
        <div>Phone</div>
        <BaseTextInput
          :modelValue="user && user.phoneNumber"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/2 ">
        <div>Email</div>
        <BaseTextInput
          :modelValue="user && user.email"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
    </div>
    <div class="flex mt-4">
      <div class="flex flex-col w-1/3 mr-4">
        <div>District</div>
        <BaseTextInput
          :modelValue="user && user.district"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3 mr-4">
        <div>Province</div>
        <BaseTextInput
          :modelValue="user && user.province"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3">
        <div>Zip code</div>
        <BaseTextInput
          :modelValue="user && user.zipCode"
          class="w-full h-4 disabled: bg-white text-gray-5"
          disabled
        />
      </div>
    </div>
    <div class="flex flex-col mt-4">
      <div>Address</div>
      <BaseTextArea
        :modelValue="user && user.address"
        class="w-full resize-none disabled: bg-white text-gray-5"
        disabled
        :rows="2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ComputedRef, defineComponent, toRefs, computed } from "vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseTextArea from "@/commons/UI/BaseTextArea.vue";
import { GetEventRegisterQuery } from "@/apollo/types";
import { GENDER_MAPPER } from "@/commons/constant";

export default defineComponent({
  name: "PersonalInfo",
  props: {
    user: {
      type: Object as () => ComputedRef<GetEventRegisterQuery["currentUser"]>
    },
    faculty: {
      type: String
    }
  },
  components: {
    BaseTextInput,
    BaseTextArea
  },
  setup(props) {
    const { user } = toRefs(props);
    const gender = computed(() => {
      return user?.value?.gender ? GENDER_MAPPER[user.value.gender] : "";
    });

    return { gender };
  }
});
</script>

<style scoped></style>

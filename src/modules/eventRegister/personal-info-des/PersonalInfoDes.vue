<template>
  <div class="px-10 py-4 bg-white rounded-lg flex flex-col shadow-sm">
    <div class="font-heading text-4xl">Personal Information</div>
    <div class="flex mt-4">
      <div class="flex flex-col w-1/3 mr-4">
        <div>First Name</div>
        <BaseTextInput
          :value="user.firstName"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3 mr-4">
        <div>Last Name</div>
        <BaseTextInput
          :value="user.lastName"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3">
        <div>Gender</div>
        <BaseTextInput
          :value="user.gender"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
    </div>
    <div class="flex mt-4">
      <div class="flex flex-col w-1/3 mr-4">
        <div>Student ID</div>
        <BaseTextInput
          :value="user.chulaId"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3 mr-4">
        <div>Faculty</div>
        <BaseTextInput
          :value="user.chulaId"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3">
        <div>Year</div>
        <BaseTextInput
          :value="user.academicYear"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
    </div>
    <div class="flex justify-between mt-4">
      <div class="flex flex-col w-1/2 mr-4">
        <div>Phone</div>
        <BaseTextInput
          :value="user.phoneNumber"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/2 ">
        <div>Email</div>
        <BaseTextInput
          :value="user.email"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
    </div>
    <div class="flex mt-4">
      <div class="flex flex-col w-1/3 mr-4">
        <div>District</div>
        <BaseTextInput
          :value="user.district"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3 mr-4">
        <div>Province</div>
        <BaseTextInput
          :value="user.province"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
      <div class="flex flex-col w-1/3">
        <div>Zip code</div>
        <BaseTextInput
          :value="user.zipCode"
          class="w-full h-4 disabled: bg-white text-primary-6"
          disabled
        />
      </div>
    </div>
    <div class="flex flex-col mt-4">
      <div>Address</div>
      <BaseTextArea
        :value="user.address"
        class="w-full resize-none disabled: bg-white text-primary-6"
        disabled
        :rows="2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ComputedRef, defineComponent } from "vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseTextArea from "@/commons/UI/BaseTextArea.vue";
import { User } from "@/apollo/types";

export default defineComponent({
  name: "PersonalInfoDes",
  props: {
    user: {
      type: Object as () => ComputedRef<User>,
      required: true
    }
  },
  components: {
    BaseTextInput,
    BaseTextArea
  }
});
</script>

<style scoped></style>

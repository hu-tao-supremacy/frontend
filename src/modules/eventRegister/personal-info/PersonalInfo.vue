<template>
  <div class="px-10 py-4 bg-white rounded-lg flex flex-col shadow-sm">
    <div class="flex">
      <div class="flex flex-col w-1/3 mr-4">
        <div>First Name</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
      <div class="flex flex-col w-1/3 mr-4">
        <div>Last Name</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
      <div class="flex flex-col w-1/3">
        <div>Gender</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
    </div>
    <div class="flex mt-4">
      <div class="flex flex-col w-1/3 mr-4">
        <div>Student ID</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
      <div class="flex flex-col w-1/3 mr-4">
        <div>Faculty</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
      <div class="flex flex-col w-1/3">
        <div>Year</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
    </div>
    <div class="flex justify-between mt-4">
      <div class="flex flex-col w-1/2 mr-4">
        <div>Phone</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
      <div class="flex flex-col w-1/2 ">
        <div>Email</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
    </div>
    <div class="flex mt-4">
      <div class="flex flex-col w-1/3 mr-4">
        <div>City</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
      <div class="flex flex-col w-1/3 mr-4">
        <div>Province</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
      <div class="flex flex-col w-1/3">
        <div>Zip code</div>
        <BaseTextInput class="w-full h-4" :disabled="true" />
      </div>
    </div>
    <div class="flex flex-col mt-4">
      <div>Address</div>
      <BaseTextArea class="w-full resize-none" :disabled="true" rows="2" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import BaseTextArea from "@/commons/UI/BaseTextArea.vue";

export default defineComponent({
  name: "PersonalInfo",
  components: {
    BaseTextInput,
    BaseTextArea
  }
});
</script>

<style>
.text-input:disabled {
  background: white;
}
</style>

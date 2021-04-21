<template>
  <div class="flex items-center py-0.5 w-full border-b border-gray-2">
    <UserProfile
      :user="user"
      :hasBorder="false"
      :widthHeight="'w-3 h-3'"
      nameInitialFontSize="text-xs"
      class="mr-2"
    />
    <section class="flex flex-col">
      <h1 class="font-semibold">{{ user.firstName }} {{ user.lastName }}</h1>
      <p class="text-xs">{{ user.email }}</p>
    </section>
    <button
      class="flex items-center justify-center w-3 h-3 text-green-6 shadow-xs rounded-full overflow-hidden border ml-auto mr-1 focus:outline-none"
      :class="{
        'border-gray-4 hover:border-green-6 focus:border-green-6 focus:bg-green-2': !isSelected,
        'border-green-6 bg-green-1 hover:border-yellow-6 hover:bg-yellow-1 hover:text-yellow-6 focus:border-red-5 focus:bg-red-1 focus:text-red-5': isSelected
      }"
    >
      <base-icon
        v-show="!isSelected"
        @click="selectMember"
        :width="16"
        :height="16"
        ><PlusIcon
      /></base-icon>
      <base-icon
        v-show="isSelected"
        @click="selectMember"
        :width="16"
        :height="16"
        ><CheckIcon
      /></base-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserProfile from "@/commons/UI/user-profile/UserProfile.vue";
import PlusIcon from "@/assets/Plus.vue";
import CheckIcon from "@/assets/Check.vue";
import { User } from "@/apollo/types";
import { SELECT_MEMBER } from "@/commons/constant";

export default defineComponent({
  name: "AddMemberSelection",
  components: {
    UserProfile,
    PlusIcon,
    CheckIcon
  },
  props: {
    user: {
      type: Object as () => User
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  emits: [SELECT_MEMBER],
  setup(_, context) {
    function selectMember() {
      context.emit(SELECT_MEMBER);
    }

    return { selectMember };
  }
});
</script>

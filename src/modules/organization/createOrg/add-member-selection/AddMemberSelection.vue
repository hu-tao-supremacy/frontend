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
    <section
      class="flex items-center justify-center w-3 h-3 shadow-xs rounded-full overflow-hidden border ml-auto cursor-pointer"
      :class="{
        'border-gray-4': !isSelected,
        'border-green-6 bg-green-1': isSelected
      }"
    >
      <base-icon
        v-show="!isSelected"
        @click="selectMember"
        :width="16"
        :height="16"
        class="text-green-6"
        ><PlusIcon
      /></base-icon>
      <base-icon
        v-show="isSelected"
        @click="selectMember"
        :width="16"
        :height="16"
        class="text-green-6"
        ><CheckIcon
      /></base-icon>
    </section>
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
  setup(props, context) {
    function selectMember() {
      context.emit(SELECT_MEMBER, props.user);
    }

    return { selectMember };
  }
});
</script>

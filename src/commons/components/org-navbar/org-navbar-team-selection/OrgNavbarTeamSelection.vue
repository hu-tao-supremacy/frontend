<template>
  <div
    v-click-outside="collapseDropDown"
    class="flex flex-col rounded-lg overflow-hidden max-h-full select-none"
    :class="{
      'w-6': !isExpand,
      'w-28': isExpand,
      'bg-white': isSelected,
      'cursor-pointer': !isSelected
    }"
  >
    <section
      class="flex items-center w-full rounded-lg shadow-sm h-6 overflow-hidden"
    >
      <div
        v-if="organization.profilePictureUrl"
        class="w-6 h-full rounded-lg overflow-hidden flex-shrink-0"
        :class="{ 'border-2 border-white': isSelected }"
      >
        <LazyImage
          :width="50"
          :height="50"
          alt="will change to api"
          :url="organization.profilePictureUrl"
          :placeholder="organization.profilePictureHash"
          class="object-cover w-full h-full"
        />
      </div>
      <div
        v-else
        class="flex justify-center items-center w-6 h-full rounded-lg bg-primary-3 flex-shrink-0 mr-1"
        :class="{ 'border-2 border-white': isSelected }"
      >
        <h1
          class="text-lg max-w-full font-heading font-bold text-primary truncate"
        >
          {{ orgInitial }}
        </h1>
      </div>
      <div
        v-show="isExpand"
        @click="toggleDropDown(isSelected)"
        class="flex w-full justify-between cursor-pointer ml-1"
      >
        <h2 class="w-full truncate" :class="{ 'text-white': !isSelected }">
          {{ organization.name }}
        </h2>
        <base-icon
          v-show="!isDropdown"
          :width="24"
          :height="24"
          class="flex-shrink-0 mr-1.5"
          ><ChevronDownIcon
        /></base-icon>
        <base-icon
          v-show="isDropdown"
          :width="24"
          :height="24"
          class="flex-shrink-0 mr-1.5"
          ><ChevronUpIcon
        /></base-icon>
      </div>
    </section>
    <section
      v-show="isDropdown && isExpand"
      class="flex flex-col h-11 pt-2 pb-1"
    >
      <base-icon-and-detail
        :detail="'Member'"
        :iconWidth="16"
        :iconHeight="16"
        :iconColor="'group-hover:text-white'"
        :iconClass="'mr-3'"
        :detailClass="'group-hover:text-white'"
        class="group px-2 h-4 w-full rounded-lg border-2 border-white hover:bg-blue-11 cursor-pointer"
        ><UsersIcon
      /></base-icon-and-detail>
      <base-icon-and-detail
        :detail="'Organization setting'"
        :iconWidth="16"
        :iconHeight="16"
        :iconColor="'group-hover:text-white'"
        :iconClass="'mr-3'"
        :detailClass="'group-hover:text-white'"
        class="group px-2 h-4 w-full rounded-lg border-2 border-white hover:bg-blue-11 cursor-pointer"
        ><SettingsIcon
      /></base-icon-and-detail>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIconAndDetail from "@/commons/UI/BaseIconAndDetail.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import ChevronDownIcon from "@/assets/ChevronDown.vue";
import ChevronUpIcon from "@/assets/ChevronUp.vue";
import UsersIcon from "@/assets/Users.vue";
import SettingsIcon from "@/assets/Settings.vue";
import { Organization } from "@/apollo/types";
import useOrgNavbarTeamSelection from "./useOrgNavbarTeamSelection";

export default defineComponent({
  name: "OrgNavbarTeamSelection",
  components: {
    BaseIconAndDetail,
    LazyImage,
    ChevronDownIcon,
    ChevronUpIcon,
    UsersIcon,
    SettingsIcon
  },
  props: {
    isExpand: {
      type: Boolean,
      required: true,
      default: false
    },
    organization: {
      type: Object as () => Organization,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  setup(props) {
    const {
      isDropdown,
      collapseDropDown,
      toggleDropDown,
      toMemberPage,
      toOrgSetting,
      orgInitial
    } = useOrgNavbarTeamSelection(props.organization.name);

    return {
      isDropdown,
      collapseDropDown,
      toggleDropDown,
      toMemberPage,
      toOrgSetting,
      orgInitial
    };
  }
});
</script>

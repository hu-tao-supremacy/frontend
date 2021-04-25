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
      @click="toggleDropDown()"
      class="flex items-center w-full rounded-lg shadow-sm h-6 overflow-hidden"
      :class="{ 'cursor-pointer': isExpand }"
    >
      <OrgProfile
        :name="organization.name"
        :profileImg="organization.profilePictureUrl"
        :profileImgHash="organization.profilePictureHash"
        :isSelected="isSelected"
      />
      <div
        v-show="isExpand"
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
        @click="toMemberPage"
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
        @click="toOrgSetting"
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
import { defineComponent, toRefs } from "vue";
import BaseIconAndDetail from "@/commons/UI/BaseIconAndDetail.vue";
import OrgProfile from "../org-profile/OrgProfile.vue";
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
    OrgProfile,
    ChevronDownIcon,
    ChevronUpIcon,
    UsersIcon,
    SettingsIcon
  },
  props: {
    isExpand: {
      type: Boolean,
      required: true
    },
    organization: {
      type: Object as () => Organization,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const { isExpand, isSelected } = toRefs(props);

    const {
      isDropdown,
      collapseDropDown,
      toggleDropDown,
      toMemberPage,
      toOrgSetting
    } = useOrgNavbarTeamSelection(isExpand, isSelected);

    return {
      isDropdown,
      collapseDropDown,
      toggleDropDown,
      toMemberPage,
      toOrgSetting
    };
  }
});
</script>

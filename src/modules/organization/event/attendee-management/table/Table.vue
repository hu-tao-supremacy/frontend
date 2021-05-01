<template>
  <div class="flex justify-between my-2">
    <div class="flex space-x-3">
      <BaseSearch class="h-4" :placeholder="'Search'" @search="handleSearch" />
      <BaseButton
        class="flex justify-center items-center // h-4 px-2 space-x-1 flex-shrink-0"
      >
        <div>Approved all</div>
        <base-icon class="w-3 h-3">
          <check-circle-icon />
        </base-icon>
      </BaseButton>
    </div>

    <SingleNameSelect
      :optionNames="sortBy"
      :optionValues="sortByVal"
      v-model="sortOption"
    />
  </div>
  <div class="p-3 bg-white // rounded-2xl // w-full">
    <table class="table-auto // w-full">
      <thead>
        <tr>
          <th
            v-for="headerKey in headerKeys"
            :key="headerKey"
            class="pb-1 // border-b-2 border-blue-11 // text-left"
          >
            {{ header[headerKey] }}
          </th>
          <th class="pb-1 // border-b-2 border-blue-11 // text-right">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in filteredData" :key="index">
          <td
            v-for="(header, index) in headerKeys"
            class="h-8 // border-b border-gray-4 "
            :key="index"
          >
            <div class="pr-1">
              <div v-if="header === 'name'" class="flex items-center space-x-4">
                <UserProfile
                  :user="data.user"
                  class="select-none flex-shrink-0"
                />
                <div>{{ `${data.user.firstName} ${data.user.lastName}` }}</div>
              </div>
              <div v-if="header === 'status'">
                <Status :data="data.status" />
              </div>
              <div v-else>{{ data.user[header] }}</div>
            </div>
          </td>
          <td class="h-8 border-b border-gray-4">
            <div class="flex justify-end space-x-3 pl-1">
              <div v-if="data.status === 'PENDING'" class="flex space-x-2">
                <GrayButton
                  class="flex justify-center items-center flex-shrink-0 // h-4 px-1 space-x-1 // bg-gray-3 text-gray-6"
                  @click="rejectRequest(data.user.id)"
                >
                  <base-icon class="w-3 h-3">
                    <check-circle-icon />
                  </base-icon>
                  <div>Reject</div>
                </GrayButton>
                <BaseButton
                  class="flex justify-center items-center // h-4 px-1 space-x-1 flex-shrink-0"
                  @click="approveRequest(data.user.id)"
                >
                  <base-icon class="w-3 h-3">
                    <CheckIcon />
                  </base-icon>
                  <div>Approve</div>
                </BaseButton>
              </div>
              <base-transparent-button>
                <base-icon>
                  <MoreVerticalIcon />
                </base-icon>
              </base-transparent-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-if="filteredData.length === 0" class="p-2 text-center">
      No Data
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import "@/index.css";
import UserProfile from "@/commons/UI/user-profile/UserProfile.vue";
import MoreVerticalIcon from "@/assets/MoreVertical.vue";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import Status from "./components/TableStatus.vue";
import GrayButton from "./components/GrayButton.vue";
import CheckCircleIcon from "@/assets/CheckCircle.vue";
import CheckIcon from "@/assets/Check.vue";

import { DataProps } from "./types";
import useTable from "./use-table";

export default defineComponent({
  name: "Table",
  components: {
    BaseSearch,
    SingleNameSelect,
    MoreVerticalIcon,
    BaseIcon,
    UserProfile,
    BaseTransparentButton,
    BaseButton,
    CheckCircleIcon,
    Status,
    CheckIcon,
    GrayButton
  },
  props: {
    data: {
      type: Object as PropType<DataProps[]>
    }
  },
  setup(props) {
    const { data } = toRefs(props);
    const {
      sortOption,
      handleSearch,
      header,
      filteredData,
      sortBy,
      sortByVal,
      headerKeys,
      approveRequest,
      rejectRequest
    } = useTable(data);

    return {
      headerKeys,
      filteredData,
      handleSearch,
      sortBy,
      sortByVal,
      header,
      sortOption,
      approveRequest,
      rejectRequest
    };
  }
});
</script>

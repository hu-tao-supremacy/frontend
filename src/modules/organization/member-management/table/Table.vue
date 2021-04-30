<template>
  <div class="flex justify-between my-2">
    <BaseSearch class="h-4" :placeholder="'Search'" @search="handleSearch" />
    <SingleNameSelect
      :optionNames="sortBy"
      :optionValues="sortByVal"
      v-model="sortOption"
    />
  </div>
  <div className="p-3 bg-white // rounded-2xl // w-full">
    <table className="table-auto // w-full">
      <thead>
        <tr>
          <th
            v-for="headerKey in headerKeys"
            :key="headerKey"
            class="pb-1 // border-b-2 border-blue-11 // text-left"
          >
            {{ header[headerKey] }}
          </th>
          <th className="pb-1 // border-b-2 border-blue-11 // text-right">
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
            <div v-if="header === 'name'" class="flex items-center space-x-4">
              <UserProfile :user="data" class="select-none" />
              <div>{{ `${data.firstName} ${data.lastName}` }}</div>
            </div>
            <div v-else>{{ data[header] }}</div>
          </td>
          <td className="h-8 border-b border-gray-4">
            <div className="flex justify-end">
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
    <h2 v-if="filteredData.length === 0" className="p-2 text-center">
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
import { User } from "@/apollo/types";
import useTable from "./use-table";

export default defineComponent({
  name: "Table",
  components: {
    BaseSearch,
    SingleNameSelect,
    MoreVerticalIcon,
    BaseIcon,
    UserProfile,
    BaseTransparentButton
  },
  props: {
    data: {
      type: Object as PropType<User[]>
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
      headerKeys
    } = useTable(data);

    return {
      headerKeys,
      filteredData,
      handleSearch,
      sortBy,
      sortByVal,
      header,
      sortOption
    };
  }
});
</script>
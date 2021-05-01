<template>
  <div class="flex justify-between my-2">
    <BaseSearch class="h-4" :placeholder="'Search'" @search="handleSearch" />
    <SingleNameSelect
      :optionNames="sortingName"
      :optionValues="sortingVal"
      v-model="sortingOption"
    />
  </div>
  <div className="p-3 bg-white // rounded-2xl // w-full">
    <table className="table-auto // w-full">
      <thead>
        <tr>
          <th
            v-for="[, value] in Object.entries(header)"
            :key="value"
            class="pb-1 // border-b-2 border-blue-11 // text-left"
          >
            {{ value }}
          </th>
          <th class="pb-1 // border-b-2 border-blue-11 // text-right">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in filteredData" :key="index">
          <td
            v-for="[key] in Object.entries(header)"
            class="h-8 // border-b border-gray-4 "
            :key="key"
          >
            <div class="pr-1">
              <div v-if="key === 'name'" class="flex items-center space-x-4">
                <UserProfile :user="data" class="select-none flex-shrink-0" />
                <div>{{ `${data.firstName} ${data.lastName}` }}</div>
              </div>
              <div v-else>{{ data[key] }}</div>
            </div>
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
      type: Array as PropType<User[]>
    }
  },
  setup(props) {
    const { data } = toRefs(props);
    const {
      sortingOption,
      handleSearch,
      header,
      filteredData,
      sortingName,
      sortingVal
    } = useTable(data);

    return {
      filteredData,
      handleSearch,
      sortingName,
      sortingVal,
      header,
      sortingOption
    };
  }
});
</script>

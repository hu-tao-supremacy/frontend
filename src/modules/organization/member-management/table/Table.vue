<template>
  <h1 class="font-heading text-4xl">{{ title }}</h1>
  <div class="flex justify-between py-2">
    <BaseSearch class="h-4" :placeholder="'Search'" @search="handleSearch" />
    <SingleNameSelect
      :optionNames="sortBy"
      :optionValues="sortByVal"
      placeholder="Descending alphabets"
      @update:modelValue="handleSelectSort"
    />
  </div>
  <div className="p-3 bg-white // rounded-2xl w-full // font-medium">
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
          <th
            v-if="editCol"
            className="pb-1 // border-b-2 border-blue-11 // text-right"
          >
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
              <div class="w-6 h-6 // bg-gray-3 rounded-full overflow-hidden ">
                <img :src="data.profilePictureUrl ?? '//:0'" alt="" />
              </div>
              <div>{{ `${data.firstName} ${data.lastName}` }}</div>
            </div>
            <div v-else>{{ data[header] }}</div>
          </td>
          <td v-if="editCol" className="h-8 border-b border-gray-4">
            <div className="flex justify-end">
              <base-icon class="cursor-pointer">
                <MoreVerticalIcon />
              </base-icon>
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
import { defineComponent, computed, PropType, ref, reactive } from "vue";
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import "@/index.css";
import MoreVerticalIcon from "@/assets/MoreVertical.vue";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

export default defineComponent({
  name: "Table",
  components: {
    BaseSearch,
    SingleNameSelect,
    MoreVerticalIcon,
    BaseIcon
  },
  props: {
    editCol: {
      type: Boolean,
      default: false
    },
    data: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Object as PropType<Record<string, any>[]>
    },
    title: {
      type: String
    },
    header: {
      type: Object as PropType<Record<string, string | null>>,
      default: []
    }
  },
  setup(props) {
    console.log(props.data);
    const searchValue = ref("");
    const headerRef = reactive(props.header);
    const sortOption = ref("descending");
    const handleSearch = (value: string) => {
      searchValue.value = value;
    };

    const handleSelectSort = (value: string) => {
      sortOption.value = value;
    };

    const headerKeys = Object.keys(headerRef).filter(val => {
      if (headerRef[val] === null) {
        return false;
      }
      return true;
    });

    const filteredData = computed(() => {
      const temp = props.data?.filter(row => {
        let searchRow = "";
        if (searchValue.value.includes("@")) {
          searchRow = `${row.email}`;
        } else {
          searchRow = `${row.firstName} ${row.lastName}`;
        }
        return searchRow
          .toLowerCase()
          .includes(searchValue.value.toLowerCase());
      });

      if (temp) {
        switch (sortOption.value) {
          case "ascend":
            temp.sort().reverse();
            break;
          case "pending":
            break;
          case "approved":
            break;
          default:
            temp.sort();
            break;
        }
        return temp;
      } else {
        return [];
      }
    });

    const sortBy = [
      "Descending alphabets",
      "Ascending alphabets",
      "Status: Pending",
      "Status: Approved"
    ];
    const sortByVal = ["descend", "ascend", "pending", "approved"];

    return {
      headerKeys,
      filteredData,
      handleSearch,
      sortBy,
      sortByVal,
      handleSelectSort
    };
  }
});
</script>

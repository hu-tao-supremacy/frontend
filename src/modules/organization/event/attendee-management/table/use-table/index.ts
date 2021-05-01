import {
  ReviewJoinRequestInput,
  UserEventStatus
} from "./../../../../../../apollo/types";
import { useReviewRequest } from "./../../api";
import { DataProps } from "./../types";
import { ref, computed, Ref } from "vue";
import Fuse from "fuse.js";
import { useRoute } from "vue-router";

const useTable = (data?: Ref<DataProps[] | undefined>) => {
  const searchValue = ref("");
  const sortOption = ref("descending");
  const handleSearch = (value: string) => {
    sortOption.value = "default";
    searchValue.value = value;
  };
  const sortBy = ["Descending alphabets", "Ascending alphabets"];
  const sortByVal = ["descend", "ascend"];
  const header: Record<string, string> = {
    name: "Name",
    email: "Email",
    phoneNumber: "Phone",
    status: "Status"
  };
  const headerKeys = computed(() => {
    return Object.keys(header);
  });
  const filteredData = computed(() => {
    if (!data?.value) return [];

    const fuse = new Fuse(data.value, {
      keys: ["user.firstName", "user.email", "user.phone"]
    });

    const temp =
      searchValue.value === "" ? data.value : fuse.search(searchValue.value);

    if (temp) {
      switch (sortOption.value) {
        case "descend":
          return temp.sort((a, b) =>
            b.user.firstName.localeCompare(a.user.firstName)
          );
        case "ascend":
          return temp.sort((a, b) =>
            a.user.firstName.localeCompare(b.user.firstName)
          );
        default:
          return temp;
      }
    }
    return [];
  });

  const { reviewRequest } = useReviewRequest();
  const route = useRoute();
  const eventId = Number(route.params.id);

  const approveRequest = (userId: number) => {
    const input: ReviewJoinRequestInput = {
      userId,
      eventId,
      status: UserEventStatus.Approved
    };
    reviewRequest({ input });
  };

  const rejectRequest = (userId: number) => {
    const input: ReviewJoinRequestInput = {
      userId,
      eventId,
      status: UserEventStatus.Rejected
    };
    reviewRequest({ input });
  };

  return {
    sortOption,
    handleSearch,
    header,
    filteredData,
    sortBy,
    sortByVal,
    headerKeys,
    approveRequest,
    rejectRequest
  };
};

export default useTable;

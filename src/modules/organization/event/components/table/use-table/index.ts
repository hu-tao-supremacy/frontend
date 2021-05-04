import { sortAscending, sortDescending } from "@/commons/utils/sort";
import { SortOption } from "./../types";
import { ReviewJoinRequestInput, UserEventStatus } from "@/apollo/types";
import { useReviewRequest } from "../../../use-org-event/api";
import { DataProps } from "../types";
import { ref, computed, Ref } from "vue";
import Fuse from "fuse.js";
import { useRoute } from "vue-router";
import useOrgEvent from "../../../use-org-event";

const useTable = (data?: Ref<DataProps[] | undefined>) => {
  const searchValue = ref("");
  const sortingOption = ref(SortOption.Default);
  const handleSearch = (value: string) => {
    sortingOption.value = SortOption.Default;
    searchValue.value = value;
  };
  const sortingName = ["Descending alphabets", "Ascending alphabets"];
  const sortingVal = [SortOption.Descending, SortOption.Ascending];
  const { refetch: refetchOrgEvent } = useOrgEvent();

  const header: Record<string, string> = {
    name: "Name",
    email: "Email",
    phoneNumber: "Phone",
    status: "Status"
  };

  const fuse = computed(() => {
    if (!data?.value) return;

    return new Fuse(data.value, {
      keys: ["user.firstName", "user.email", "user.phone"]
    });
  });

  const sort = (data: DataProps[]) => {
    switch (sortingOption.value) {
      case SortOption.Descending:
        return data.sort((a, b) =>
          sortDescending(a.user.firstName, b.user.firstName)
        );
      case SortOption.Ascending:
        return data.sort((a, b) =>
          sortAscending(a.user.firstName, b.user.firstName)
        );
      default:
        return data;
    }
  };

  const filteredData = computed(() => {
    if (!data?.value || !fuse.value) return [];

    const searchedData =
      searchValue.value === ""
        ? data.value
        : fuse.value.search(searchValue.value);

    return sort(searchedData);
  });

  const { reviewRequest, onReviewRequestDone } = useReviewRequest();
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

  const approveAllRequest = () => {
    if (!data) return;

    const pendingAttendees = data.value?.filter(attendee =>
      attendee.status === UserEventStatus.Pending ? true : false
    );

    pendingAttendees?.forEach(attendee => {
      const input: ReviewJoinRequestInput = {
        userId: attendee.user.id,
        eventId,
        status: UserEventStatus.Approved
      };
      reviewRequest({ input });
    });
  };

  const rejectRequest = (userId: number) => {
    const input: ReviewJoinRequestInput = {
      userId,
      eventId,
      status: UserEventStatus.Rejected
    };
    reviewRequest({ input });
  };

  onReviewRequestDone(() => {
    refetchOrgEvent();
  });

  return {
    handleSearch,
    header,
    filteredData,
    sortingOption,
    sortingName,
    sortingVal,
    approveRequest,
    rejectRequest,
    approveAllRequest
  };
};

export default useTable;

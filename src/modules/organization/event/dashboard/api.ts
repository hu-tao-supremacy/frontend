import {
  CheckInMutation,
  ExportDataQuery,
  MutationCheckInArgs
} from "@/apollo/types";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { Ref } from "vue";

export const checkInOrg = () => {
  const {
    mutate: checkIn,
    onDone: onCheckInDone,
    onError: onCheckInError
  } = useMutation<CheckInMutation, MutationCheckInArgs>(gql`
    mutation checkIn($input: CheckInInput!) {
      checkIn(input: $input) {
        id
        status
        user {
          id
          firstName
          lastName
        }
      }
    }
  `);
  return { checkIn, onCheckInDone, onCheckInError };
};

export const useExportData = (enabled: Ref<boolean>, eventId: number) => {
  const { onResult: onDataExport, onError: onDataExportError } = useQuery<
    ExportDataQuery
  >(
    gql`
      query exportData($id: Int!) {
        event(id: $id) {
          id
          attendees {
            id
            rating
            ticket
            status
            user {
              id
              firstName
              lastName
              gender
              chulaId
              phoneNumber
              email
              district
              province
              zipCode
              address
            }
            answers {
              id
              questionId
              value
              question {
                id
                title
              }
            }
          }
        }
      }
    `,
    () => ({ id: eventId }),
    () => ({ enabled: enabled.value, fetchPolicy: "no-cache" })
  );
  return { onDataExport, onDataExportError };
};

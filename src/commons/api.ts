import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {
  GetEventAttendanceQuery,
  GetEventAttendanceQueryVariables
} from "@/apollo/types";

export const useEventAttendance = (
  variables: GetEventAttendanceQueryVariables
) =>
  useQuery<GetEventAttendanceQuery>(
    gql`
      query getEventAttendance($id: Int!) {
        event(id: $id) {
          id
          attendance {
            id
          }
        }
      }
    `,
    variables
  );

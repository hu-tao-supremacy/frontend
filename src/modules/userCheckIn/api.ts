import {
  GetEventUserCheckinQuery,
  GetEventUserCheckinQueryVariables
} from "@/apollo/types";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
export const useEventUserCheckIn = (
  variables: GetEventUserCheckinQueryVariables
) => {
  return useQuery<GetEventUserCheckinQuery>(
    gql`
      query getEventUserCheckin($id: Int!) {
        event(id: $id) {
          id
          name
          tags {
            id
            name
          }
          posterImageUrl
          posterImageHash
          location {
            id
            name
          }
          durations {
            id
            start
            finish
          }
          attendance {
            id
            ticket
          }
        }
      }
    `,
    variables
  );
};

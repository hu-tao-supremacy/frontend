import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {
  GetEventAttendeeQuery,
  GetEventAttendeeQueryVariables
} from "@/apollo/types";

export const useAttendeeManagementApi = (
  variables: GetEventAttendeeQueryVariables
) =>
  useQuery<GetEventAttendeeQuery>(
    gql`
      query getEventAttendee($id: Int!) {
        event(id: $id) {
          attendees {
            user {
              id
              firstName
              lastName
              profilePictureUrl
              email
              phoneNumber
            }
            status
          }
          coverImageUrl
          coverImageHash
        }
      }
    `,
    variables
  );

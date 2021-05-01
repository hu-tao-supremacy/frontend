import {
  ReviewJoinRequestMutation,
  MutationReviewJoinRequestArgs,
  GetEventAttendeeQuery,
  GetEventAttendeeQueryVariables
} from "@/apollo/types";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useOrgEventApi = (variables: GetEventAttendeeQueryVariables) =>
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
            answers {
              id
            }
          }
          coverImageUrl
          coverImageHash
        }
      }
    `,
    variables
  );

export const useReviewRequest = () => {
  const { mutate: reviewRequest } = useMutation<
    ReviewJoinRequestMutation,
    MutationReviewJoinRequestArgs
  >(gql`
    mutation reviewJoinRequest($input: ReviewJoinRequestInput!) {
      reviewJoinRequest(input: $input) {
        userId
      }
    }
  `);
  return { reviewRequest };
};

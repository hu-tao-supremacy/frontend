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
          id
          name
          posterImageUrl
          posterImageHash
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
            ticket
            answers {
              id
            }
          }
          coverImageUrl
          coverImageHash
          questionGroups(type: POST_EVENT) {
            id
          }
        }
      }
    `,
    variables,
    { fetchPolicy: "no-cache" }
  );

export const useReviewRequest = () => {
  const { mutate: reviewRequest, onDone: onReviewRequestDone } = useMutation<
    ReviewJoinRequestMutation,
    MutationReviewJoinRequestArgs
  >(gql`
    mutation reviewJoinRequest($input: ReviewJoinRequestInput!) {
      reviewJoinRequest(input: $input) {
        userId
      }
    }
  `);
  return { reviewRequest, onReviewRequestDone };
};

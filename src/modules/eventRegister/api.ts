import {
  CreateJoinRequestInput,
  GetEventRegisterQuery,
  GetEventRegisterQueryVariables,
  MutationCreateJoinRequestArgs
} from "@/apollo/types";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useEventRegisterApi = (
  variables: GetEventRegisterQueryVariables
) =>
  useQuery<GetEventRegisterQuery>(
    gql`
      query getEventRegister($id: Int!) {
        event(id: $id) {
          id
          coverImageUrl
          coverImageHash
          name
          tags {
            id
            name
          }
          durations {
            id
            start
            finish
          }
          location {
            id
            name
          }
          posterImageUrl
          posterImageHash
          questionGroups(type: PRE_EVENT) {
            eventId
            questions {
              id
              isOptional
              seq
              title
            }
          }
          attendance {
            id
          }
        }
        currentUser {
          id
          firstName
          lastName
          gender
          chulaId
          academicYear
          phoneNumber
          email
          district
          province
          zipCode
          address
        }
      }
    `,
    variables
  );

export const updateAnswer = () => {
  const { mutate: addAnswer } = useMutation<
    CreateJoinRequestInput,
    MutationCreateJoinRequestArgs
  >(gql`
    mutation createJoinRequest($input: CreateJoinRequestInput!) {
      createJoinRequest(input: $input)
    }
  `);
  return { addAnswer };
};

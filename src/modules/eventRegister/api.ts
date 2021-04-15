import {
  CreateJoinRequestInput,
  GetQuestionsByEventIdQuery,
  GetQuestionsByEventIdQueryVariables,
  MutationCreateJoinRequestArgs
} from "@/apollo/types";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useQuestions = (variables: GetQuestionsByEventIdQueryVariables) =>
  useQuery<GetQuestionsByEventIdQuery>(
    gql`
      query getQuestionsByEventId($id: Int!) {
        event(id: $id) {
          questionGroups(type: PRE_EVENT) {
            eventId
            questions {
              id
              seq
              title
            }
          }
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

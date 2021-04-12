import {
  CreateJoinRequestInput,
  GetQuestionsByEventIdQuery,
  MutationCreateJoinRequestArgs
} from "@/apollo/types";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useQuestions = () =>
  useQuery<GetQuestionsByEventIdQuery>(gql`
    query getQuestionsByEventId {
      event(id: 1) {
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
  `);

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

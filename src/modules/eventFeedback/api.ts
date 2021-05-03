import {
  GetQuestionGroupsQuery,
  GetQuestionGroupsQueryVariables,
  MutationSubmitFeedbackArgs,
  SubmitFeedbackMutation
} from "@/apollo/types";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useEvents = (variables: GetQuestionGroupsQueryVariables) =>
  useQuery<GetQuestionGroupsQuery>(
    gql`
      query getQuestionGroups($id: Int!) {
        event(id: $id) {
          name
          questionGroups(type: POST_EVENT) {
            id
            seq
            title
            questions {
              id
              seq
              title
              isOptional
              answerType
            }
          }
        }
      }
    `,
    variables
  );

export const useSubmitEventFeedback = () => {
  const { mutate: submitFeedback, onDone: onSubmitFeedbackDone } = useMutation<
    SubmitFeedbackMutation,
    MutationSubmitFeedbackArgs
  >(gql`
    mutation submitFeedback($input: SubmitFeedbackInput!) {
      submitFeedback(input: $input) {
        id
      }
    }
  `);
  return { submitFeedback, onSubmitFeedbackDone };
};

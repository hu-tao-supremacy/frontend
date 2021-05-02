import {
  GetQuestionGroupsQuery,
  GetQuestionGroupsQueryVariables
} from "@/apollo/types";
import { useQuery } from "@vue/apollo-composable";
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

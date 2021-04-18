import { GetQuestionGroupsQuery } from "@/apollo/types";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useEvents = () =>
  useQuery<GetQuestionGroupsQuery>(gql`
    query getQuestionGroups {
      event(id: 1) {
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
  `);

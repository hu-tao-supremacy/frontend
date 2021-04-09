import { Query } from "@/apollo/types";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useQuestions = () =>
  useQuery<Query>(gql`
    query getQuestionsByEventId {
      event(id: 1) {
        questionGroups(type: PRE_EVENT) {
          questions {
            id
            seq
            title
          }
        }
      }
    }
  `);

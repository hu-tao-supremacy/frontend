import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { GetAllTagsQuery } from "@/apollo/types";

export const useEventInfoFormApi = () =>
  useQuery<GetAllTagsQuery>(gql`
    query getAllTags {
      tags {
        id
        name
      }
    }
  `);

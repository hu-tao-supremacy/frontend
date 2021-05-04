import {
  GetSearchedItemsQuery,
  GetSearchedItemsQueryVariables
} from "@/apollo/types";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { Ref } from "vue";
import { LocationQuery } from "vue-router";

export const useSearchedItems = (query: Ref<string>) =>
  useQuery<GetSearchedItemsQuery>(
    gql`
      query getSearchedItems($keyword: String!) {
        searchEvent(keyword: $keyword) {
          id
          description
          name
          coverImageUrl
          coverImageHash
          posterImageUrl
          posterImageHash
          durations {
            id
            start
            finish
          }
          location {
            id
            name
          }
          tags {
            id
            name
          }
        }
      }
    `,
    () => ({
      keyword: query.value
    })
  );

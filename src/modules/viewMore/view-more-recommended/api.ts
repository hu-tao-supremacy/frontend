import { GetRecommendedItemsQuery } from "@/apollo/types";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useRecommendedItems = () =>
  useQuery<GetRecommendedItemsQuery>(gql`
    query getRecommendedItems {
      recommendedEvents(n: 20) {
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
  `);

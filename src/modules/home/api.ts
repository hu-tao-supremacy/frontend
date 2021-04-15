import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { GetFeaturedEventsQuery } from "@/apollo/types";

export const useFeaturedEvents = () =>
  useQuery<GetFeaturedEventsQuery>(gql`
    query getFeaturedEvents {
      featuredEvents {
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
          name
        }
        tags {
          id
          name
        }
      }
    }
  `);

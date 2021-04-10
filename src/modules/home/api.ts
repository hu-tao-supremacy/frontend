import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { GetUpcomingEventsQuery } from "@/apollo/types";

export const useUpcomingEvents = () =>
  useQuery<GetUpcomingEventsQuery>(gql`
    query getUpcomingEvents {
      upcomingEvents {
        description
        name
        location {
          name
        }
        profileImageUrl
        profileImageHash
        tags {
          name
        }
      }
    }
  `);

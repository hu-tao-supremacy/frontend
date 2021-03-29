import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { Event } from '@/apollo/types'

export const useUpcomingEvents = () => useQuery<Event[]>(gql`
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

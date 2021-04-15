import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {
  GetUpcomingEventsQuery,
  GetFeaturedOrganizationsHomeQuery
} from "@/apollo/types";

export const useUpcomingEvents = () =>
  useQuery<GetUpcomingEventsQuery>(gql`
    query getUpcomingEvents {
      upcomingEvents {
        description
        name
        location {
          name
        }
        tags {
          name
        }
      }
    }
  `);

export const useFeaturedOrganizations = () =>
  useQuery<GetFeaturedOrganizationsHomeQuery>(gql`
    query getFeaturedOrganizationsHome {
      featuredOrganizations {
        id
        abbreviation
        name
        profilePictureUrl
        profilePictureHash
      }
    }
  `);

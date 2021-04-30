import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { GetHomeItemQuery, GetRecommendedEventsQuery } from "@/apollo/types";
import { Ref } from "vue";

export const useHomeApi = () =>
  useQuery<GetHomeItemQuery>(gql`
    query getHomeItem {
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
          id
          name
        }
        tags {
          id
          name
        }
      }
      upcomingEvents {
        id
        description
        name
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
      }
      featuredOrganizations(n: 4) {
        id
        abbreviation
        name
        profilePictureUrl
        profilePictureHash
      }
    }
  `);

export const useRecommendationEvent = (enabled: Ref<boolean>) =>
  useQuery<GetRecommendedEventsQuery>(
    gql`
      query getRecommendedEvents {
        recommendedEvents {
          id
          description
          name
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
        }
      }
    `,
    null,
    () => ({
      enabled: enabled.value
    })
  );

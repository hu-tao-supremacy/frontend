import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { GetHomeItemQuery, GetRecommendedEventsQuery } from "@/apollo/types";
import { Ref } from "vue";

export const useHomeApi = () =>
  useQuery<GetHomeItemQuery>(gql`
    query getHomeItem {
      featuredEvents(n: 4) {
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
      upcomingEvents(n: 4) {
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
      onlineEvents(n: 4) {
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
      onSiteEvents(n: 4) {
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
        recommendedEvents(n: 3) {
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

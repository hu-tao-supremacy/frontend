import { useQuery } from "@vue/apollo-composable";
import { GetOrgTeamItemQuery } from "@/apollo/types";
import gql from "graphql-tag";
import { Ref } from "vue";

//Change later to be dynamic id
export const useOrgTeamApi = (id: Ref<number>) =>
  useQuery<GetOrgTeamItemQuery>(
    gql`
      query getOrgTeamItem($input: Int!) {
        organization(id: $input) {
          id
          name
          abbreviation
          description
          profilePictureUrl
          profilePictureHash
          isVerified
          events {
            id
            name
            posterImageUrl
            posterImageHash
            durations {
              start
              finish
            }
            registrationDueDate
            location {
              name
            }
            attendeeCount
            attendeeLimit
            attendees {
              id
            }
          }
        }
      }
    `,
    () => ({ input: id.value })
  );

import { GetEventByIdQuery, GetEventByIdQueryVariables } from "@/apollo/types";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useEventById = (variables: GetEventByIdQueryVariables) =>
  useQuery<GetEventByIdQuery>(
    gql`
      query getEventByID($id: Int!) {
        event(id: $id) {
          id
          name
          description
          posterImageUrl
          posterImageHash
          coverImageUrl
          coverImageHash
          registrationDueDate
          location {
            id
            name
          }
          organization {
            id
            isVerified
            name
            abbreviation
            description
            email
            facebookPage
            profilePictureUrl
            profilePictureHash
            lineOfficialAccount
            instagram
          }
          durations {
            id
            start
            finish
          }
          tags {
            id
            name
          }
        }
      }
    `,
    variables
  );

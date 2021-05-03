import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { GetUserWalletQuery } from "@/apollo/types";

export const useWalletApi = () =>
  useQuery<GetUserWalletQuery>(gql`
    query getUserWallet {
      currentUser {
        id
        profilePictureUrl
        firstName
        lastName
        email
        history {
          id
          name
          durations {
            id
            start
            finish
          }
          posterImageUrl
          posterImageHash
          organization {
            id
            name
            abbreviation
            profilePictureUrl
            profilePictureHash
          }
          location {
            id
            name
          }
          tags {
            id
            name
          }
          attendance {
            id
            ticket
            status
            rating
          }
        }
      }
    }
  `);

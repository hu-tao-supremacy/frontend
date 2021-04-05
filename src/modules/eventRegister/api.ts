import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { Event } from "@/apollo/types";

export const usePersonalInfo = () =>
  useQuery(gql`
    query getCurrentUser {
      currentUser {
        firstName
        lastName
        gender
        chulaId
        email
        address
      }
    }
  `);
export default usePersonalInfo;

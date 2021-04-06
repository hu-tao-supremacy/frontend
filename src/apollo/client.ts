import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AUTH_KEY } from "@/modules/home/components/signup/constant";
import { setContext } from "apollo-link-context";
import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({
  uri: "https://api.onepass.app/graphql"
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${window.localStorage.getItem(AUTH_KEY)}`
    }
  };
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: authLink.concat(uploadLink as any),
  cache
});

export default apolloClient;

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AUTH_KEY } from "@/modules/home/components/signup/constant";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
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
  link: authLink.concat(httpLink),
  cache
});

export default apolloClient;

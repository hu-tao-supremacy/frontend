import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AUTH_KEY } from "@/modules/home/components/signup/constant";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://api.onepass.app/graphql",
  headers: { authorization: `Bearer ${window.localStorage.getItem(AUTH_KEY)}` }
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

export default apolloClient;

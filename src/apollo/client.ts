import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AUTH_KEY } from "@/modules/home/components/signup/constant";

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://graph.onepass.app",
  headers: { authorization: `Bearer ${window.localStorage.getItem(AUTH_KEY)}` }
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

export default apolloClient;

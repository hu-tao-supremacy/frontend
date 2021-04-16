import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AUTH_KEY } from "@/modules/signup/constant";
import { setContext } from "apollo-link-context";
import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({
  uri: "https://graph.onepass.app"
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  link: authLink.concat(uploadLink as any),
  cache
});

export default apolloClient;

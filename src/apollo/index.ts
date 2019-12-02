import ApolloClient from "apollo-client";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-boost";

// @ts-ignore
import typeDefs from "./local.graphql";
import resolvers from "./resolvers";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const cache = new InMemoryCache();

cache.writeData({
  data: {
    tasks: [],
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs,
// @ts-ignore
  resolvers,
});

export default client;

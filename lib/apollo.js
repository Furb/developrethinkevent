import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://rethinkoffice.wpsecta.dk/graphql",
  cache: new InMemoryCache(),
});

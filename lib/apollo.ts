import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { GRAPHQL_API } from "@/utils/constant";

function apolloClient(ssrToken?: string) {
  const httpLink = new HttpLink({
    uri: `${GRAPHQL_API.url}/graphql`,
    headers: {
      Authorization: ssrToken ? `Bearer ${ssrToken}` : "",
    },
  });

  const wsLink = process.browser
    ? new WebSocketLink({
        uri: `${GRAPHQL_API.wss}/graphql` as string,
        options: {
          reconnect: true,
        },
      })
    : null;

  const link = wsLink
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query);

          return (
            def.kind === "OperationDefinition" &&
            def.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return client;
}

export default apolloClient;

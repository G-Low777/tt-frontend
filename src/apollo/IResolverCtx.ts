import { InMemoryCache, defaultDataIdFromObject, NormalizedCacheObject } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

export interface IResolverCtx {
  cache: InMemoryCache;
  client: ApolloClient<NormalizedCacheObject>;
  getCacheKey: typeof defaultDataIdFromObject;
}

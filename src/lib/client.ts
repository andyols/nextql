import { GraphQLClient } from "graphql-request"
import { QueryClient } from "react-query"

const url = "https://nextql-server.vercel.app/api/graphql"

export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 5 * 1000 // 5 seconds
      }
    }
  })

export const getRequestClient = () => new GraphQLClient(url, {})

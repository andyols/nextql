import { GraphQLClient } from "graphql-request"
import { QueryClient } from "react-query"

const url = process.env.NEXT_PUBLIC_API_ENDPOINT

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

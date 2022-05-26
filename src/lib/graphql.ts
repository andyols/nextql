import { GraphQLClient } from "graphql-request"
import { QueryClient } from "react-query"

const url = "https://graphqlpokemon.favware.tech/"

export const createQueryClient = () => new QueryClient()
export const createRequestClient = () => new GraphQLClient(url)

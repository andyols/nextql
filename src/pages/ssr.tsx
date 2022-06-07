import { Layout } from "components/layout"
import {
  PokemonEnum,
  PokemonQueryVariables,
  usePokemonQuery
} from "graphql/generated"
import { getQueryClient, getRequestClient } from "lib/client"
import type { GetServerSideProps, NextPage } from "next"
import { dehydrate } from "react-query"

const variables: PokemonQueryVariables = { pokemon: PokemonEnum["Dragonite"] }

const HomeSSR: NextPage = () => {
  const { data } = usePokemonQuery(getRequestClient(), variables)

  return (
    <Layout>
      <p className="w-1/2 font-mono">{JSON.stringify(data?.getPokemon)}</p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = getQueryClient()

  await client.prefetchQuery(
    usePokemonQuery.getKey(variables),
    usePokemonQuery.fetcher(getRequestClient(), variables)
  )

  return {
    props: {
      dehydratedState: dehydrate(client)
    }
  }
}

export default HomeSSR

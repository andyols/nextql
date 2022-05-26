import { PokemonEnum, usePokemonQuery } from "graphql/generated"
import { getQueryClient, getRequestClient } from "lib/client"
import type { GetServerSideProps, NextPage } from "next"
import { dehydrate } from "react-query"

const variables = { pokemon: PokemonEnum["Pikachu"] }

const Home: NextPage = () => {
  const { data, isLoading } = usePokemonQuery(getRequestClient(), variables)
  return (
    <div>
      <h2>ssr</h2>
      <p>{isLoading ? "loading..." : JSON.stringify(data?.getPokemon)}</p>
    </div>
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

export default Home

import { Layout } from "components/layout"
import {
  PokemonEnum,
  PokemonQueryVariables,
  usePokemonQuery
} from "graphql/generated"
import { getRequestClient } from "lib/client"
import type { NextPage } from "next"

const variables: PokemonQueryVariables = { pokemon: PokemonEnum["Pikachu"] }

const Home: NextPage = () => {
  const { data } = usePokemonQuery(getRequestClient(), variables)

  return (
    <Layout link="ssr">
      <p className="w-1/2 font-mono">{JSON.stringify(data?.getPokemon)}</p>
    </Layout>
  )
}

export default Home

import { PokemonEnum, usePokemonQuery } from "graphql/generated"
import { getRequestClient } from "lib/client"
import type { NextPage } from "next"

const variables = { pokemon: PokemonEnum["Dragonite"] }

const Home: NextPage = () => {
  const { data, isLoading } = usePokemonQuery(getRequestClient(), variables)

  return (
    <div>
      <h2>csr</h2>
      <p>{isLoading ? "loading..." : JSON.stringify(data?.getPokemon)}</p>
    </div>
  )
}

export default Home

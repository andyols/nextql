import { PokemonEnum, usePokemonQuery } from "graphql/generated"
import { getRequestClient } from "lib/client"
import type { NextPage } from "next"

const pokemon = PokemonEnum["Mewtwo"]

const Home: NextPage = () => {
  const { data, isLoading } = usePokemonQuery(getRequestClient(), {
    pokemon
  })
  return (
    <div>
      <h2>{pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</h2>
      <p>{isLoading ? "loading..." : JSON.stringify(data?.getPokemon)}</p>
    </div>
  )
}

export default Home

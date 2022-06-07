import { Pokemon } from "components/Pokemon"
import {
  PokemonEnum,
  PokemonQueryVariables,
  usePokemonQuery
} from "graphql/generated"
import { getRequestClient } from "lib/client"
import type { NextPage } from "next"
import Link from "next/link"

const variables: PokemonQueryVariables = { pokemon: PokemonEnum["Pikachu"] }

const Home: NextPage = () => {
  const { data, isLoading } = usePokemonQuery(getRequestClient(), variables)

  return (
    <div className="container pt-16 mx-auto">
      <Link href={"/ssr"}>
        <a className="hover:underline hover:cursor-pointer font-semibold">
          ssr page
        </a>
      </Link>
      <Pokemon pokemon={data?.getPokemon} loading={isLoading} />
    </div>
  )
}

export default Home

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
    <div className="flex justify-center w-screen h-screen">
      <div className="w-full max-w-3xl pt-16">
        <Link href={"/ssr"}>
          <a className="hover:underline hover:cursor-pointer font-semibold">
            ssr page
          </a>
        </Link>
        <div className="flex flex-col pt-4">
          <img src={data?.getPokemon.sprite} className="w-20" />
          <p className="font-mono">
            {isLoading ? "loading..." : JSON.stringify(data?.getPokemon)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home

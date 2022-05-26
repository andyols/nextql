import { PokemonEnum, usePokemonQuery } from "graphql/generated"
import { getRequestClient } from "lib/client"
import type { NextPage } from "next"
import Link from "next/link"

const variables = { pokemon: PokemonEnum["Dragonite"] }

const Home: NextPage = () => {
  const { data, isLoading } = usePokemonQuery(getRequestClient(), variables)

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="pt-16 max-w-3xl w-full font-mono">
        <Link href={"/ssr"}>
          <a className="hover:underline hover:cursor-pointer">ssr page</a>
        </Link>
        <h2 className="text-3xl">{variables.pokemon}</h2>
        <p>{isLoading ? "loading..." : JSON.stringify(data?.getPokemon)}</p>
      </div>
    </div>
  )
}

export default Home

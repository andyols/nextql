import {
  PokemonEnum,
  PokemonQueryVariables,
  usePokemonQuery
} from "graphql/generated"
import { getRequestClient } from "lib/client"
import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"

const variables: PokemonQueryVariables = { pokemon: PokemonEnum["Pikachu"] }
const size = 80

const Home: NextPage = () => {
  const { data, isLoading } = usePokemonQuery(getRequestClient(), variables)

  return (
    <div className="container pt-16 mx-auto">
      <Link href={"/ssr"}>
        <a className="hover:underline hover:cursor-pointer font-semibold">
          ssr page
        </a>
      </Link>
      <div className="flex flex-col items-start w-8/12 pt-4 space-y-4">
        {data?.getPokemon.sprite && (
          <Image src={data.getPokemon.sprite} width={size} height={size} />
        )}
        <p className="font-mono">
          {isLoading ? "loading..." : JSON.stringify(data?.getPokemon)}
        </p>
      </div>
    </div>
  )
}

export default Home

import {
  PokemonEnum,
  PokemonQueryVariables,
  usePokemonQuery
} from "graphql/generated"
import { getQueryClient, getRequestClient } from "lib/client"
import type { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import { dehydrate } from "react-query"

const variables: PokemonQueryVariables = { pokemon: PokemonEnum["Dragonite"] }

const HomeSSR: NextPage = () => {
  const { data, isLoading } = usePokemonQuery(getRequestClient(), variables)

  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="w-full max-w-3xl pt-16">
        <Link href={"/"}>
          <a className="hover:underline hover:cursor-pointer font-semibold">back</a>
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

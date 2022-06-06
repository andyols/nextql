import {
  PokemonEnum,
  PokemonQueryVariables,
  usePokemonQuery
} from "graphql/generated"
import { getQueryClient, getRequestClient } from "lib/client"
import type { GetServerSideProps, NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { dehydrate } from "react-query"

const variables: PokemonQueryVariables = { pokemon: PokemonEnum["Dragonite"] }
const size = 80

const HomeSSR: NextPage = () => {
  const { data, isLoading } = usePokemonQuery(getRequestClient(), variables)

  return (
    <div className="container pt-16 mx-auto">
      <Link href={"/"}>
        <a className="hover:underline hover:cursor-pointer font-semibold">back</a>
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

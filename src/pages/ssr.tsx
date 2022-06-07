import { Pokemon } from "components/Pokemon"
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
    <div className="container pt-16 mx-auto">
      <Link href={"/"}>
        <a className="hover:underline hover:cursor-pointer font-semibold">back</a>
      </Link>
      <Pokemon pokemon={data?.getPokemon} loading={isLoading} />
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

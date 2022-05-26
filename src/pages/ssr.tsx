import { PokemonEnum, usePokemonQuery } from "graphql/generated"
import { getQueryClient, getRequestClient } from "lib/client"
import type { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import { dehydrate } from "react-query"

const variables = { pokemon: PokemonEnum["Pikachu"] }

const HomeSSR: NextPage = () => {
  const { data, isLoading } = usePokemonQuery(getRequestClient(), variables)
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="pt-16 max-w-3xl w-full font-mono">
        <Link href={"/"}>
          <a className="hover:underline hover:cursor-pointer">back</a>
        </Link>
        <h2 className="text-3xl">{variables.pokemon}</h2>
        <p>{isLoading ? "loading..." : JSON.stringify(data?.getPokemon)}</p>
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

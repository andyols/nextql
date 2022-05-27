import { usePostsQuery } from "graphql/generated"
import { getQueryClient, getRequestClient } from "lib/client"
import type { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import { dehydrate } from "react-query"

const HomeSSR: NextPage = () => {
  const { data, isLoading, isError, error } = usePostsQuery(getRequestClient())

  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="w-full max-w-3xl pt-16 font-mono">
        <Link href={"/"}>
          <a className="hover:underline hover:cursor-pointer">back</a>
        </Link>
        <div className="flex flex-col pt-4">
          {isLoading && <p>loading...</p>}
          {data?.posts &&
            data.posts.map(post => (
              <div key={post.id} className="flex flex-col pb-4">
                <p>{post.title}</p>
                <p>{post.content}</p>
              </div>
            ))}
        </div>
        {isError && <p>{JSON.stringify(error)}</p>}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = getQueryClient()

  await client.prefetchQuery(
    usePostsQuery.getKey(),
    usePostsQuery.fetcher(getRequestClient())
  )

  return {
    props: {
      dehydratedState: dehydrate(client)
    }
  }
}

export default HomeSSR

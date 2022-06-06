import { Stage, usePostsQuery } from "graphql/generated"
import { getRequestClient } from "lib/client"
import type { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  const { data, isLoading } = usePostsQuery(getRequestClient())

  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="w-full max-w-3xl pt-16 font-mono">
        <Link href={"/ssr"}>
          <a className="hover:underline hover:cursor-pointer">ssr page</a>
        </Link>
        <div className="flex flex-col pt-4">
          {isLoading && <p>loading...</p>}
          {data?.posts.map(
            post =>
              post.stage === Stage["Published"] && (
                <div key={post.id} className="flex flex-col pb-4">
                  <p>{post.title}</p>
                  <p>{post.content}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default Home

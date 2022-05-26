import { createQueryClient } from "lib/graphql"
import type { AppProps } from "next/app"
import { useState } from "react"
import { QueryClientProvider } from "react-query"

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(createQueryClient)

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App

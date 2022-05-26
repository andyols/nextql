import { getQueryClient } from "lib/client"
import type { AppProps } from "next/app"
import { useState } from "react"
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(getQueryClient)

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App

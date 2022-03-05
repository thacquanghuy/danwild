import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { Navbar, MetaInfo, Footer, Cart, Spinner } from '../components/common'
import { CartContextProvider } from '../context/cart'
import { useRouter } from 'next/router'
import { ProductContextProdiver } from '../context/product'
import React from 'react'

import 'animate.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathname = router?.pathname
  const whitedList = ['/', '/oil', '/candle']
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const inter = setInterval(() => {
      setLoading(false)
    }, 500)

    return () => clearInterval(inter)
  }, [])

  return (
    <CartContextProvider>
      <ProductContextProdiver>
        <>
          <Cart />
          <Layout>
            {!loading ? (
              <>
                <Navbar navbarWhite={!whitedList.includes(pathname)} />
                <div className="flex-grow">
                  <Component {...pageProps} />
                </div>
                <div>
                  <MetaInfo />
                  <Footer />
                </div>
              </>
            ) : (
              <Spinner />
            )}
          </Layout>
        </>
      </ProductContextProdiver>
    </CartContextProvider>
  )
}

export default MyApp

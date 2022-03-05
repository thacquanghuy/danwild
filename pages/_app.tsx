import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { Navbar, MetaInfo, Footer, Cart } from '../components/common'
import { CartContextProvider } from '../context/cart'
import { useRouter } from 'next/router'
import { ProductContextProdiver } from '../context/product'

import 'animate.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathname = router?.pathname
  const whitedList = ['/', '/oil', '/candle']
  return (
    <CartContextProvider>
      <ProductContextProdiver>
        <Cart />
        <Layout>
          <Navbar navbarWhite={!whitedList.includes(pathname)} />
          <div className="flex-grow">
            <Component {...pageProps} />
          </div>
          <div>
            <MetaInfo />
            <Footer />
          </div>
        </Layout>
      </ProductContextProdiver>
    </CartContextProvider>
  )
}

export default MyApp

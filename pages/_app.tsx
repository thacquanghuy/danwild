import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { Navbar, MetaInfo, Footer, Cart } from '../components/common'
import { CartContextProvider } from '../context/cart'

import 'animate.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Layout>
        <Navbar />
        <Cart />
        <Component {...pageProps} />
        <MetaInfo />
        <Footer />
      </Layout>
    </CartContextProvider>
  )
}

export default MyApp

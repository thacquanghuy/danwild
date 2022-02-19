import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { Navbar, MetaInfo, Footer } from '../components/common'

import 'animate.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <MetaInfo />
      <Footer />
    </Layout>
  )
}

export default MyApp

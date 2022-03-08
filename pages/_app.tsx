import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { Navbar, MetaInfo, Footer, Cart, Spinner } from '../components/common'
import { CartContextProvider } from '../context/cart'
import { useRouter } from 'next/router'
import { ProductContextProdiver } from '../context/product'
import React from 'react'
import { firebaseConfig } from '../firestore.config'
import 'animate.css'
import { initializeApp, getApp } from 'firebase/app'
import { getOrders } from '../services/order'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

let fireapp

try {
  fireapp = getApp()
} catch (error) {
  fireapp = initializeApp({
    ...firebaseConfig,
  })
}

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

  React.useEffect(() => {
    const getData = async () => {
      const res = await getOrders()
    }
    getData()
  }, [])

  return (
    <CartContextProvider>
      <ProductContextProdiver>
        <>
          <Cart />
          <Layout>
            <ToastContainer />
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

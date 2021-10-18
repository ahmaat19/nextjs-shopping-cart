import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { CartProvider } from 'react-use-cart'

import { useEffect } from 'react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])
  return (
    <CartProvider id='shopping-cart'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp

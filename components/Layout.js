import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta property='og:title' content='Shopping Cart' key='title' />
      </Head>
      <Navbar />
      <div className='container'>{children}</div>
    </>
  )
}

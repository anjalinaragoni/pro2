import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment 2</title>
        <meta name="description" content="Second frontend assignment" />
      </Head>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center">This is Assignment 2 Homepage</h1>
      </main>
      <Footer />
    </>
  )
}

import Head from 'next/head'
import Features from '../components/Features'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tinDog</title>
      </Head>
      <Hero/>
      <Features/>

    </div>
  )
}

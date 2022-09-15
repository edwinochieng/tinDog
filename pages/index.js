import Head from 'next/head'
import Downloads from '../components/Downloads'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Press from '../components/Press'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tinDog</title>
      </Head>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Press/>
      <Pricing/>
      <Downloads/>

    </div>
  )
}

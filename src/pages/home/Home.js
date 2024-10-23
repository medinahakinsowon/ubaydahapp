import React, {useEffect} from 'react'
import Hero from '../../components/hero/Hero'
import FAQ from '../../components/faq/Faq'
import Guest from '../../components/guest/Guest'
import Footer from '../../components/footer/Footer'
import { account } from '../../appwrite/config'

const Home = () => {
  useEffect(() => {
    console.log(account)
  }, [])
  return (
    <div>
      <Hero />
      <FAQ />
      <Guest />
      <Footer />
    </div>
  )
}

export default Home

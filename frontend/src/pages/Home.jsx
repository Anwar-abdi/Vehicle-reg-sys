import React from 'react'
import Heropage from '../components/Ui/Heropage'
import Service from '../components/Ui/Service'
import System from '../components/Ui/System'
import About from '../components/Ui/About'

const Home = () => {
  return (
    <div>
      <Heropage/>
      <Service/>
      <System/>
      <About/>
    </div>
  )
}

export default Home

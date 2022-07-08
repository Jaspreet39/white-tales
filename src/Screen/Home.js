import React from 'react'
import About from '../Component/About'
import Banner from '../Component/Banner'
import Carouselimage from '../Component/Carouselimage'
import Header from '../Component/Header'
import Showcase from '../Component/Showcase'
import '../Style/Home.scss'


function Home() {
  return (
    <div className='home'>
        <Header/>
        <Banner/>
        <Showcase/>
        <About/>
        <Carouselimage/>
    </div>
  )
}

export default Home
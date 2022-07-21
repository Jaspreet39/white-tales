import React from 'react'
import Bottom from '../Screen/Bottom'
import Home from '../Screen/Home'
import Footer from './Footer'
import Form from './Form'

function HomeScreen() {
  return (
    <div>
          <Home />
          <Bottom />
          <Form/>
          <Footer/>
    </div>
  )
}

export default HomeScreen
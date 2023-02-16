import { Fragment, useState } from 'react'
import './App.css'
import Right from './components/Right'
import Line from './components/Line'
import Footer from './components/footer'
import Content from './components/Content'
import { gsap } from "gsap";



function App() {
  

  return (
    <Fragment>
      <Content />
      <Right />
      <Line />
      <Footer />
      
    </Fragment>
    )
}

export default App

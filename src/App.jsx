import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DemoPage from './components/DemoPage'
import Comments from './components/Comments'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='flex flex-col w-full items-center justify-center '>
        <NavBar/>
        <HeroSection/>
        <DemoPage />
        <Comments />
        <Footer/>
      </div>
    </>
  )
}

export default App

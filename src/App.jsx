import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoDemo from './components/VideoDemo'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Carousel from './components/Carousel'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <VideoDemo />
        <Problem />
        <Features />
        <CTA />
        <HowItWorks />
        <Carousel />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App

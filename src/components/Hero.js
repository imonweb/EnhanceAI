import React from 'react'
import { Link } from 'react-router-dom'
import HeroTopRightDots from '../imgs/hero-top-right-dots.svg'

const Hero = () => {
  return (
 
    <section className='hero py-12 px-24 text-center relative'>
      <img src={HeroTopRightDots} 
      style={{ 
        width: "118px", 
        
      }} className="absolute right-8 top-4" alt="patterns" />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-7xl font-thin relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 block text-center">Use <span className="font-medium"> AI </span> to solve, write & work</h1>
        <p className="md:text-2xl font-extralight text-gray-500 text-center max-w-2xl mx-auto mt-4">Enhance everything you do by using the latest from OpenAI to solve problems, write solutions and make life easier.</p>
        <span className=''>


        <Link to='#' className='sm:px-6 py-3 transition hover:bg-gray-200 rounded-md active bg-gradient-to-r border-t-2 border-green-400 bg-gradient-to-br from-green-500 to-blue-600 hover:from-green-600 hover:via-blue-700 hover:to-purple-700 text-white rounded-md flex sm:inline-flex font-medium text-lg cursor-pointer hover:shadow-lg transition inline-flex items-center mt-8'>Get Started
        
        <svg className="w-8 h-8 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        
        </Link>

       
        </span>
      </div>
    </section>

    
  )
}

export default Hero
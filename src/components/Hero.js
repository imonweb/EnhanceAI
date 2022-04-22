import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero py-4 px-24'>
      <div className="container mx-auto items-center justify-between relative">
        <h1 className="text-7xl font-thin relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 block text-center">Use <span className="font-medium"> AI </span> to solve, write & work</h1>
        <p className="text-lg font-normal text-gray-500 text-center max-w-2xl mx-auto mt-4">Enhance everything you do by using the latest from OpenAI to solve problems, write solutions and make life easier.</p>

        <Link to='#' className='px-4 py-2 hover:bg-gray-200 rounded-md active bg-gradient-to-r border-t-2 border-indigo-400 bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-green-600 hover:via-blue-700 hover:to-purple-700 text-white rounded-md flex md:inline-flex font-medium text-lg cursor-pointer hover:shadow-lg transition'>Get Started</Link>

       
      </div>
    </section>
  )
}

export default Hero
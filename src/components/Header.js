import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLeftPattern from '../imgs/header-left-dot-patterns.svg'
import HeaderRightPattern from '../imgs/header-right-patterns.svg'
import Logo from '../imgs/logo.svg'
 
 

const Header = () => {
  return (
   <>
      <div className="border-b border-gray-300 py-4">
        <div className="container mx-auto flex items-center justify-between relative">
       
          <img src={HeaderLeftPattern} 
            alt="header left pattern" 
            style={{ width: "88px" }} 
            className="absolute right-full -top-4 mr-12" />
          
          <img src={HeaderRightPattern} 
            alt="header left pattern" 
            style={{ width: "88px" }} 
            className="absolute left-full -top-4 ml-12" />
          <Link to="#" alt="Enhance AI Logo">
            <img src={Logo} alt="Logo" style={{width: "291px"}}/>
          </Link>
          
          <nav>
            <ul className='flex items-center'>
              <li><Link to="#" className='px-4 py-2 hover:bg-gray-200 rounded-md active bg-gradient-to-r border-t-2 border-indigo-400 bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-green-600 hover:via-blue-700 hover:to-purple-700 text-white rounded-md flex md:inline-flex font-medium text-lg cursor-pointer hover:shadow-lg transition'>
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
              
                
                Free Signup</Link></li>
              
              {/* <li><a href="#" className='px-2 py-4 hover:bg-gray-200 rounded-md text-lg font-medium border-t-2 border-transparent'>Price</a></li>
              <li><a href="#" className='px-2 py-4 hover:bg-gray-200 rounded-md text-lg font-medium border-t-2 border-transparent'>Free Signup</a></li> */}
            </ul>
          </nav>
           

        </div>  
      
      </div>
  
 
              </>
  )
}

export default Header



import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../imgs/logo.svg'

const Header = () => {
  return (
   
      <div className="border-b border-gray-300 py-4">
        <div className="container mx-auto flex items-center">
       
          <img src={Logo} alt="Logo" style={{width: "291px"}}/>
          <nav>
            <ul className='flex items-center'>
              <li><Link to="#" className='px-4 py-2 hover:bg-gray-200 rounded-md active bg-gradient-to-r border-t-2 border-indigo-400 bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-green-600 hover:via-blue-700 hover:to-purple-700 text-white rounded-md flex md:inline-flex font-medium text-lg cursor-pointer hover:shadow-lg transition'>Free Signup</Link></li>
              
              {/* <li><a href="#" className='px-2 py-4 hover:bg-gray-200 rounded-md text-lg font-medium border-t-2 border-transparent'>Price</a></li>
              <li><a href="#" className='px-2 py-4 hover:bg-gray-200 rounded-md text-lg font-medium border-t-2 border-transparent'>Free Signup</a></li> */}
            </ul>
          </nav>

        </div>  
      </div>
     
 
  )
}

export default Header



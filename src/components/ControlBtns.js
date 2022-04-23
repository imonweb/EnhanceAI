import React from 'react'
import {Link} from 'react-router-dom'
import purpleToLeftShapes from '../imgs/purple-top-left-shapes.svg'

const ControlBtns = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 -mt-48 pt-48 py-4 relative">

      <img src={purpleToLeftShapes} alt="shapes" width="317px" className='absolute left-0 -top-64'/>
      <div className="h-48 container mx-auto">
        <div className="flex">

          <Link to="#" className='mt-6 px-4 py-2 transition bg-white text-purple-600 rounded-md rounded-md flex md:inline-flex font-medium text-lg cursor-pointer hover:shadow-lg mr-4'>
             <svg className="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
          Explain Code
          </Link>

          <Link to="#" className='mt-6 px-4 py-2 transition bg-purple-400 text-purple-800 rounded-md rounded-md hover:text-white flex md:inline-flex font-medium text-lg cursor-pointer hover:shadow-lg'>
             <svg className="h-6 w-6 mr-4" width="29" height="17" viewBox="0 0 29 17" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.625 8.56977C0.625 7.04352 0.85625 5.61748 1.31875 4.28856C1.7639 3.00411 2.45161 1.81711 3.3445 0.792064H5.60458C4.75883 1.89361 4.10713 3.13133 3.6775 4.45198C2.81223 7.11483 2.81601 9.98383 3.68829 12.6444C4.13537 13.9548 4.76746 15.145 5.58454 16.2087H3.34912C2.45248 15.2126 1.76376 14.0474 1.32338 12.7816C0.85288 11.4277 0.618224 10.0031 0.629625 8.56977" fill="#1F00BB"/>
            <path d="M11.4167 14.6667C11.4167 15.0755 11.2543 15.4677 10.9651 15.7568C10.676 16.0459 10.2839 16.2083 9.87501 16.2083C9.46613 16.2083 9.07401 16.0459 8.78489 15.7568C8.49577 15.4677 8.33334 15.0755 8.33334 14.6667C8.33334 14.2578 8.49577 13.8657 8.78489 13.5765C9.07401 13.2874 9.46613 13.125 9.87501 13.125C10.2839 13.125 10.676 13.2874 10.9651 13.5765C11.2543 13.8657 11.4167 14.2578 11.4167 14.6667Z" fill="#1F00BB"/>
            <path d="M17.9687 0.811713L17.5987 4.13555L20.9704 3.19513L21.2679 5.46138L18.1969 5.67721L20.2119 8.35972L18.1615 9.4543L16.7524 6.62842L15.519 9.43734L13.3915 8.36126L15.3895 5.67876L12.337 5.44442L12.6916 3.18742L15.9908 4.12784L15.6208 0.800921H17.9857" fill="#1F00BB"/>
            <path d="M28.375 8.56938C28.375 10.0833 28.1407 11.4924 27.6705 12.7997C27.2318 14.0585 26.5468 15.2172 25.6555 16.2083H23.4155C24.2356 15.1326 24.8736 13.9295 25.304 12.6471C25.7511 11.329 25.9731 9.96459 25.9731 8.54625C25.9731 7.14334 25.7573 5.77588 25.3225 4.44542C24.8941 3.12486 24.2434 1.88711 23.3985 0.785502H25.657C26.5553 1.81338 27.2431 3.00764 27.6813 4.3005C28.1438 5.62634 28.375 7.04775 28.375 8.56167" fill="#1F00BB"/>
            </svg>
          Regex
          </Link>

        </div>
      </div>
      <div className="h-48"></div>
      <div className="h-48"></div>
    </section>
  )
}

export default ControlBtns
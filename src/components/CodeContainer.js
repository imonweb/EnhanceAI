import React from 'react'
import { Link } from 'react-router-dom'

const CodeContainer = () => {

 
  const codes = `function HelloWorld(text){
                  echo text || "Hello World";
                }`
  return (
    //  tools for layout: border-solid border-2 border-rose-600
      <section className="relative py-8 z-50">
        <div className="container mx-auto">

          <div className="rounded-2xl shadow-xl border flex divide-x bg-white" style={{boxShadow:'0px 0px 40em rgba(0,0,0,0.125)' }}>
            <div className="p-8 flex-1">
             
              <div className="flex">
                <svg className="w-10 h-10 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>

                <h2 className='text-3xl font-medium'>
                  Explain Code
                </h2>
              </div>

              <p className='text-gray-600 text-lg mt-2'>
                Explain some code based on the syntax provided
              </p>
              <h3 className='mt-6 text-lg font-bold'>
                Paste your code below:
              </h3>

              <div className='bg-gray-100 p-4 rounded-md mt-2 h-44 text-sm'>
                <code className=''>
                  {codes}
                </code>
              </div>

              <Link to="#" className='mt-6 sm:px-4 py-2 hover:bg-gray-200 rounded-md active bg-gradient-to-r border-t-2 border-indigo-400 bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-green-600 hover:via-blue-700 hover:to-purple-700 text-white rounded-md flex md:inline-flex font-medium text-lg cursor-pointer hover:shadow-lg transition'>
             <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
              
                
                Enhance with AI</Link>
              
            </div>


            <div className="p-8 flex-1">
              
              <div className="flex items-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-300 sm:mx-0 sm:h-10 sm:w-10 bg-gray-800 text-white flex">

                  <svg className="w-6 h-8" fill="none" stroke="currentColor"   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                <h2 className='text-3xl font-medium ml-4'>
                  What does this code do?
                </h2>
              </div>
 
              <p className='text-gray-600 text-lg mt-2'>
                The following code does:
              </p>

              <div className="divide-y mt-4">
              <div className="flex items-center py-4">
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-300 sm:mx-0 bg-gray-200 text-gray flex shrink-0">

                  <svg className="w-6 h-6" fill="none" stroke="currentColor"   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                <h2 className='text-md ml-4'>
                  The code above is a function definition.
                </h2>
              </div>
             
              
              <div className="flex items-center py-4">
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-300 sm:mx-0 bg-gray-200 text-gray flex shrink-0">

                  <svg className="w-6 h-6" fill="none" stroke="currentColor"   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                <h2 className='text-md ml-4'>
                  It defines a new function called `HelloWorld` that takes a single argument called `text`
                </h2>
              </div>

              <div className="flex items-center py-4">
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-300 sm:mx-0 bg-gray-200 text-gray flex shrink-0">

                  <svg className="w-6 h-6" fill="none" stroke="currentColor"   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                <h2 className='text-md ml-4'>
                  The body of the function is a single line of code that prints out the value of `text` if it is defined, or `Hello World` if it is not defined.
                </h2>
              </div>
    
              </div>

               <Link to="#" className='mt-6 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md active border-t-2 text-gray rounded-md flex md:inline-flex font-medium text-md cursor-pointer transition'>
             <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
              
                
                Copy Output</Link>

            </div>
          </div>
        </div>
      </section>
 
  )
}

export default CodeContainer
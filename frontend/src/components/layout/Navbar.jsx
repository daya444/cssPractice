import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Link } from "react-router-dom"
import UseCase from '../home/UseCase'

export const Navbar = () => {

  const [showUseCase, setShowUseCase] = useState(false)

  const toggleUseCase = () => {
    setShowUseCase(prev => !prev)
  }




  return (
    <div>
      <div className='flex  text-[#381fd1]  font-bold text- py-3 text-x justify-around  bg-[#f6f6eb] px-48'>


        {/* Left Section */}
        <div className="flex items-center gap-x-6 ">
          <img className='w-8 h-8 rounded-full' src='/assets/img.jpg' />

          <div className="relative">
            <button
              className="border-2 border-transparent hover:border-[#381fd1] rounded flex items-center px-3 py-1"
              onClick={toggleUseCase}
            >
              USE CASE <span className='ml-3 text-xs'><FaChevronDown /></span>
            </button>

            {showUseCase && (
             <UseCase/>
            )}
          </div>

          <Link className='border-2 border-transparent hover:border-[#381fd1] rounded px-3 py-1'>PRICING</Link>
          <Link className='border-2 border-transparent hover:border-[#381fd1] rounded px-3 py-1'>SUPPORT</Link>
          <button className='border-2 border-transparent hover:border-[#381fd1] rounded px-3 py-1'>RESOURCES</button>
        </div>

        <div className='flex items-center text-x gap-x-4 '>

          <div>
            <Link className='border-2 border-transparent hover:border-[#381fd1] rounded px-3 py-1'>LOG IN</Link>
          </div>

          <div>
            <Link className='bg-[#381fd1] text-white py-2 px-2 rounded'>
              START FREE TEAM TRIAL
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}


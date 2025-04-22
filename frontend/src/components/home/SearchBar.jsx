import React, { useState } from 'react'
import { FaChevronCircleUp, FaSearch } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";



let Category = [
      "Fiction", "Non-fiction", "Mystery", "Biography", "History", "Fantasy", "Science"
]


export const SearchBar = () => {

     const [toggle,setToggle] = useState(false)


  return (
    <div className=''>
        <p className='text-x font-light p-2'>Search Library</p>

        <div className=' relative p-2'>
            <FaSearch className='left-5 absolute top-5  text-gray-400'/>
            <input  type="text" className='pl-10 pt-2 pb-2 pr-2 border-2 rounded border-gray-400  hover:border-blue-600 w-full outline-none'/>
          
        </div>

        <div className='mt-4 py-2  px-4'>
            <p className='hover:text-blue-600'>Home</p>
        </div>

        <div className='mt-4 py-2 px-4' >
            <p className='hover:text-blue-600'>Collections</p>
        </div>

        <div onClick={()=>setToggle(!toggle)} className='mt-4 py-2 px-4 flex justify-between ' >
            <p className='hover:text-blue-600'>Category</p> 
            <button className='flex items-center'>{toggle ? <FaChevronUp className='text-xs'/> : <FaChevronDown className='text-xs'/>}</button>
        </div>
        

       { toggle &&  (

          Category.map((cat,index)=>(
            <div key={index} className='mt-5  py-2 ' >
            <p className='hover:text-blue-600 pl-9'>{cat}</p>
        </div>
          )) 
       )

       }


       <div className='mt-10 bg-[#f3f2fc] rounded'>
           <div className='py-5 px-4'>
            <h2 className='font-bold text-2xl'>Contribute to Stark</h2>
            <p className='mt-3'>Got any accessibility resources or news?</p>

            <div className='mt-5 '>
                <button className='bg-[#381fd1] w-full text-white hover:bg-blue-700 cursor-pointer px-4 py-2 rounded'>
                    Submit a Resource
                </button>

            </div>
           </div>
          
       </div>

    </div>
  )
}


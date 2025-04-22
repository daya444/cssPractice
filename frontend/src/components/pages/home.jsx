import React from 'react'
import { SearchBar } from '../home/SearchBar'

export const Home = () => {
  return (
<>
<div className="max-w-7xl mx-auto p-4 flex  items-start gap-4 mt-6">

  <div className=" p-4 flex  w-[430px] rounded">
     <SearchBar/>

  </div>
  
  <div className="bg-yellow-200 p-4  flex rounded w-full">Card 2</div>

</div>
</>
  )
}


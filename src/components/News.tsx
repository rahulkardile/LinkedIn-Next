import React from 'react'
import SemiNews from './SemiNews'
import Games from './Games'

const News = () => {
  return (
    <div className='w-1/4 bg-white p-4 rounded-lg h-min' >
      <h1 className='text-lg font-semibold'>LinkedIn News</h1>
      <p className='text-sm text-gray-500 mt-1 font-semibold'>Top Stories</p>

      <SemiNews />
      <SemiNews />
      <SemiNews />
      <SemiNews />

      <div className="">
        <p className='font-semibold text-gray-500 my-3'><span>Today's Game</span>
          <span className='bg-red-200 p-1 text-xs rounded-lg ml-3 text-zinc-700'>New</span></p>
        <Games />
      </div>
    </div>
  )
}

export default News
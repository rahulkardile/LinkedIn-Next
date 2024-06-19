import React from 'react'
import { Input } from './ui/input'

const Search = () => {
  return (
    <div>
        <Input type='text' placeholder='Search' className='bg-[#EDF3F8] portrait:h-10 portrait:w-72 w-80 rounded-lg outline-none' />
    </div>
  )
}

export default Search
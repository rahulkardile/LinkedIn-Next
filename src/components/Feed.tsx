import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'

const Feed = () => {
  return (
    <div className="flex-1 p-3 border border-black">
      <PostInput />
      <Posts />
    </div>
  )
}

export default Feed
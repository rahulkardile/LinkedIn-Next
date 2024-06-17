import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'
import { currentUser } from '@clerk/nextjs/server';

const Feed = async () => {

  const user = await currentUser();

  const userObj = {
    img: user?.imageUrl,
    fullName: user?.fullName,
    name: user?.firstName,
    last: user?.lastName
  }

  return (
    <div className="flex-1 p-3 rounded">
      <PostInput user={userObj} />
      <p className='border-b border-black m-auto my-5 w-11/12' />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  )
}

export default Feed
import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'
import { currentUser } from '@clerk/nextjs/server';
import { getAllPost } from '@/lib/serverAction';
import { IPostDocument } from '../../models/post.model';

const Feed = async () => {

  const user = await currentUser();

  const userObj = {
    img: user?.imageUrl,
    fullName: user?.fullName,
    name: user?.firstName,
    last: user?.lastName
  }

  const posts: IPostDocument[] = await getAllPost();

  return (
    <div className="flex-1 p-3 rounded">
      <PostInput user={userObj} />
      <p className='border-b border-zinc-300 m-auto my-5 w-11/12' />
      {posts.map((item, index) =>{ 
        
        console.log(item);
        

        return(
        <Posts IPostDocument={item} key={index} />
      )})}
    </div>
  )
}

export default Feed
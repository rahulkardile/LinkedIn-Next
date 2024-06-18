'use client'

import React, { useState } from 'react'
import ProfileImg from './shared/ProfileImg'
import { Forward, MessageSquareMore, Save, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import { IPostDocument } from '../../models/post.model'

const Posts = ({ IPostDocument }: { IPostDocument: IPostDocument }) => {

  const [hide, setHide] = useState<boolean>(true)

  console.log(" log post : " + IPostDocument);


  return (
    <div className='bg-white rounded-lg p-5 mb-4'>
      <div className="">
        <div className="flex w-full justify-end items-center mb-2 flex-row gap-2">
          <ProfileImg src={IPostDocument.user.profileImage ? IPostDocument.user.profileImage : '/user.jpg'} />
          <div className="w-11/12">
            <h3 className='font-semibold'>{IPostDocument.user.firstName + " " + IPostDocument.user.lastName}</h3>
            <p className='text-xs w-5/6 line-clamp-1'>Full Stack Web Developer | React JS | MongoDB | Express JS | Node JS | Next JS | React Native</p>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <p className={`left-1 text-sm ${hide ? "line-clamp-3" : ""}`}>
            {hide === false && IPostDocument.description ? IPostDocument.
            description : IPostDocument.description.substring(0, 200) + " . . .  "}
           <span onClick={() => setHide(!hide)} className='text-blue-400 cursor-pointer font-semibold text-xs w-20'>{hide ? " see more " : " see less "}</span>
          </p>
        </div>

        <Image src={IPostDocument.imageUrl ? IPostDocument.imageUrl : ""} className='rounded-md mt-2 h-[300px] m-auto w-auto' alt='main Image' width={900} height={900} />

        <div className="p-1 flex flex-row justify-between border-t px-6 mt-4">
          <div className="flex gap-2 items-center p-2">
            <ThumbsUp />
            <p>Like</p>
          </div>
          <div className="flex gap-2 items-center p-2">
            <MessageSquareMore />
            <p>Comment</p>
          </div>
          <div className="flex gap-1 p-2">
            <Forward />
            <p>Like</p>
          </div>
          <div className="flex gap-1 p-2">
            <Save />
            <p>Like</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
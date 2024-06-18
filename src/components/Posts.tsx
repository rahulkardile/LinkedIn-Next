'use client'

import React, { useState } from 'react'
import ProfileImg from './shared/ProfileImg'
import { Forward, MessageSquareMore, Save, ThumbsUp } from 'lucide-react'
import Image from 'next/image'

const Posts = () => {

  const [hide, setHide] = useState<boolean>(true)

  return (
    <div className='bg-white rounded-lg p-5 mb-4'>
      <div className="">
        <div className="flex w-full justify-end items-center mb-2 flex-row gap-2">
          <ProfileImg src={'user.jpg'} />
          <div className="w-11/12">
            <h3 className='font-semibold'>Omkar Mhaske</h3>
            <p className='text-xs w-5/6 line-clamp-1'>Full Stack Web Developer | React JS | MongoDB | Express JS | Node JS | Next JS | React Native</p>
          </div>
        </div>
        <div className='flex items-end'>
          <p className={`left-1 text-sm ${hide ? "line-clamp-3" : ""}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum accusantium aliquid, maxime praesentium perferendis autem sunt fuga perspiciatis doloribus suscipit. Quis, hic nam deleniti qui illo doloribus minima modi eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eius minus facilis ipsam laudantium unde dolores ea excepturi est harum numquam, architecto at cupiditate ratione, consequuntur libero assumenda consectetur reiciendis.
          </p>
          <span onClick={() => setHide(!hide)} className='text-blue-500 cursor-pointer font-semibold text-xs w-20'>{hide ? "See more" : "See less"}</span>
        </div>

        <Image src="/coding.jpg" className='rounded-md mt-2' alt='main Image' width={1000} height={1000} />

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
'use client'

import { user } from '@/types/User'
import ProfileImg from './shared/ProfileImg'
import React, { useState } from 'react'
import { InputDialog } from './Dialog'
import { Input } from './ui/input'
import { Images, Newspaper, NotepadText } from 'lucide-react'

const PostInput = ({ user }: { user: user }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white p-4 md:m-0 m-2 border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <ProfileImg src={user.img !== undefined ? user.img : ""} />
        <Input type='text' onClick={() => setOpen(true)} placeholder='Start a post' className='h-12 outline-none w-full rounded-full' />
        <InputDialog open={open} setOpen={setOpen} fullName={user.fullName !== null && user.fullName !== undefined ? user.fullName : 'User '} src={user.img ? user.img : ""} />
      </div>
      <div className="flex flex-row px-14 pt-4 justify-between">
        <div onClick={() => setOpen(true)} className="flex duration-300 hover:bg-zinc-300 p-2 rounded-lg  cursor-pointer gap-2">
          <Images className='text-blue-400' />
          <span>Media</span>
        </div>
        <div onClick={() => setOpen(true)} className="flex duration-300 hover:bg-zinc-300 p-2 rounded-lg  cursor-pointer gap-2">
          <NotepadText className='text-orange-300' />
          <span>Event</span>
        </div>
        <div onClick={() => setOpen(true)} className="flex duration-300 hover:bg-zinc-300 p-2 rounded-lg cursor-pointer gap-2">
          <Newspaper className='text-orange-600' />
          <span>Write article</span>
        </div>
      </div>
    </div>
  )
}

export default PostInput
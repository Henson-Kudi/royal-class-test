import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import Link from 'next/link'
import { Input } from './ui/input'
import { Heart, Search, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'

export default function TopNav() {

  return (
    <div className='border-b border-gray-400 sticky top-0 z-50 bg-background'>
        <div className='bg-black text-white flex items-center px-16 py-1'>
            <p className='flex-1 text-center'>Some hello text</p>
            <Select defaultValue='english'>
              <SelectTrigger className="w-[180px] border-none rounded-none">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
              </SelectContent>
            </Select>

        </div>
        <div className='py-6 px-16 flex justify-evenly items-center'>
            <h1 className='font-bold text-2xl'>Royal Class</h1>
            <div className='flex gap-6 items-center flex-1 justify-center '>
                <Link href='#' className='underline'>Home</Link>
                <Link href='#' >Contact</Link>
                <Link href='#' >About</Link>
                <Link href='#' >Sign Up</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='relative'>
                    <Input className='border-gray-300' />
                    <Search className='absolute w-4 h-4 top-1/2 -translate-y-1/2 right-2' />
                </div>
                <Button variant={'ghost'}>
                    <Heart className='w-4 h-4' />
                </Button>
                <Button variant={'ghost'}>
                    <ShoppingCart className='w-4 h-4' />
                </Button>
            </div>
        </div>
        
    </div>
  )
}

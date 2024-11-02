import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const navElements = [
    {
        id: '1',
        title: "Woman's Fashion",
        link: "#",
        subItems: []
    },
    {
        id: '2',
        title: "Men's Fashion",
        link: "#",
        subItems: []
    },
    {
        id: '3',
        title: "Electronics",
        link: "#"
    },
    {
        id: '4',
        title: "Home & Lifestyle",
        link: "#"
    
    },
    {
        id: '5',
        title: "Medicine",
        link: "#"
    },
    {
        id: '6',
        title: "Sports & Outdoor",
        link: "#"
    },
    {
        id: '7',
        title: "Babies & Toys",
        link: "#"
    },
    {
        id: '8',
        title: "Groceries & Pets",
        link: "#"
    },
    {
        id: '9',
        title: "Health & Beauty",
        link: "#"
    }
]

export default function SideBar() {
  return (
    <div>
        <div className='sidebar'>
            <div className='sidebar__nav'>
                <ul className='flex flex-col gap-2 py-4 min-w-64'>
                    {navElements.map((navElement) => (
                        <li key={navElement.id} className='cursor-pointer hover:underline'>
                            {
                                navElement?.subItems ? <div className='flex items-center gap-2 justify-between'>
                                    <p>{navElement.title}</p> <ChevronRight />
                                </div> : <Link href={navElement.link}>{navElement.title}</Link>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

import { cn } from '@/lib/utils'
import React from 'react'

export default function SectionHeading({title, className}:{title: string, className?: string}) {
  return (
    <div className="flex gap-2 items-center font-bold">
      <span className="h-10 w-5 bg-red-primary rounded-sm"></span>
      <span className={cn("text-sm text-red-primary", className)}>{title}</span>
    </div>
  )
}

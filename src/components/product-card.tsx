import React from 'react'
import { Card, CardContent } from './ui/card'
import { Product } from '@/lib/types'
import Image from 'next/image'

export default function ProductCard({product}:{product:Product}) {
  return (
    <Card className="w-max">
        <CardContent className="p-0 sm:w-[270px]">
          <div className='w-full h-[250px] relative'>
            <Image src={product.images[1]} alt={product.title} width={0} height={0} sizes='100vw' className='w-full h-full absolute inset-0' />
          </div>
          <div className='p-2'>
            <p className='truncate font-semibold capitalize'>{product?.title}</p>
            <p className='text-sm text-red-primary'>${product?.price}</p>
          </div>
        </CardContent>
    </Card>
  )
}

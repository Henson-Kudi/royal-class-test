import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Category } from "@/lib/types"
import Image from "next/image"


export function BrowseByCategories({categories = []}: {categories?: Category[]}) {
  return (
    <Carousel className="w-full">
        <div className="flex items-end justify-between py-4">
            <div className="flex gap-12 items-center">
                <div className="text-2xl font-bold">Browse By Categories</div>
            </div>
            <div className=" relative flex items-center gap-4 justify-end">
                <CarouselPrevious className="static" />
                <CarouselNext className="static" />
              </div>
        </div>
      <CarouselContent className="items-center">
        {categories?.map((category, index) => (
          <CarouselItem key={index+ category.id} className="items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4" >
              <Card className="w-max">
                <CardContent className="p-0 sm:w-[170px]">
                  <div className='w-full h-[145px] relative'>
                    <Image src={category.image} alt={category.name} width={0} height={0} sizes='100vw' className='w-full h-full absolute inset-0' />
                  </div>
                  <div className='p-2'>
                    <p className='truncate font-semibold capitalize text-center'>{category?.name}</p>
                  </div>
                </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  )
}



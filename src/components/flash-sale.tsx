import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FlashSaleCountDownTimer } from "./flash-sale-countdown"
import { Product } from "@/lib/types"
import ProductCard from "./product-card"


export function FlashSale({products = []}: {products?: Product[]}) {
  return (
    <Carousel className="w-full">
        <div className="flex items-end justify-between py-4">
            <div className="flex gap-12 items-center">
                <div className="text-2xl font-bold">Flash Sales</div>
                <FlashSaleCountDownTimer />
            </div>
            <div className=" relative flex items-center gap-4 justify-end">
                <CarouselPrevious className="static" />
                <CarouselNext className="static" />
              </div>
        </div>
      <CarouselContent className="items-center">
        {products?.map((product, index) => (
          <CarouselItem key={index+ product.id} className="items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4" >
              <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  )
}



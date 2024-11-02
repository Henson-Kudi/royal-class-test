import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Product } from "@/lib/types"
import ProductCard from "./product-card"
import { Button } from "./ui/button"


export function BesstSellingProducts({products = []}: {products?: Product[]}) {
  return (
    <Carousel className="w-full">
        <div className="flex items-end justify-between py-4">
            <div className="flex gap-12 items-center">
                <div className="text-2xl font-bold">Best Selling Products</div>
            </div>
            <div className=" relative flex items-center gap-4 justify-end">
                <Button className="bg-red-primary hover:bg-red-primary rounded-sm px-4">
                    View All
                </Button>
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



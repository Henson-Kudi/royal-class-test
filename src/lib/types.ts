export type Product = {
    id: string
    title: string
    price: string
    description: string
    images: string[]
    creationAt: string
    updatedAt: string
    category: {
        id: string
        name: string
        image: string
        creationAt: string
        updatedAt: string
    }
}

export type Category = {
    id: string
    name: string
    image: string
    creationAt: string
    updatedAt: string
}


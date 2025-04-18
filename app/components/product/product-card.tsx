"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/utils/types/types"
import { Card, CardContent  } from "@/components/ui/card"



interface ProductCardProps {
  product: Product
}

export default function ProductCard({product}:ProductCardProps) {

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-sm overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
        <div className="relative w-full pt-[100%] overflow-hidden rounded-t-lg">
          <Link href={`/prodotti/${product.id}`}>
            <Image
              src={product.immagine as unknown as string}
              alt="Immagine prodotto"
              fill
              className="object-cover transition-transform group-hover:scale-105"
              style={{ objectPosition: "center" }}
            />
          </Link>
        </div>
        <CardContent className="pb-4">
          <h3 className="text-4xl font-semibold">{product.nome}</h3>
        </CardContent>
      </Card>
    </div>
  )
}




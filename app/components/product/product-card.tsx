"use client"

import Image from "next/image"
import Link from "next/link"
import { Product, Immagine } from "@/utils/types/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { supabaseClient } from "@/utils/supabase/client"


interface ProductCardProps {
  product: {
    id: number
    nome: string
    descrizione: string
    prezzo: number
    categoria: string
    immagine:string
  }
}

export default function ProductCard({product}:ProductCardProps) {
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-sm overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
        <div className="relative w-full pt-[100%] overflow-hidden rounded-t-lg">
          <Link href={`/prodotti/${product.id}`}>
            <Image
              src={product.immagine}
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

/*
 <div className="flex justify-center p-6">
    <Card className="w-full max-w-sm overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
      <div className="relative w-full pt-[100%] overflow-hidden rounded-t-lg">
        <Image
          src={product.image}
          alt="Immagine prodotto"
          fill
          className="object-cover transition-transform group-hover:scale-105 absolute"
        />
      </div>
      <CardContent className="">
        <h3 className="text-xl font-semibold">Jeans slim fit</h3>
        <div className="pt-2">
          <span className="text-2xl font-bold">€59,99</span>
        </div>
      </CardContent>
    </Card>
  </div>

*/


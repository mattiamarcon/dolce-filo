"use client"

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Colore, Immagine, Product, Taglia } from '@/utils/types/types'
import { ChevronLeft, ChevronRight, Heart, Minus, Plus, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import Image from "next/image"

interface propTypes{
    prodotto:Product,
    immagini:Immagine[],
    taglie:Taglia[],
    colori:Colore[],
}

function ProductMain({prodotto,immagini,taglie,colori}:propTypes) {

    const [mainImage, setMainImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState(colori[0])
    const [selectedSize, setSelectedSize] = useState(taglie[0])
    const {
        prezzo, nome, descrizione
    } = prodotto

    const nextImage = () => {
        (mainImage==immagini.length-1)?setMainImage(0):setMainImage(prev=>prev+1)
    }

    const prevImage = () => {
        (mainImage==0)?setMainImage(immagini.length-1):setMainImage(prev=>prev-1)
    }

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Galleria immagini */}
      <div className="space-y-4">
        <div className="relative rounded-lg overflow-hidden border h-[400px] md:h-[500px]">
          
          <Image
            src={immagini[mainImage].link}
            alt={prodotto.nome}
            fill
            className="object-cover"
            priority
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
            aria-label="Immagine precedente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
            aria-label="Immagine successiva"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {immagini.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(index)}
              className={`relative h-20 w-20 rounded-md overflow-hidden border-2 ${
                mainImage === index ? "border-primary" : "border-transparent"
              }`}
            >
              <Image
                src={image.link || "/placeholder.svg"}
                alt={`${nome} - vista ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Dettagli prodotto */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{nome}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="text-2xl font-bold">€{prezzo}</div>
            {/* {prodotto.prezzoScontato && (
              <div className="text-lg text-muted-foreground line-through">€{product.discount.toFixed(2)}</div>
            )} */}
          </div>
        </div>

        <p className="text-muted-foreground">{descrizione}</p>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Colore</h3>
            <div className="flex gap-2">
              {colori.map((color) => (
                <button
                  key={color.colore}
                  onClick={() => setSelectedColor(color)}
                  className={`p-2 border rounded-md cursor-pointer ${
                    selectedColor === color ? "border-primary bg-primary/10" : "border-input"
                  }`}
                >
                  {color.colore}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Taglia</h3>
            <div className="flex flex-wrap gap-2">
              {taglie.map((taglia) => (
                <button
                  key={taglia.taglia}
                  onClick={() => setSelectedSize(taglia)}
                  className={`p-2 flex items-center justify-center border rounded-md cursor-pointer ${
                    selectedSize === taglia ? "border-primary bg-primary/10" : "border-input"
                  }`}
                >
                  {taglia.taglia}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Quantità</h3>
            <div className="flex items-center border rounded-md w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-muted"
                aria-label="Diminuisci quantità"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-muted"
                aria-label="Aumenta quantità"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <span>* Se il prodotto che stai acquistando è personalizzabile, la personalizzazzione avverrà all'interno del carello</span>

          <div className="flex gap-4 pt-4">
            <Button size="lg" className="flex-1" onClick={()=>console.log("ok")}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Aggiungi al carrello
            </Button>
            </div>

            <Separator className="my-6" />

        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductMain
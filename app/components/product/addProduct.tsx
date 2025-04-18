"use client"

import type React from "react"

import { useState } from "react"
import { Trash2, Plus, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { addColors, addImages, addProduct, addSizes } from "@/app/action"
import Form from "next/form"
import { Product } from "@/utils/types/types"

export default function ProductForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  // Colori
  const [colors, setColors] = useState<string[]>(["Nero", "Bianco", "Blu"])
  const [newColor, setNewColor] = useState("")

  // Taglie
  const [sizes, setSizes] = useState<string[]>(["S", "M", "L", "XL", "Piccola", "Media", "Grande"])
  const [newSize, setNewSize] = useState("")

  // Selezioni
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

  // Immagini
  const [images, setImages] = useState<File[]>([])
  const [imagesPreviews, setImagesPreviews] = useState<string[]>([])
  const [coverImageIndex, setCoverImageIndex] = useState(0)

  // Add state for validation errors
  const [errors, setErrors] = useState<{
    fields?: boolean
    colors?: boolean
    sizes?: boolean
    images?: boolean
  }>({})

  const handleAddColor = () => {
    if (newColor && !colors.includes(newColor)) {
      setColors([...colors, newColor])
      setNewColor("")
    }
  }

  const handleAddSize = () => {
    if (newSize && !sizes.includes(newSize)) {
      setSizes([...sizes, newSize])
      setNewSize("")
    }
  }

  const handleColorToggle = (color: string) => {
    setSelectedColors(
      selectedColors.includes(color) ? selectedColors.filter((c) => c !== color) : [...selectedColors, color],
    )
  }

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(selectedSizes.includes(size) ? selectedSizes.filter((s) => s !== size) : [...selectedSizes, size])
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setImages((prevImages) => [...prevImages, ...filesArray])

      // Crea URL per le anteprime
      const newImagePreviews = filesArray.map((file) => URL.createObjectURL(file))
      setImagesPreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews])

      // Se è la prima immagine caricata, imposta automaticamente come copertina
      if (images.length === 0 && filesArray.length > 0) {
        setCoverImageIndex(0)
      }
    }
  }

  const removeImage = (index: number, e: React.MouseEvent) => {
    // Ferma la propagazione dell'evento per evitare che il click arrivi all'immagine sottostante
    e.stopPropagation()

    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)

    const newPreviews = [...imagesPreviews]
    URL.revokeObjectURL(newPreviews[index]) // Libera la memoria
    newPreviews.splice(index, 1)
    setImagesPreviews(newPreviews)

    // Aggiorna l'indice dell'immagine di copertina se necessario
    if (coverImageIndex === index) {
      // Se rimuoviamo l'immagine di copertina, imposta la prima immagine come copertina
      // o null se non ci sono più immagini
      setCoverImageIndex(newImages.length > 0 ? 0 : 0)
    } else if (coverImageIndex !== null && coverImageIndex > index) {
      // Se rimuoviamo un'immagine prima dell'immagine di copertina, aggiorna l'indice
      setCoverImageIndex(coverImageIndex - 1)
    }
  }

  const setCoverImage = (index: number) => {
    setCoverImageIndex(index)
  }

  const handleSubmit = (formData: FormData) => {
    // Reset errors
    setErrors({})

    // Validate all required fields
    const fieldsValid = title && description && price && category
    const colorsValid = selectedColors.length > 0
    const sizesValid = selectedSizes.length > 0
    const imagesValid = images.length > 0

    // Check if all validations pass
    if (!fieldsValid || !colorsValid || !sizesValid || !imagesValid) {
      setErrors({
        fields: !fieldsValid,
        colors: !colorsValid,
        sizes: !sizesValid,
        images: !imagesValid,
      })

      // Prevent form submission
      return
    }

    // If validation passes, add selected colors and sizes to formData
    selectedColors.forEach((color) => {
      formData.append("selectedColors", color)
    })

    selectedSizes.forEach((size) => {
      formData.append("selectedSizes", size)
    })

    // Add cover image index
    if (coverImageIndex !== null) {
      formData.append("coverImageIndex", coverImageIndex.toString())
    }

    const product:Product={
      nome:title,
      descrizione:description,
      prezzo:price as unknown as number,
      id:0,
      categoria:category,
      immagine:images[coverImageIndex]
    }

    addProduct(product)
    addImages(title,images)
    addColors(title,selectedColors)
    addSizes(title,selectedSizes)

    setTitle("")
    setDescription("")
    setPrice("")
    setCategory("")
    setSelectedColors([])
    setSelectedSizes([])
    setImages([])
    setImagesPreviews([])
    setCoverImage(0)
  }

  return (
    <Form action={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-xl">
            Titolo
          </Label>
          <Input
            id="title"
            name="nome"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="text-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price" className="text-xl">
            Prezzo (€)
          </Label>
          <Input
            id="price"
            name="prezzo"
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="text-xl"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="category" className="text-xl">
          Categoria
        </Label>
        <Input
          id="category"
          name="categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="text-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-xl">
          Descrizione
        </Label>
        <Textarea
          id="description"
          name="descrizione"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
          className="text-xl"
        />
      </div>

      {/* Sezione Colori */}
      <div className="space-y-4">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <Label className="text-xl">Colori Disponibili</Label>
          {errors.colors && <span className="text-red-500 ml-2">*</span>}
          <div className="flex space-x-2">
            <Input
              value={newColor}
              onChange={(e) => setNewColor(e.target.value)}
              placeholder="Nuovo colore"
              className="w-40 text-xl"
            />
            <Button type="button" onClick={handleAddColor} size="sm" variant="outline" className="text-xl">
              <Plus className="h-4 w-4 mr-1" /> Aggiungi
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color}`}
                name={color}
                checked={selectedColors.includes(color)}
                onCheckedChange={() => handleColorToggle(color)}
                className="h-5 w-5"
              />
              <Label htmlFor={`color-${color}`} className="cursor-pointer text-xl">
                {color}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Sezione Taglie */}
      <div className="space-y-4">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <Label className="text-xl">Taglie Disponibili</Label>
          {errors.sizes && <span className="text-red-500 ml-2">*</span>}
          <div className="flex space-x-2">
            <Input
              value={newSize}
              onChange={(e) => setNewSize(e.target.value)}
              placeholder="Nuova taglia"
              className="w-40 text-xl"
            />
            <Button type="button" onClick={handleAddSize} size="sm" variant="outline" className="text-xl">
              <Plus className="h-4 w-4 mr-1" /> Aggiungi
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                id={`size-${size}`}
                name={size}
                checked={selectedSizes.includes(size)}
                onCheckedChange={() => handleSizeToggle(size)}
                className="h-5 w-5"
              />
              <Label htmlFor={`size-${size}`} className="cursor-pointer text-xl">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Sezione Immagini */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label className="text-xl">Immagini del Prodotto</Label>
          {errors.images && <span className="text-red-500 ml-2">*</span>}
          {imagesPreviews.length > 0 && (
            <div className="text-gray-500 text-xl">Clicca su un'immagine per impostarla come copertina</div>
          )}
        </div>

        <div className="flex items-center justify-center w-full">
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="mb-2 text-gray-500 text-xl">
                <span className="font-semibold">Clicca per caricare</span> o trascina qui
              </p>
              <p className="text-gray-500 text-xl">PNG, JPG o WEBP (MAX. 5MB)</p>
            </div>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
          </Label>
        </div>

        {imagesPreviews.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            {imagesPreviews.map((preview, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card
                      className={`overflow-hidden ${
                        coverImageIndex === index ? "ring-2 ring-primary ring-offset-2" : ""
                      } transition-all hover:shadow-md`}
                      onClick={() => setCoverImage(index)}
                    >
                      <div className="relative aspect-square cursor-pointer group">
                        <img
                          src={preview || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                        />
                        <div className="absolute top-2 right-2">
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="h-6 w-6 opacity-80 hover:opacity-100"
                            onClick={(e) => removeImage(index, e)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        {coverImageIndex === index && (
                          <Badge className="absolute bottom-2 left-2 bg-primary/90 text-xl" variant="default">
                            Copertina
                          </Badge>
                        )}

                        {/* Overlay per evidenziare l'hover */}
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent className="text-xl">
                    {coverImageIndex === index ? "Immagine di copertina" : "Clicca per impostare come copertina"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        )}
      </div>

      <Button type="submit" className="w-full text-xl cursor-pointer">
        Salva Prodotto
      </Button>
      {(errors.fields || errors.colors || errors.sizes || errors.images) && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
          <strong className="font-bold">Errore di validazione:</strong>
          <ul className="mt-1 list-disc list-inside">
            {errors.fields && <li>Tutti i campi devono essere compilati</li>}
            {errors.colors && <li>Seleziona almeno un colore</li>}
            {errors.sizes && <li>Seleziona almeno una taglia</li>}
            {errors.images && <li>Carica almeno una foto</li>}
          </ul>
        </div>
      )}
    </Form>
  )
}

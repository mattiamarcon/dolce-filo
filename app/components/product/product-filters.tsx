"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ProductFiltersProps {
  categories: string[]
  categoryFilter: string
  setCategoryFilter: (category: string) => void
  sortOrder: string
  setSortOrder: (order: string) => void
}

export default function ProductFilters({
  categories,
  categoryFilter,
  setCategoryFilter,
  sortOrder,
  setSortOrder,
}: ProductFiltersProps) {
  const [open, setOpen] = useState(false)

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value)
    setOpen(false) // Close the sheet after selection
  }

  return (
    <div className="flex justify-between items-center border-b bg-white py-3 px-4 sticky top-0 z-10 ">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 px-4">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="text-lg">Filters</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader >
            <SheetTitle>Filtri</SheetTitle>
            <SheetDescription>Filtra i prodotti per categoria</SheetDescription>
          </SheetHeader>
          <div className="py-6">
            <h3 className="text-2xl font-medium mb-4">Categoria</h3>
            <RadioGroup value={categoryFilter} onValueChange={handleCategoryChange} className="space-y-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <RadioGroupItem value={category} id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`} className="cursor-pointer text-lg">
                    {category === "all" ? "Tutte le categorie" : category}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </SheetContent>
      </Sheet>

      <Select value={sortOrder} onValueChange={setSortOrder}>
        <SelectTrigger className="w-[140px] border-none shadow-none focus:ring-0 px-4">
          <div className="flex items-center">
            <span className="text-lg">Ordina per</span>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Predefinito</SelectItem>
          <SelectItem value="price-low-high">Prezzo: dal più basso</SelectItem>
          <SelectItem value="price-high-low">Prezzo: dal più alto</SelectItem>
          <SelectItem value="name-a-z">Nome: A-Z</SelectItem>
          <SelectItem value="name-z-a">Nome: Z-A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}





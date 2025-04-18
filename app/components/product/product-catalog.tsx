"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/app/components/product/product-card"
import ProductFilters from "@/app/components/product/product-filters"
import { Product } from "@/utils/types/types"
import { supabaseClient } from "@/utils/supabase/client"

export default function ProductCatalog() {

  const dbClient=supabaseClient();

  const [products,setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortOrder, setSortOrder] = useState("default")

  useEffect(()=>{

    async function getProdotti(){
      const {data} = await dbClient.from("prodotti").select();      
      
      if(data){
        const prodotti = data.map((prodotto) => ({
          id: prodotto.id,
          nome: prodotto.nome,
          descrizione: prodotto.descrizione,
          prezzo: prodotto.prezzo,
          categoria: prodotto.categoria,
          immagine:prodotto.immagine
        }))
        

        setProducts(prodotti)
        setFilteredProducts(prodotti)
      }
    }

    getProdotti();
  },[])
  
  // Get unique categories from products
  const categories = ["all", ...new Set(products.map((product) => product.categoria))]

  useEffect(() => {
    let result = [...products]

    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter((product) => product.categoria === categoryFilter)
    }

    // Apply sort order
    if (sortOrder === "price-low-high") {
      result = result.sort((a, b) => a.prezzo - b.prezzo)
    } else if (sortOrder === "price-high-low") {
      result = result.sort((a, b) => b.prezzo - a.prezzo)
    } else if (sortOrder === "name-a-z") {
      result = result.sort((a, b) => a.nome.localeCompare(b.nome))
    } else if (sortOrder === "name-z-a") {
      result = result.sort((a, b) => b.nome.localeCompare(a.nome))
    }

    setFilteredProducts(result)
  }, [categoryFilter, sortOrder])

  return (
    <div className="grid grid-cols-1 gap-0">
      <ProductFilters
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}


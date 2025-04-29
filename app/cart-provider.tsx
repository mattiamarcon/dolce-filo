"use client"

import type React from "react"

import type { CartProduct, Product } from "@/utils/types/types"
import { createContext, useContext, useState } from "react"



// Define a proper type for the context
type CartContextType = {
  cart: CartProduct[]
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>
}

// Create context with a default value that matches the type
export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
})

export default function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // Initialize cart as an empty array
  const [cart, setCart] = useState<CartProduct[]>([])

  // Provide the context value
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)

  // Add error handling to catch when context is used outside provider
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider")
  }

  return context
}

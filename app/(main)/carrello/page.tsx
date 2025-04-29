"use client"

import { useCartContext } from "@/app/cart-provider"

function Carrello() {
  const { cart, setCart } = useCartContext()

  // Make sure cart exists and is an array before trying to use it
  console.log("Cart items:", Array.isArray(cart) ? cart.length : "Cart is not an array")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CARRELLO</h1>

      {!cart || cart.length === 0 ? (
        <p>Il tuo carrello è vuoto</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="border p-4 rounded-md flex justify-between items-center">
              <div>
                <h3 className="font-medium">{item.product.nome}</h3>
                <p className="text-muted-foreground">€{item.product.prezzo}</p>
              </div>
              <button
                onClick={() => {
                  const newCart = [...cart]
                  newCart.splice(index, 1)
                  setCart(newCart)
                }}
                className="text-red-500 hover:text-red-700"
              >
                Rimuovi
              </button>
            </div>
          ))}

          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-bold">
              <span>Totale:</span>
              <span>€{cart.reduce((total, item) => total + item.product.prezzo, 0)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carrello
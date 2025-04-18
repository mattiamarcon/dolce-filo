import { MapPin, Truck, Clock } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black">Le Nostre Spedizioni</h1>

      {/* Ritiro a mano */}
      <section className="mb-16 bg-white p-8 border border-gray-200">
        <div className="flex items-center gap-4 mb-8">
          <MapPin className="h-8 w-8 text-black" />
          <h2 className="text-3xl md:text-4xl font-bold text-black">Ritiro a mano in zona:</h2>
        </div>

        <div className="space-y-8 text-lg">
          <div className="p-6 border-b border-gray-200">
            <p className="text-2xl font-medium text-black">1. Zona San Polo di Piave - Oderzo (TV)</p>
            <p className="text-xl text-gray-700 mt-2">Disponibile dal lunedì al venerdì, 9:00 - 18:00</p>
          </div>

          <div className="p-6 border-b border-gray-200">
            <p className="text-2xl font-medium text-black">2. Ghirano - Prata di Pordenone (PN)</p>
            <p className="text-xl text-gray-700 mt-2">Disponibile dal lunedì al venerdì, 9:00 - 18:00</p>
          </div>

          <div className="p-6">
            <p className="text-2xl font-medium text-black">3. Noventa - San Donà di Piave (VE)</p>
            <p className="text-xl text-gray-700 mt-2">Disponibile dal lunedì al venerdì, 9:00 - 18:00</p>
          </div>
        </div>
      </section>

      {/* Spedizioni */}
      <section className="bg-white p-8 border border-gray-200">
        <div className="flex items-center gap-4 mb-8">
          <Truck className="h-8 w-8 text-black" />
          <h2 className="text-3xl md:text-4xl font-bold text-black">Spedizioni in Italia</h2>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-7 w-7 text-black" />
            <p className="text-2xl font-bold text-black">Consegna in 24/48 ore</p>
          </div>
          <p className="text-xl text-gray-700 pl-10">Spediamo in tutta Italia con consegna rapida e tracciabile</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-lg">
          <div className="p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-3">Spedizione Standard</h3>
            <p className="text-xl text-gray-700 mb-3">Consegna in 24/48 ore lavorative</p>
            <p className="text-2xl font-bold text-black">€5,90</p>
          </div>

          <div className="p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-3">Spedizione Gratuita</h3>
            <p className="text-xl text-gray-700 mb-3">Per ordini superiori a €49</p>
            <p className="text-2xl font-bold text-black">€0,00</p>
          </div>
        </div>
      </section>
    </div>
  )
}

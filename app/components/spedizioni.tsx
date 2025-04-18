import { Package, Truck } from "lucide-react"


export function Spedizioni() {
  const shippingOptions = [
    {
      id: 1,
      title: "Spedizione",
      description: "Spedizione in tutta Italia in 24/48h",
      icon: Truck,
    },
    {
      id: 2,
      title: "Ritiro a mano",
      description: `Ritiro a mano in zona: Treviso,Pordenone,Venezia`,
      icon: Package,
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Ecco le modalità di ritiro e spedizione del tuo ordine 📦
        </p>
        <p className="text-muted-foreground mb-6 text-md md:text-lg">Scegli l&apos;opzione che preferisci al momento dell&apos;acquisto.</p>
        <p className="text-muted-foreground  md:text-lg">Per qualsiasi informazione contattami in privato.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {shippingOptions.map((option) => (
          <div key={option.id} className="flex flex-col items-center text-center p-8 border border-gray-100 bg-white">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f5f5f5] mb-4">
              <option.icon className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl mb-2">{option.title}</h3>
            <p className="text-md text-muted-foreground">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


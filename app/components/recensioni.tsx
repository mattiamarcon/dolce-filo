import { Star } from "lucide-react"

export function Recensioni() {
  const reviews = [
    {
      id: 1,
      name: "Marco Rossi",
      location: "Milano",
      rating: 5,
      text: "Ho ordinato una t-shirt personalizzata con il logo della mia azienda. La qualità del ricamo è eccezionale e il servizio clienti è stato impeccabile. Consiglio vivamente questo brand per chi cerca prodotti di alta qualità.",
      date: "15/03/2023",
    },
    {
      id: 2,
      name: "Giulia Bianchi",
      location: "Roma",
      rating: 5,
      text: "Le pochette personalizzate che ho ordinato per il matrimonio di mia figlia sono state un successo! Tutti gli ospiti le hanno adorate. La qualità del tessuto e dei ricami è superiore a qualsiasi cosa abbia visto prima.",
      date: "22/05/2023",
    },
    {
      id: 3,
      name: "Luca Verdi",
      location: "Napoli",
      rating: 5,
      text: "Servizio rapido e professionale. I cappelli personalizzati per il nostro team sportivo sono fantastici e di ottima qualità. Apprezzo particolarmente l'attenzione ai dettagli e la precisione del ricamo.",
      date: "10/07/2023",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviews.map((review) => (
        <div key={review.id} className="flex flex-col p-8 bg-[#f5f5f5]">
          <div className="flex mb-4">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <p className="text-lg leading-relaxed mb-6 italic">`{review.text}`</p>
          <div className="mt-auto ">
            <p className="font-medium text-md">{review.name}</p>
            <p className="text-s text-muted-foreground">{review.location}</p>
            <p className="text-s text-muted-foreground mt-1">{review.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}


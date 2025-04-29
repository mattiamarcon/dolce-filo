import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Prodotti } from "@/app/components/product/products"
import { Recensioni } from "@/app/components/recensioni"
import { Spedizioni } from "@/app/components/spedizioni"
import { DomandeFrequenti } from "@/app/components/domandeFrequenti"


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh]">
        <div className="absolute inset-0">
          <Image
            src="/hero.webp"
            alt="Prodotto ricamato personalizzato"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-8xl font-light tracking-wide text-white mb-8">
              RICAMI
              <br />
              ARTIGIANALI
            </h1>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-2xl font-medium tracking-wide shadow-lg"
            >
              <Link href="/prodotti" className="flex items-center gap-2">
                SCOPRI I PRODOTTI
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-light text-center mb-12">PRODOTTI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
          <Prodotti title="T-SHIRT" image="/t-shirt.webp" href="/prodotti" />
          <Prodotti title="BORSE" image="/borse.webp" href="/prodotti" />
          <Prodotti title="ACCESSORI" image="/accessori.webp" href="/prodotti" />
        </div>
      </div>
    </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-lg">
              <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">CHI SONO?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dal 2010 creiamo prodotti ricamati personalizzati di alta qualità, combinando tecniche artigianali
                tradizionali con design contemporaneo. Ogni pezzo è realizzato a mano nel nostro laboratorio in Italia,
                con materiali selezionati per garantire qualità e durabilità.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                La nostra missione è trasformare le vostre idee in creazioni uniche che raccontano una storia. Che si
                tratti di un regalo speciale o di un progetto aziendale, mettiamo la stessa cura e passione in ogni
                dettaglio.
              </p>
              <Button variant="outline" size="lg" className="text-xl" asChild>
                <Link href="/about">SCOPRI DI PIÙ</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-[600px]">
              <Image
                src="/deborah.webp"
                alt="Il nostro laboratorio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 md:py-24 bg-white ">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-center mb-12">RECENSIONI</h2>
          <Recensioni />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-center mb-12">SPEDIZIONI</h2>
          <Spedizioni />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-12">DOMANDE FREQUENTI</h2>
          <DomandeFrequenti />
        </div>
      </section>
      
    </div>
  )
}


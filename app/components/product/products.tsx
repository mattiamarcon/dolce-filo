import Image from "next/image"
import Link from "next/link"

interface ProductCategoryProps {
  title: string
  image: string
  href: string
}

export function Prodotti({ title, image, href }: ProductCategoryProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative w-full max-w-[400px] overflow-hidden mx-auto">
        <div className="aspect-[3/4] relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="font-serif text-5xl md:text-3xl lg:text-5xl text-white">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}



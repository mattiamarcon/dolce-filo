import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t border-gray-200">
      <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg mb-4">Dolce Filo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creiamo prodotti ricamati personalizzati di alta qualità, combinando tecniche artigianali tradizionali con
              design contemporaneo.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Contatti</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">Via Roma 123, 00100 Roma, Italia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+39 348 6813217</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:dolcefilo@gmail.com" className="text-muted-foreground hover:text-foreground">
                    dolcefilo@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/dolcefilo___/" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>                                                          
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DOLCE FILO</p>
        </div>
      </div>
    </footer>
  )
}


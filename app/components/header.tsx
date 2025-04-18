"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { supabaseClient } from "@/utils/supabase/client"


export function Header({isLogged}:{isLogged:boolean}) {

  const supabase= supabaseClient();

  const [open, setOpen] = useState(false)
  const router = useRouter();

  const [logged,setLogged]=useState(isLogged)

  useEffect(()=>{
    setLogged(isLogged)
  },[isLogged])

  async function signOut(){
    const { error } = await supabase.auth.signOut();



    setLogged(false)


    router.push("/");
    router.refresh();     
}

  const navigation = [
    { name: "Prodotti", href: "/prodotti" },
    { name: "Contatti", href: "/contatti" },
    { name: "Spedizioni", href: "/spedizioni" },
  ]

  const hideNavigation=[
    {name: "Aggiungi prodotto", href:"/dashboard/aggiungiProdotto"},
    {name: "Info prodotti", href:"/dashboard/infoProdotti"},
    {name: "Ordini", href:"/dashboard/ordini"},
  ]


  const handleNavigation = (href: string) => {
    setOpen(false)
    router.push(href) 
  }

  return (
    <header className="sticky top-0 z-[200] w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-3xl font-bold">Dolce filo🪡</span>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium"
              >
                {item.name}
              </Link>
            ))}  
             {logged && 
                    <>
                      {hideNavigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-2xl font-medium"
                          onClick={()=>setOpen(false)}
                        >
                          {item.name}
                        </Link>
                        ))}
                    </>
                  } 
            </div>
            {logged ? <button className="text-2xl font-medium cursor-pointer" onClick={()=>{signOut(), setOpen(false)}}>Log out</button> : <Link href={"/login"} className="text-2xl font-medium cursor-pointer">Accedi</Link>}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="md:hidden ml-auto">
          <Menu className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col space-y-5 pt-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-medium"
                    onClick={()=>setOpen(false)}
                  >
                    {item.name}
                  </Link>
                  ))}
                  {logged && 
                    <>
                      {hideNavigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-2xl font-medium"
                          onClick={()=>setOpen(false)}
                        >
                          {item.name}
                        </Link>
                        ))}
                    </>
                  } 
                 {logged ? <button className="text-2xl font-medium w-fit" onClick={()=>{signOut(), setOpen(false)}}>Log out</button> : <Link href={"/login"} onClick={()=>setOpen(false)} className="text-2xl font-medium cursor-pointer">Accedi</Link>}
          </nav>
          
        </SheetContent>
      </Sheet>
      </div>
    </header>
  )
}

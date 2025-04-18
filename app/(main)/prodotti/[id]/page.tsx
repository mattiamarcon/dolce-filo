"use client"

import { useEffect, useState } from "react"

import { supabaseClient } from "@/utils/supabase/client"
import { Colore, Immagine, Product, Taglia } from "@/utils/types/types"
import SkeletonProduct from "@/app/components/product/SkeletonProduct"
import ProductMain from "@/app/components/product/productMain"


export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const dbClient=supabaseClient();

  const [id, setId] = useState("")
  const [product,setProduct] = useState<Product>();
  const [immagini,setImmagini] = useState<Immagine[]>();
  const [taglie,setTaglie] = useState<Taglia[]>();
  const [colori,setColori] = useState<Colore[]>();


  useEffect(()=>{
    async function loadSlug(){
      const { id } = await params;
      console.log(id)
      setId(id)
    }
    loadSlug();
  },[])

  useEffect(()=>{
    async function getProdotti(){
      const {data} = await dbClient.from("prodotti").select().eq("id", id);  
      
      if(data){
        const prodotti = {
          id: data[0].id,
          nome: data[0].nome,
          descrizione: data[0].descrizione,
          prezzo: data[0].prezzo,
          categoria: data[0].categoria,
          immagine:data[0].immagine
        }     

        // console.log(prodotti)

        setProduct(prodotti)
      }
    }

    async function getTaglie(){
      const { data } = await dbClient.from('taglia').select().eq("idProdotto",id)
      
      if(data){
        const taglie = data.map((taglia) => ({
          id:taglia.id,
          idProdotto:taglia.prodotto,
          taglia:taglia.taglia
        })) 

        setTaglie(taglie)
      }
    }

    async function getColori(){
      const { data } = await dbClient.from('colore').select().eq("idProdotto",id)
      
      if(data){
        const colori = data.map((colore) => ({
          id:colore.id,
          idProdotto:colore.prodotto,
          colore: colore.colore,
        })) 

        setColori(colori)
      }
    }

    async function getImmagini(){
      const { data } = await dbClient.from('immagini').select().eq("idProdotto",id)
      
      if(data){
        const immagini = data.map((immagine) => ({
          id:immagine.id,
          idProdotto:immagine.prodotto,
          link: immagine.link,
        })) 

        setImmagini(immagini)
      }
    }

    getProdotti();
    getImmagini();
    getTaglie();
    getColori();
  },[id])



  return (
    <>
      {!(immagini && product && taglie && colori) ? 
      <SkeletonProduct />

:
      <ProductMain prodotto={product} immagini={immagini} taglie={taglie} colori={colori} />
    }    
    </> 
  )
}

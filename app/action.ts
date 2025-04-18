'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { supabaseServer } from '@/utils/supabase/server'
import { Product } from '@/utils/types/types'


export type FormState={
    message?:string
}
  
export async function login(state:FormState,formData:FormData) {
  const supabase = await supabaseServer();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return {message:"Credenziali errate"}
  }

  revalidatePath('/')
  redirect("/")
}

export async function addProduct(product:Product){
  const supabase = await supabaseServer();

  const {
    nome,
    prezzo,
    descrizione,
    categoria,
    immagine
  } = product;

  const { error } = await supabase
  .storage
  .from('immaginprodotto')
  .upload(immagine.name, immagine)

  if(error){
    console.log(error)
  }

  const {data} = await supabase.storage.from("immaginprodotto").getPublicUrl(immagine.name);

  await supabase.from("prodotti").insert({
    nome,
    prezzo,
    descrizione,
    categoria,
    immagine:data.publicUrl
  })

  redirect("/prodotti")
}

export async function addImages(nome:string,images:File[]){

  const supabase = await supabaseServer();

  images.forEach(async (img:File)=>{
    await supabase
      .storage
      .from('immaginprodotto')
      .upload(img.name, img)
  })

  const urls= await fetchUrls(images);

  const id= await supabase.from("prodotti").select("id").eq("nome",nome);

  if(id.data){
    urls.forEach(async (url)=>{
      const {error}= await supabase.from("immagini").insert({
          link:url,
          idProdotto:id.data[0].id
        })
        if(error)
          console.log(error)
    })
  }
}

async function fetchUrls(images:File[]){

  const supabase = await supabaseServer();

  const urls:string[]=[];

  images.forEach(async (img:File)=>{
    const {data}=  supabase.storage.from("immaginprodotto").getPublicUrl(img.name)
    urls.push(data.publicUrl);
  })

  return urls;
}

export async function addColors(nome:string,colors:string[]){

  const supabase = await supabaseServer();

  const id= await supabase.from("prodotti").select("id").eq("nome",nome);

  if(id.data){
    colors.forEach(async (colore)=>{
      const {error}= await supabase.from("colore").insert({
          colore,
          idProdotto:id.data[0].id
        })
        if(error)
          console.log(error)
    })
  }
}

export async function addSizes(nome:string,taglie:string[]){

  const supabase = await supabaseServer();

  const id= await supabase.from("prodotti").select("id").eq("nome",nome);

  if(id.data){
    taglie.forEach(async (taglia)=>{
      const {error}= await supabase.from("taglia").insert({
          taglia,
          idProdotto:id.data[0].id
        })
        if(error)
          console.log(error)
    })
  }
}
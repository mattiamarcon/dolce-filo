export interface Product {
    id: number
    nome: string
    descrizione: string
    prezzo: number
    categoria: string
    immagine:File
}

export interface Immagine {
    id: number
    idProdotto: number
    link:string
}

export interface Taglia {
    id: number
    idProdotto: number
    taglia:string
}

export interface Colore {
    id: number
    idProdotto: number
    colore:string
}

export interface CartProduct{
    product:Product,
    color:string,
    size:string
  }
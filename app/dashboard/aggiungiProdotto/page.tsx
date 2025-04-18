import ProductForm from '@/app/components/product/addProduct'

function aggiungiProdotto() {
  return (
    <main className="w-full mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Aggiungi Nuovo Prodotto</h1>
      <ProductForm />
    </main>  
  )
}

export default aggiungiProdotto
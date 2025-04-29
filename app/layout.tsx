import type { Metadata } from "next";
import "./globals.css";
import { Cormorant } from "next/font/google";
import CartProvider from "@/app/cart-provider"
import { Toaster } from "@/components/ui/sonner"



const cormorant= Cormorant({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Dolce filo",
  description: "Dolce filo shop",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${cormorant.className} antialiased`}
      >        
        <CartProvider>{children}</CartProvider>   
        <Toaster />   
      </body>
    </html>
  );
}

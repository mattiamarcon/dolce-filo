import type { Metadata } from "next";
import "./globals.css";
import { Cormorant } from "next/font/google";



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
        {children}
      </body>
    </html>
  );
}

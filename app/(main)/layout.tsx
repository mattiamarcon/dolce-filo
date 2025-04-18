import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { supabaseServer } from "@/utils/supabase/server"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const dbServer= await supabaseServer();  

  const {data} = await dbServer.auth.getUser();


  return (
    <>  
        <Header isLogged={!!data.user} />
        {children}
        <Footer />
    </>
  );
}
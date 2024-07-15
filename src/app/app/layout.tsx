import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function AppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return( 
            <div className="flex flex-col min-h-screen" >
                <div className="w-full md:px-40">
                    <Navbar/>
                </div>
                <div className="flex-grow overflow-y-auto col-span-6 md:px-40">
                    {children} 
                </div>   
                <div className="w-full">
                    <Footer/>
                </div>
            </div>
    );

  }
    "use client";

import Link from "next/link";

    export default function App () {

        return (
            <main className="flex flex-col md:flex md:flex-col md:items-center md:gap-2">
                <div className="flex justify-center pt-12 pb-4">
                    <p className="text-md text-center font-bold p-1 border-y-2 border-red-500">Om oss</p>
                </div>
                <div className="flex flex-col-2 gap-8 justify-between pb-12 border-b-2 border-black">
                    <div className="flex items-center w-10/12">
                        <h1 className="text-center text-3xl md:text-md mx-48 font-bold font-static">
                        Välkommen till Trollbäckens Minilivs, din nya lokala butik! Här kan du handla alla dina dagligvaror,
                        hämta ut paket med Instabox och beställa catering för alla tillfällen.
                        Beställ hem dina varor smidigt med hjälp av Foodora och få dem levererade direkt till din dörr.
                        Ta en paus från vardagen och njut av en god fika i vår mysiga hörna.
                         Vi ser fram emot att välkomna dig och erbjuda bästa möjliga service! Välkommen in till oss!
                        </h1>
                    </div>
                    <div className="flex items-center w-10/12">
                        <img src="/images/minilivs1.jpg" className=" w-80 h-80 object-cover"/>
                    </div>                
                </div>
                <div className="flex justify-center pt-12 pb-4">
                    <p className="text-md text-center font-bold p-1 border-y-2 border-red-500">Vårt utbud</p>
                </div>
                <div className="flex justify-center">
                    <h2 className="text-center text-3xl md:text-md mx-60 font-static font-bold">
                        På Trollbäckens Minilivs erbjder vi ett brett utbud av tjänster för att underlätta din vardag.
                        Hämta enkelt ut dina paket via Instabox och beställ matvaror hem med hjälp av Foodora.
                        Vi erbjuder även catering för alla typer av tillställningar, från små möten till stora fester.
                        Vårt kafé har en trevlig meny med nybryggt kaffe, bakverk och lättare måltider.
                        Välkommen att utforska vårt utbud och njut av vår service!
                    </h2>
                </div>
                <div className="grid grid-cols-2 justify-items-center py-14 md:flex md:flex-col-4 md:gap-6 md:justify-between md:py-16"> 
                    <div className="flex flex-col items-center mb-8 gap-6 md:gap-8 md:mt-2 w-10/12 md:w-3/12">
                        <img src="https://zimply.ai/wp-content/uploads/2023/02/foodora-logo-1.png" className="w-52 mt-1"/>
                        <p className=" md:mx-12 text-2xl text-center font-static font-bold">
                        Med Foodora kan du enkelt beställa dina varor från Trollbäckens Minilivs och få dem levererade direkt hem till dig.
                         Ladda ner Foodora-appen, sök efter vår butik, och välj de produkter du vill ha.
                          När du har slutfört din beställning, levererar vi snabbt och smidigt dina varor till din dörr.
                           Du kan beställa under butikens öppettider, vilket ger dig maximal flexibilitet och bekvämlighet.
                            Handla enkelt och bekvämt med Foodora!
                        </p>
                    </div>
                    <div className="flex flex-col items-center mb-8 gap-2 w-10/12 md:gap-6 md:w-3/12">
                    <img src="https://images.prismic.io/logtrade/323f0f56-5838-4aa4-a7a9-c0d9f488cb41_instabox.png?auto=compress,format" className="w-52"/>
                        <p className="md:mx-12 text-2xl text-center font-static font-bold">
                            Med Instabox kan du enkelt och smidigt hämta dina paket hos Trollbäckens Minilivs.
                             När du har beställt dina varor online och valt Instabox som leveransalternativ,
                              får du en kod som du använder för att hämta ditt paket från vår Instabox-automat.
                               Det är snabbt och bekvämt, och du kan hämta ut dina paket under butikens öppettider.
                                Besök oss för en enkel och flexibel paketupphämtning!
                        </p>
                    </div>
                    <div className="flex flex-col items-center mb-8 gap-5 w-10/12 md:w-3/12">
                        <div className="flex gap-1 items-center">
                        <img src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/ZR5Is58qLO-no-background-6KIG6WJmxivfezc36c9W4PxdIlIjyu.png" className="w-16"/>
                            <p className="text-center">Catering</p>
                        <img src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/ZR5Is58qLO-no-background-6KIG6WJmxivfezc36c9W4PxdIlIjyu.png" className="w-16"/>
                        </div>
                        <p className="md:mx-12 text-2xl text-center font-static font-bold">
                            Välkommen att fika hos oss på Trollbäckens Minilivs! I vårt mysiga kafé kan du njuta av allt från fräscha mackor och smakrika bakverk
                             till goda korvar. Oavsett om du vill ha en snabb paus eller en längre stunds avkoppling,
                              erbjuder vi en trivsam miljö där du kan njuta av våra läckerheter.
                               Ta en paus och unna dig något gott hos oss!
                               För att lägga en beställning på catering, klicka på knappen nedan!
                        </p>
                        <Link href="/app/catering" className="p-1 rounded-xl bg-blue-600">Catering</Link>
                    </div>
                    <div className="flex flex-col items-center mb-8 mt-2 gap-7 w-10/12 md:w-3/12">
                        <div className="relative">
                            <img src="https://matpriskollen.se/wp-content/uploads/2023/02/shutterstock_2125529039-1024x312.jpg" className="w-52 h-12 object-cover rounded-xl " alt="Matpriskollen"/>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-md">
                                <p className="text-sm text-center font-bold">Matvaror</p>
                            </div>
                        </div>
                        <p className="md:mx-12 text-2xl text-center font-static font-bold">
                            På Trollbäckens Minilivs har vi ett brett utbud av varor som täcker allt du kan tänkas behöva i vardagen.
                            Från färska livsmedel och mejeriprodukter till hushållsartiklar och hygienprodukter, hittar du allt på ett ställe.
                            Vi strävar efter att erbjuda hög kvalitet och bra priser på alla våra produkter,
                            så att du enkelt kan göra alla dina inköp hos oss. Välkommen att utforska vårt omfattande sortiment!
                        </p>
                    </div>
                </div>
            </main>
        )
    }
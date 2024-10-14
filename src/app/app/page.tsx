    "use client";

import OpenSign from "@/components/OpenSign";
import Link from "next/link";

    export default function App () {

        return (
            <main className="flex flex-col md:flex md:flex-col-2 md:items-center md:gap-2">
                <div className="flex justify-center pt-8">
                    <p className=" mb-4 text-md text-center font-bold p-1 border-y-2 border-pink-950">Om oss</p>
                </div>
                <div className="flex flex-col md:flex md:flex-row items-center gap-8 md:justify-between pb-4 border-b-4 border-pink-950">
                    <div className="flex justify-center w-10/12">
                        <h1 className="text-center text-lg md:text-3xl md:mx-48 font-bold font-philosopher">
                        Välkommen till Trollbäckens Minilivs, din nya lokala butik! Här kan du handla alla dina dagligvaror,
                        hämta ut paket med Instabox och beställa catering för alla tillfällen.
                        Beställ hem dina varor smidigt med hjälp av Foodora och få dem levererade direkt till din dörr.
                        Ta en paus från vardagen och njut av en god fika i vår mysiga hörna.
                         Vi ser fram emot att välkomna dig och erbjuda bästa möjliga service! Välkommen in till oss!
                        </h1>
                    </div>
                    <div className="w-[20rem] h-[2orem] md:w-[30rem] md:h-[30rem] md:mr-20 md:pt-22 ">       
                        <img src="/images/minilivs2.jpg" className="w-full h-full rounded-xl "/>
                    </div>
 
                </div>
                <div className="flex justify-center pt-12 pb-4">
                    <p className="text-md text-center font-bold p-1 border-y-2 border-pink-950">Vårt utbud</p>
                </div>
                <div className="flex justify-center px-12">
                    <h2 className="text-center text-lg md:text-3xl md:mx-60 font-philosopher font-bold">
                        På Trollbäckens Minilivs erbjuder vi ett brett utbud av tjänster för att underlätta din vardag.
                        Hämta enkelt ut dina paket via Instabox och beställ matvaror hem med hjälp av Foodora.
                        Vi erbjuder även catering för alla typer av tillställningar, från små möten till stora fester.
                        Vårt kafé har en trevlig meny med nybryggt kaffe, bakverk och lättare måltider.
                        Välkommen att utforska vårt utbud och njut av vår service!
                    </h2>
                </div>
                <div className="flex justify center gap-6 md:gap-32">
                    <div>
                        <img src="https://zimply.ai/wp-content/uploads/2023/02/foodora-logo-1.png" className="w-18 h-10 md:w-52 md:h-10 mt-2 ml-1"/>
                        <div className="flex justify-center mt-2">
                            <Link href="https://www.foodora.se/shop/it94/trollbackens-minilivs" className="text-xs md:text-lg text-center p-2 rounded-xl bg-pink-950 text-white font-cinzel font-bold hover:bg-pink-900 ">BESTÄLL FOODORA HÄR</Link>
                        </div>
                    </div>
                    <img src="https://images.prismic.io/logtrade/323f0f56-5838-4aa4-a7a9-c0d9f488cb41_instabox.png?auto=compress,format" className="mt-2 w-40 h-12 md:mt-0 md:mb-10 md:h-16 md:w-52"/>

                    </div>
                <div>
                    <div className="flex justify-center pt-16 pb-4">
                        <p className="md:text-3xl text-xl font-philosopher text-center font-bold p-1 border-y-2 border-pink-950">Vill du beställa catering eller frukost för ditt företag?</p>
                    </div>
                    <div>
                    <h2 className="text-center text-lg md:text-3xl md:mx-60 font-philosopher font-bold mx-4">
                    Kickstarta dagen med en härlig frukost levererad direkt till ert företag! Vi samarbetar med er för att sätta ihop ett utbud som passar just era behov, med nybakade bullar, goda smörgåsar och fräsch frukt. Perfekt för att ge energi inför möten eller för att skapa en trevlig start på arbetsdagen tillsammans med kollegorna.
                    <br/>
                    <br/>
                    Vi anpassar allt efter era önskemål, så att ni enkelt kan njuta av en god frukost utan stress. Det handlar inte om färdiga lösningar – vi jobbar tillsammans med er för att skapa den bästa upplevelsen.
                    <br/>
                    <br/>
                    Förutom frukost levererar vi också catering för alla tillfällen. Oavsett om det handlar om ett affärsmöte, en företagsfest eller en privat tillställning, kan vi erbjuda allt från läckra charkbrickor och sallader till andra smakrika rätter. Tillsammans med er ser vi till att varje tillfälle blir något extra.

                    <br/>
                    <br/>
                    Kontakta oss så ordnar vi frukostleveransen eller catering till ert nästa event – anpassat och enkelt!
                    </h2>
                    <div className="flex justify-center pb-20 pt-2">
                        <Link href="/app/catering" className="text-center p-2 rounded-xl bg-pink-950 text-white font-cinzel font-bold hover:bg-pink-900 ">Catering</Link>
                    </div>
                    </div>
                </div>
                
            </main>
        )
    }
export default function Footer () {
    return(
        <footer className="relative bottom-0">
            <div className="grid grid-cols-3 items-center h-36 py-4 px-20 bg-gradient-to-r from-blue-950 to-red-700">
                <div className="flex flex-col items-center px-20 text-white">
                    <p className="text-xl">Öppettider:</p>
                    <p className="text-sm">Vardagar: 08-20</p>
                    <p className="text-sm">Helger: 09-18</p>
                </div>
                <div className="flex flex-col items-center px-20 text-white">
                    <p className="text-xl text-white">Address:</p>
                    <a href="https://www.hitta.se/trollb%C3%A4ckens+minilivs+ab/tyres%C3%B6/jmsbbzaop" className="text-sm ml-10 underline">Vendelsövägen 60<br/> 135 53 Tyresö</a>
                </div>
                <div className="flex flex-col items-center px-20 text-white">
                    <p className="text-xl text-white">Kontakt:</p>
                    <div className="flex flex-col items-start">
                    <p className="text-sm ml-6">Telefon:</p>
                    <p className="text-sm ml-6">073-392-1869</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
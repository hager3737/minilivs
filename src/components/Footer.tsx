export default function Footer () {
    return(
        <footer className="relative bottom-0">
            <div className="grid grid-cols-3 items-center md:h-36 h-44 py-4 md:px-20 bg-pink-950">
                <div className="flex flex-col items-center md:px-20 text-white">
                    <p className="text-xl">Öppettider:</p>
                    <p className="text-sm mt-2 md:mr-2.5">Mån-Lör 08-20</p>
                    <p className="text-sm">Söndagar: 09-18</p>
                </div>
                <div className="flex flex-col items-center md:px-20 text-white">
                    <p className="text-xl text-white mt-4 md:mt-0">Address:</p>
                    <a href="https://www.google.com/maps/place/Trollb%C3%A4ckens+Minilivs/@59.2188623,18.2092639,17z/data=!3m1!4b1!4m6!3m5!1s0x465f7f0054941365:0x6da3f0ea0d5ec72c!8m2!3d59.2188623!4d18.2092639!16s%2Fg%2F11vrldgf1z?entry=ttu" className="text-sm mt-2 ml-7 md:ml-10 underline">Vendelsövägen 60<br/> 135 53 Tyresö</a>
                </div>
                <div className="flex flex-col items-center md:px-20 text-white">
                    <p className="text-xl text-white">Kontakt:</p>
                    <div className="flex flex-col items-start">
                    <p className="text-sm ml-6 mt-2">Telefon:</p>
                    <p className="text-sm ml-6">073-392-1869</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
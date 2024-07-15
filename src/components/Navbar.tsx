"use client";

import Link from "next/link";
import OpenSign from "./OpenSign";

export default function Navbar () {
    return (
        <nav className="border-b-2 border-orange-600">
            <div className="flex justify-center py-6 md:py-12">
                <Link href="/app" className="text-2xl md:text-5xl text-black font-cinzel">Trollbäckens Minilivs</Link>
            </div>
        </nav>
    )
}
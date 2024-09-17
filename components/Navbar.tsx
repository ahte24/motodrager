import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MD from "@/public/MD.png"

const Navbar = () => {
    return (
        <header className="px-4 lg:px-6  h-16 flex items-center border-b">
            <Link href="/" className="flex items-center justify-center" prefetch={false}>
                <Image src={MD} width={100} height={100} alt="" />
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
            </nav>
        </header>
    )
}

export default Navbar

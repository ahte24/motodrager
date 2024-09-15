import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header className="px-4 lg:px-6  h-16 flex items-center border-b">
            <Link href="/" className="flex items-center justify-center" prefetch={false}>
                <span className="text-2xl font-semibold">MotoDrager</span>
                {/* <Image src={"/public/MD.png"} width={400} height={400} alt="" /> */}
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

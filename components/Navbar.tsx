"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image 
                        alt="Pixelnest Logo"
                        src="/PixelNest.svg"
                        width={115}
                        height={43}
                    />
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
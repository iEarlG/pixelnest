"use client";

import Link from "next/link";
import Image from "next/image";

import { NavLinks } from "@/constants";

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
                <ul className="xl:flex hidden text-start gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;

import Link from "next/link";
import Image from "next/image";

import { NavLinks } from "@/constants";
import AuthProviders from "@/components/AuthProviders";
import { getCurrentUsers } from "@/lib/session";

const Navbar = async () => {
    const session = await getCurrentUsers();

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
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {session?.user ? (
                    <>
                        {session?.user?.image && (
                            <Image 
                                alt={session?.user?.name}
                                src={session?.user?.image}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        )}
                        <Link href="/create-project">
                            Share your work!
                        </Link>
                    </>
                ): ( 
                    <AuthProviders />
                )}
            </div>
        </nav>
    );
}
 
export default Navbar;
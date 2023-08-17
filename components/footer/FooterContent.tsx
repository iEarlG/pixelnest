"use client";

import Link from "next/link";

interface FooterContentProps {
    title: string;
    links: Array<string>;
};

const FooterContent: React.FC<FooterContentProps> = ({ title, links }) => {
    return ( 
        <div className="footer_column">
            <h4 className="font-semibold">{title}</h4>
            <ul className="flex flex-col gap-2 font-normal">
                {links.map((link) => (
                <Link href="/" key={link}>
                    {link}
                </Link>
                ))}
            </ul>
        </div>
    );
}
 
export default FooterContent;
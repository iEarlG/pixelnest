"use client";

import Image from "next/image";

import { footerLinks } from "@/constants";
import FooterContent from "@/components/footer/FooterContent";

const Footer = () => {
    return ( 
        <footer className="flexStart footer">
            <div className="w-full flex flex-col gap-12">
                <div className="flex items-start flex-col">
                    <Image 
                        alt="Pixelnest Logo"
                        src="/PixelNest.svg"
                        width={115}
                        height={36}
                    />
                    <p className="max-w-xs text-start text-sm font-normal mt-5">PixelNest is leading platform where designers, developers, etc can enhance, 
                    share & grow their visibility and network.</p>
                </div>
                <div className="flex flex-wrap gap-8">
                    <FooterContent 
                        title={footerLinks[0].title}
                        links={footerLinks[0].links}
                    />

                    <div className="flex-1 flex flex-col gap-4">
                        <FooterContent 
                            title={footerLinks[1].title}
                            links={footerLinks[1].links}
                        />
                        <FooterContent 
                            title={footerLinks[2].title}
                            links={footerLinks[2].links}
                        />
                    </div>
                        <FooterContent 
                            title={footerLinks[3].title}
                            links={footerLinks[3].links}
                        />
                    <div className="flex-1 flex flex-col gap-4">
                        <FooterContent 
                            title={footerLinks[4].title}
                            links={footerLinks[4].links}
                        />
                        <FooterContent 
                            title={footerLinks[5].title}
                            links={footerLinks[5].links}
                        />
                    </div>
                        <FooterContent 
                            title={footerLinks[6].title}
                            links={footerLinks[6].links}
                        />
                </div>
            </div>

            <div className="flexBetween footer_copyright">
                <p>@2023 PixelNest. All rights reserved</p>
                <p className="text-gray">
                    <span className="text-black font-semibold">10,20202</span> projects submitted
                </p>
            </div>
        </footer>
    );
}
 
export default Footer;
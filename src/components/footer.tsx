"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import BlurFade from "./magicui/blur-fade";

export default function Footer() {
    const { language, getData } = useLanguage();
    const DATA = getData();

    return (
        <BlurFade delay={0.04}>
            <footer className="w-full h-12 max-w-2xl !mt-0 mx-auto flex justify-between items-end text-xs text-muted-foreground">
                <div className="h-9 w-full flex justify-between items-end">
                    <Link href="/" className="h-full w-auto">
                        <Image src="/logo-black-footer.png" width={180} height={82} alt="Logo" className="dark:hidden h-full w-auto" />
                        <Image src="/logo-white-footer.png" width={180} height={82} alt="Logo" className="hidden dark:inline-block h-full w-auto" />
                    </Link>
                    <div className="flex flex-col items-end space-y-1">
                        <Link href={language === "de" ? "/datenschutzerklaerung" : "/privacy-policy"} className="hover:underline">
                            {DATA.titles.datenschutz}
                        </Link>
                        <Link href={language === "de" ? "/impressum" : "/legal-notice"} className="hover:underline">
                            {DATA.titles.impressum}
                        </Link>
                    </div>
                </div>
            </footer>
        </BlurFade>
    );
}

// TODO: Open in new tab + no navbar

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
            <footer className="w-full h-12 max-w-2xl mb-10 min-[515px]:mb-0 mt-10 min-[515px]:!mt-0 mx-auto flex justify-between items-end text-xs text-muted-foreground">
                <div className="w-full flex h-full min-[515px]:h-9 justify-center min-[515px]:justify-between">
                    <Link href="/" className="h-full w-auto max-[515px]:hidden">
                        <Image src="/logo-black-footer.png" width={180} height={82} alt="Logo" className="dark:hidden h-full w-auto" />
                        <Image src="/logo-white-footer.png" width={180} height={82} alt="Logo" className="hidden dark:inline-block h-full w-auto" />
                    </Link>
                    <div className="flex flex-col items-center min-[515px]:items-end space-y-1">
                        <Link href="/datenschutzerklaerung" className="hover:underline">
                            {DATA.titles.datenschutz}
                        </Link>
                        <Link href="/impressum" className="hover:underline">
                            {DATA.titles.impressum}
                        </Link>
                    </div>
                </div>
            </footer>
        </BlurFade>
    );
}
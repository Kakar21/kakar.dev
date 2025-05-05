"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            type="button"
            size="icon"
            className="px-2"
            onClick={() => setLanguage(language === "de" ? "en" : "de")}
        >
            <span className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200">
                {language.toUpperCase()}
            </span>
        </Button>
    );
} 
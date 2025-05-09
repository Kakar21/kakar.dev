"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import * as React from "react";

export const LanguageToggle = React.forwardRef<
    HTMLButtonElement,
    React.HTMLAttributes<HTMLButtonElement>
>(({ onClick, ...props }, ref) => {
    const { language, setLanguage } = useLanguage();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setLanguage(language === "de" ? "en" : "de");
        onClick?.(e);
    };

    return (
        <Button
            variant="ghost"
            type="button"
            size="icon"
            className="px-2"
            onClick={handleClick}
            ref={ref}
            {...props}
        >
            <span className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200">
                {language.toUpperCase()}
            </span>
        </Button>
    );
});

LanguageToggle.displayName = "LanguageToggle"; 
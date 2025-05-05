"use client";

import { DATA } from "@/data/resume";
import { DATA_DE } from "@/data/resume-de";
import { createContext, useContext, useState } from "react";

export type Language = "de" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    getData: () => typeof DATA;
}

const translations = {
    en: {
        language: "Language",
        theme: "Theme",
        // Weitere statische Übersetzungen für UI-Elemente können hier hinzugefügt werden
    },
    de: {
        language: "Sprache",
        theme: "Farbschema",
        // Weitere statische Übersetzungen für UI-Elemente können hier hinzugefügt werden
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode; }) {
    const [language, setLanguage] = useState<Language>("de");

    // Funktion, um Übersetzungen für UI-Elemente zu holen
    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations[typeof language]] || key;
    };

    // Funktion, um die entsprechenden Daten basierend auf der Sprache zu holen
    const getData = () => {
        return language === "de" ? DATA_DE : DATA;
    };

    const value = {
        language,
        setLanguage,
        t,
        getData
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
}; 
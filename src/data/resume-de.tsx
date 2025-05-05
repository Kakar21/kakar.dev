import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA_DE = {
    ...DATA,
    description:
        "Software-Entwickler und Unternehmer. Ich liebe es, Dinge zu bauen und Menschen zu helfen. Sehr aktiv auf Twitter.",
    summary:
        "Ende 2022 kündigte ich meinen Job als Software-Entwickler, um mich vollzeit dem Aufbau und der Skalierung meiner eigenen SaaS-Unternehmen zu widmen. In der Vergangenheit [habe ich einen Doppelabschluss in Informatik und Betriebswirtschaft angestrebt](/#education), [Praktika bei großen Technologieunternehmen in Silicon Valley absolviert](https://www.youtube.com/watch?v=d-LJ2e5qKdE) und [zum Spaß an über 21 Hackathons teilgenommen](/#hackathons). Ich hatte auch das Vergnügen, Teil der ersten persönlichen Kohorte von buildspace, genannt [buildspace sf1](https://buildspace.so/sf1), zu sein.",
    avatarUrl: "/me.png",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Node.js",
        "Python",
        "Go",
        "Postgres",
        "Docker",
        "Kubernetes",
        "Java",
        "C++",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Startseite" },
        // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        ...DATA.contact,
        social: {
            ...DATA.contact.social,
            email: {
                ...DATA.contact.social.email,
                name: "E-Mail senden",
            },
        },
    },
    // Die restlichen Daten können nach Bedarf übersetzt werden
} as const; 
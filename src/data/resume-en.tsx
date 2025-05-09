import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA_EN = {
    ...DATA,
    description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
    summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        ...DATA.contact,
        social: {
            ...DATA.contact.social,
            email: {
                ...DATA.contact.social.email,
                name: "Send E-Mail",
            },
        },
    },
    // Die restlichen Daten können nach Bedarf übersetzt werden
} as const; 
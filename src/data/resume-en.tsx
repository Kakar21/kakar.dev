import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA_EN = {
    ...DATA,
    greeting: "Hi, I'm Mustafa",
    description:
        "Full-stack developer with a passion for AI and new technologies.",
    summary:
        "Since the beginning of 2025, I have been developing complex web applications with [React](https://nextjs.org/), [Node.js](https://nodejs.org/), [Laravel](https://laravel.com/) and [Zoho CRM](https://www.zoho.com/de/crm/) as a junior full-stack web developer. I make intensive use of AI tools such as [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com/), [Cursor AI](https://www.cursor.com/) and [v0](https://v0.dev/) to independently implement innovative products faster and more efficiently. I am particularly fascinated by how AI enables modern development methods and significantly improves my work.",
    titles: {
        about: "About me",
        work: "Work Experience",
        education: "Education",
        skills: "Skills",
        projects: "My Projects",
        projectsSubtitle: "Check out my latest work",
        projectsDescription:
            "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
        contact: "Contact",
        contactSubtitle: "Get in Touch",
        contactDescriptionBeforeLink: "Want to chat? Just shoot me ",
        contactLinkText: "an email",
        contactDescriptionAfterLink: " and I'll respond whenever I can. I will ignore all soliciting.",
        impressum: "Legal Notice",
        datenschutz: "Privacy Policy",
    },
    navbar: [
        // { href: "/", icon: HomeIcon, label: "Home" },
        // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        ...DATA.contact,
        social: {
            ...DATA.contact.social,
            "E-Mail": {
                ...DATA.contact.social["E-Mail"],
                name: "Send E-Mail",
            },
        },
    },
    // Die restlichen Daten können nach Bedarf übersetzt werden
    work: [
        {
            ...DATA.work[0],
            title: "Junior Full-Stack Web Developer",
            start: "January 2025",
            end: "Present",
            description:
                "I develop and implement modern web applications using technologies such as React, Node.js, HTML, CSS and JavaScript. I implement responsive and user-friendly front-end designs, develop and maintain back-end systems and databases and integrate third-party interfaces. I also support the planning and management of projects, carry out software tests and quality assurance measures and research new technologies to continuously improve development processes.",
        },
        {
            ...DATA.work[1],
            // company: "Self-employed", // Company name, likely no translation needed
            title: "Web Developer",
            start: "June 2024",
            end: "January 2025",
            description:
                "Created client websites with a focus on frontend technologies and occasionally worked with Shopify, WordPress and Firebase backends. Developed custom web solutions, gathered requirements directly from clients and implemented them. Honed my skills in UI/UX, clean code principles and developing customized digital products.",
        },
        {
            ...DATA.work[2],
            title: "Soldier",
            start: "January 2020",
            end: "December 2023",
            description:
                "During my service in the German Armed Forces, I went through training programs in electrical engineering and systems, dealing with electronic circuits and microcontrollers. Additionally, I gained experience in military vehicle maintenance, logistical operations and basic military skills such as strategic thinking, organization and team leadership.",
        },
    ],
    education: [
        {
            ...DATA.education[0],
            degree: "Qualified Web Developer Fullstack",
            start: "October 2023",
            end: "February 2025",
        },
    ],
    projects: [
        {
            ...DATA.projects[0],
            dates: "Nov 2024 - Apr 2025",
            description:
                "A streaming platform modeled on Netflix. Browse movies with intuitive operation and high-quality playback on any device.",
        },
        {
            ...DATA.projects[1],
            dates: "Mar 2024 - Sep 2024",
            description:
                "A user-friendly Slack clone app that enables easy team communication and collaboration through organized chats and channels.",
        },
        {
            ...DATA.projects[2],
            dates: "Jan 2024 - Feb 2024",
            description:
                "A jump-and-run game based on an object-oriented approach. Help Sharkie find coins and poison bottles to fight the killer whale.",
        },
        {
            ...DATA.projects[3],
            dates: "Dec 2023 - Jan 2024",
            description:
                "A task manager inspired by the Kanban system. Create and organize tasks with drag-and-drop functionality & assign users and categories.",
        },
    ],
} as const; 
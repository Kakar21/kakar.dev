import { Icons } from "@/components/icons";
import { Cloud, HomeIcon, NotebookIcon } from "lucide-react";
import { LiveIndicator } from "@/components/LiveIndicator";

export const DATA = {
  name: "Ghulammustafa Kakar",
  greeting: "Hi, ich bin Mustafa",
  initials: "GK",
  url: "https://kakar.dev",
  email: "ghulammustafa@kakar.dev",
  // location: "Braunschweig, Germany",
  // locationLink: "https://www.google.com/maps/place/wolfenbüttel",
  description:
    "Full-Stack-Entwickler mit Leidenschaft für KI und neue Technologien.",
  summary:
    "Seit Anfang 2025 entwickle ich als Junior Full-Stack Webentwickler komplexe Webanwendungen mit [React](https://nextjs.org/), [Node.js](https://nodejs.org/), [Laravel](https://laravel.com/) und [Zoho CRM](https://www.zoho.com/de/crm/). Dabei setze ich intensiv KI-Tools wie [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com/), [Cursor AI](https://www.cursor.com/) und [v0](https://v0.dev/) ein, um eigenständig innovative Produkte schneller und effizienter umzusetzen. Besonders fasziniert mich, wie KI moderne Entwicklungsmethoden ermöglicht und meine Arbeit entscheidend verbessert.",
  avatarUrl: "/me.jpg",
  titles: {
    about: "Über mich",
    work: "Berufserfahrung",
    education: "Ausbildung",
    skills: "Technologien",
    projects: "Projekte",
    projectsSubtitle: "Highlights meiner Arbeit",
    projectsDescription:
      "Von einfachen Webseiten bis zu komplexen Web-Apps – hier einige Favoriten, die ich präsentieren kann.",
    contact: "Kontakt",
    contactSubtitle: "Schreib mir einfach",
    contactDescriptionBeforeLink: "Du hast Fragen? Schick mir einfach ",
    contactLinkText: "eine E-Mail",
    contactDescriptionAfterLink: ". Ich antworte, sobald ich kann. Keine Werbung!",
    impressum: "Impressum",
    datenschutz: "Datenschutzerklärung",
  },
  skills: [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Node.js",
    "Django",
    "Laravel",
    "Python",
    "PHP",
    "MySQL",
    "Firebase",
    "Redis",
  ],
  navbar: [
    // { href: "/", icon: HomeIcon, label: "Startseite" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ghulammustafa@kakar.dev",
    tel: "+49 151 43356904",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Kakar21",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ghulammustafa-kakar",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,
        navbar: false,
      },
      "E-Mail": {
        name: "Send Email",
        url: "mailto:ghulammustafa@kakar.dev",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "escen GmbH",
      href: "https://escen.agency/",
      badges: [],
      location: "Hybrid",
      title: "Junior Full-Stack Webentwickler",
      logoUrl: "/escen.png",
      start: "Januar 2025",
      end: "Heute",
      description:
        "Ich entwickle und implementiere moderne Webanwendungen mit Technologien wie React, Node.js, HTML, CSS und JavaScript. Dabei setze ich responsive und benutzerfreundliche Frontend-Designs um, entwickle und warte Backend-Systeme und Datenbanken und integriere Drittanbieter-Schnittstellen. Zudem unterstütze ich die Planung und Steuerung von Projekten, führe Softwaretests und Qualitätssicherungsmaßnahmen durch und recherchiere neue Technologien zur kontinuierlichen Verbesserung der Entwicklungsprozesse.",
    },
    {
      company: "Freelancer",
      badges: [],
      href: "https://kakar.dev",
      location: "Remote",
      title: "Webentwickler",
      logoUrl: "/GK.png",
      start: "Juni 2024",
      end: "Januar 2025",
      description:
        "Erstellte Kundenwebseiten mit Fokus auf Frontend-Technologien und arbeitete gelegentlich mit Shopify, WordPress und Firebase-Backends. Entwickelte individuelle Weblösungen, sammelte Anforderungen direkt von Kunden und setzte diese um. Verfeinerte meine Fähigkeiten in UI/UX, sauberen Code-Prinzipien und der Entwicklung maßgeschneiderter digitaler Produkte.",
    },
    {
      company: "Bundeswehr",
      href: "https://bundeswehr.de/",
      badges: [],
      location: "Munster, Germany",
      title: "Soldat",
      logoUrl: "/bundeswehr.png",
      start: "Januar 2020",
      end: "Dezember 2023",
      description:
        "Während meiner Dienstzeit bei der Bundeswehr durchlief ich Ausbildungsprogramme in Elektrotechnik und Systemen, wobei ich mich mit elektronischen Schaltungen und Mikrocontrollern beschäftigte. Zusätzlich sammelte ich Erfahrungen in der Wartung von Militärfahrzeugen, logistischen Abläufen und grundlegenden militärischen Fähigkeiten wie strategischem Denken, Organisation und Teamführung.",
    },
  ],
  education: [
    {
      school: "Developer Akademie",
      href: "https://developerakademie.com/",
      degree: "Qualifizierter Web-Entwickler Fullstack",
      logoUrl: "/DA.png",
      start: "Oktober 2023",
      end: "Februar 2025",
    },
  ],
  projects: [
    {
      title: "Videoflix",
      href: "https://videoflix.kakar.dev",
      dates: "Nov 2024 - Apr 2025",
      active: true,
      description:
        "Eine Streaming-Plattform nach dem Vorbild von Netflix. Stöbere nach Filmen mit intuitiver Bedienung und hochwertiger Wiedergabe auf jedem Gerät.",
      technologies: [
        "Django",
        "Python",
        "Angular",
        "TypeScript",
        "HTML",
        "SCSS",
      ],
      links: [
        {
          type: "Demo",
          href: "https://videoflix.kakar.dev",
          icon: <LiveIndicator />,
        },
        {
          type: "Frontend",
          href: "https://github.com/Kakar21/Videoflix-Frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/Kakar21/Videoflix-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://backend.kakar.dev/videos/Videoflix.mp4",
    },
    {
      title: "DABubble",
      href: "https://dabubble.kakar.dev",
      dates: "März 2024 - Sept 2024",
      active: true,
      description:
        "Eine benutzerfreundliche Slack-Klon-App, die eine einfache Teamkommunikation und Zusammenarbeit durch organisierte Chats und Kanäle ermöglicht.",
      technologies: [
        "Angular",
        "TypeScript",
        "HTML",
        "SCSS",
        "Firebase",
      ],
      links: [
        {
          type: "Demo",
          href: "https://dabubble.kakar.dev",
          icon: <LiveIndicator />,
        },
        {
          type: "Frontend",
          href: "https://github.com/Kakar21/DABubble",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://backend.kakar.dev/videos/DABubble.mp4",
    },
    {
      title: "Sharkie",
      href: "https://sharkie.kakar.dev",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Ein Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Demo",
          href: "https://sharkie.kakar.dev",
          icon: <LiveIndicator />,
        },
        {
          type: "Frontend",
          href: "https://github.com/Kakar21/Sharkie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://backend.kakar.dev/videos/Sharkie.mp4",
    },
    {
      title: "Join",
      href: "https://join.kakar.dev",
      dates: "Dez 2023 - Jan 2024",
      active: true,
      description:
        "Ein Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktion & weise Benutzer und Kategorien hinzu.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Django",
        "Python",
      ],
      links: [
        {
          type: "Demo",
          href: "https://join.kakar.dev",
          icon: <LiveIndicator />,
        },
        {
          type: "Frontend",
          href: "https://github.com/Kakar21/Join-Frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/Kakar21/Join-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://backend.kakar.dev/videos/Join.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;

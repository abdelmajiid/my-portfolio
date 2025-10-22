import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Farah Abdelmajid — Software Engineer & Web Developer",
  author: "Farah Abdelmajid",
  description:
    "Software Engineer based in Algiers, Algeria. I specialize in UI design, web development and maintenance.",
  lang: "en",
  siteLogo: "/Abdelmajid-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/abdelmajid-farah" },
    { text: "Github", href: "https://github.com/abdelmajiid" },
    { text: "Facebook", href: "https://web.facebook.com/lin.ber.942" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://abdelmajid-farah.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Farah Abdelmajid",
    specialty: "Web Developer",
    summary:
      "Software Engineer based in Bordj el Kiffan, Algiers, Algeria. I specialize in UI design, web development and maintenance.",
    email: "farahabdelmajiid@gmail.com",
  },
  experience: [
    {
      company: "Pharmacy Mecheri",
      position: "Pharmacy Assistant",
      startDate: "Mar 2025",
      endDate: "Aug 2025",
      summary: [
        "Assist customers by answering questions, helping them find products, and processing sales at the cash register.",
        "Support administrative tasks and contribute to clinical services.",
        "Handle inventory, stock control, and ensure regulatory compliance.",
        "Support administrative tasks and contribute to clinical services."
      ],
    },
    {
      company: "National Service",
      position: "State Secretary",
      startDate: "Sept 2023",
      endDate: "Sept 2024",
      summary: [
        "In this position, my mission was to prepare administrative documents, write reports, and allocate tasks, using Word and Excel.",
        "my military service allowed me to develop interpersonal skills such as leadership, stress management, effective communication, teamwork, and discipline."
      ],
    },
    
  ],
  projects: [
    {
      name: "Book Store Web App",
      summary: "A web platform that allows users to browse and search for existing books using the Google Books API.",
      subsummary: " Technologies used: : HTML, CSS, React.js.",
      linkPreview: "/",
      linkSource: "https://github.com/abdelmajiid/book-store",
      image: "/book4.png",
    },
    {
      name: "ProMed",
      summary: "Drug-Drug Interaction Detection Website with prediction tool to find new potential interactions.",
      subsummary: "Technologies used: HTML, CSS, JS, Python, Django, BeautifulSoup (web scraping tool), Neo4j (Graph Database), Machine Learning.",
      linkPreview: "/",
      linkSource: "",
      image: "/promed.png",
    },
    {
      name: "Job Valley",
      summary: "A web application designed to help recruiters and job seekers find the best match. ",
      subsummary: "Technologies used: HTML, CSS, Bootstrap, JavaScript, Firebase, MongoDB.",
      linkPreview: "/",
      linkSource: "",
      image: "/",
    },
  ],
  about: {
    description: `
      Hi, I’m Abdelmajid Farah, a passionate Web Developer . With a strong background in front-end web technologies, I thrive in the intersection where creativity meets technology.
      Skilled across various platforms and languages, with a strong ability to adapt and quickly learn new technologies
      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from responsive web designs to complete web applications, all with a focus on performance, security, and scalability.
    `,
    image: "/Abdelmajid.jpg",
  },
};

// #5755ff

import { mobile, backend, creator, web, cytokinetics, purdue } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const backendSkills = [
  {
    type: "MongoDB",
    level: 40,
  },
  {
    type: "Docker",
    level: 50,
  },
  {
    type: "MYSQL",
    level: 50,
  },
  {
    type: "Python",
    level: 70,
  },
  {
    type: "AWS",
    level: 60,
  },
];

const frontendSkills = [
  {
    type: "HTML",
    level: 60,
  },
  {
    type: "CSS",
    level: 60,
  },
  {
    type: "JavaScript",
    level: 70,
  },
  {
    type: "TypeScript",
    level: 50,
  },
  {
    type: "React JS",
    level: 70,
  },
];

const experiences = [
  {
    title: "Informatics Engineer Intern",
    company_name: "Cytokinetics",
    icon: cytokinetics,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: ["In progress..."],
  },
  {
    title: "Informatics Engineer Intern/Part-time",
    company_name: "Cytokinetics",
    icon: cytokinetics,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jan 2023",
    points: [
      "Collaborated closely with scientists to develop a user-friendly webpage for data query, ensuring the end product was tailored to their specific requirements and providing value to their research.",
      "Employed an AWS EC2 instance to operate a Docker container, which was configured with Cron to run a python script periodically.",
      "Utilized connections to AWS DynamoDB and S3 to efficiently update tables and store files with relevant information obtained from PostgreSQL database, improving data management and analysis capabilities.",
      "Developed and maintained comprehensive documentation for the webpage, ensuring that future developers could easily understand and modify it.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Purdue University",
    icon: purdue,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - May 2022",
    points: [
      "Implemented a robust and user-friendly Chrome extension using JavaScript that enhances the Stack Overflow user experience by adding additional functionality and features.",
      "Developed a sophisticated JavaScript codebase that enables users to easily highlight important text on Stack Overflow and export it to a CSV for further analysis or reference.",
      "Designed and built an intuitive and user-friendly interface that displays all answer boxes with highlighted text generated from a machine learning model on Stack Overflow.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
];

const techs = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

export {
  services,
  backendSkills,
  frontendSkills,
  experiences,
  testimonials,
  projects,
  techs,
};

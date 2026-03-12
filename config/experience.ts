import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "solarwinds",
    position: "Software Software Engineer Team Lead",
    company: "SolarWinds",
    location: "Austin, Texas",
    startDate: new Date("Oct 2023"),
    endDate: new Date("Dec 2025"),
    description: [
      "I worked as a team leader contributing to the development and improvement of a cloud-based campus card platform, helping deliver reliable, user-friendly digital access services that supported both university administrators and students in managing campus activities and transactions seamlessly."
    ],
    achievements: [
      "Led a cross-functional development team in building and improving a cloud-based campus card platform used for digital identity, payments, and access management across university services.",
      "Enhanced system reliability and performance by optimizing backend services and cloud infrastructure, resulting in smoother transactions and reduced downtime for campus users.",
      "Improved user experience for administrators and students by helping design intuitive workflows for managing campus access, payments, and activity tracking.",
      "Coordinated development cycles and task management as team leader, ensuring timely delivery of platform updates, feature improvements, and bug fixes.",
      "Collaborated with stakeholders and university partners to gather requirements and translate operational needs into scalable technical solutions.",
    ],
    skills: ["AWS", "Google Cloud", "Azure", "LLM", "AI Agent", "OpenAI", "Node.js", "Python", ".NET", "React", "PostgreSQL", "MongoDB", "Docker"],
    companyUrl: "https://www.solarwinds.com",
    logo: "/experience/solarwinds_logo.jpg",
  },
  {
    id: "roi-selling",
    position: "Full Stack Engineer",
    company: "ROI Selling",
    location: "Chagrin Falls, OH",
    startDate: new Date("Jun 2020"),
    endDate: new Date("Oct 2023"),
    description: [
      "As a Full Stack Engineer at ROI Selling, I helped build and improve a B2B value-selling platform that enables sales and marketing teams to generate more leads, create stronger business cases, and accelerate revenue growth for enterprise customers."
    ],
    achievements: [
      "Developed and enhanced core features of a B2B value-selling platform that enabled sales and marketing teams to build data-driven business cases and demonstrate ROI to enterprise customers.",
      "Built and maintained full-stack components (frontend and backend) to improve platform usability, performance, and scalability for enterprise-level clients.",
      "Collaborated with product managers, designers, and sales stakeholders to translate business requirements into technical solutions that supported lead generation and revenue growth initiatives.",
      "Improved platform efficiency and reliability by optimizing APIs, database queries, and application workflows, resulting in faster performance and smoother user experience.",
      "Contributed to continuous product improvements through debugging, testing, and deploying new features that strengthened the platform’s value-selling and analytics capabilities."
    ],
    skills: ["FastAPI", "Python", "AWS", "Next.js", "React", "Typescript", "Node.js", "PostgreSQL"],
    companyUrl: "http://www.roi-selling.com",
    logo: "/experience/roi_selling_logo.jpg",
  },
  // {
  //   id: "builtdesign",
  //   position: "Web Developer Intern",
  //   company: "Builtdesign",
  //   location: "Nagpur, India",
  //   startDate: new Date("2021-07-01"),
  //   endDate: new Date("2022-07-01"),
  //   description: [
  //     "Developed websites using React, Angular, and GraphQL.",
  //     "Set up AWS servers and CI/CD pipelines.",
  //     "Built a multi-page PDF reader for large files (>300MB).",
  //   ],
  //   achievements: [
  //     "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
  //     "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
  //     "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
  //   ],
  //   skills: [
  //     "React",
  //     "Angular",
  //     "GraphQL",
  //     "AWS",
  //     "HTML 5",
  //     "CSS 3",
  //     "Javascript",
  //   ],
  //   companyUrl: "https://builtdesign.in",
  //   logo: "/experience/builtdesign-logo.png",
  // },
];

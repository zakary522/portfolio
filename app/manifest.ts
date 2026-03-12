import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zakary Overmyer | Senior Software Engineer",
    short_name: "Zakary Overmyer",
    description:
      "Zakary Overmyer - Senior Software Engineer with strong experience building scalable Web and Mobile applications. Skilled in modern frameworks, cloud infrastructure, and AI driven features such as automation, data analysis, and intelligent user experiences. Focused on clean architecture, performance, and reliable product delivery. 🚀",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}

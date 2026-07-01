import img from '@/assets/hero.png'

export const projects = [
  {
    id: 1,
    title: "AI Portfolio",
    subtitle: "RAG Powered Portfolio",
    description:
      "Interactive portfolio website powered by OpenAI, FastAPI and Qdrant. Visitors can ask questions about my experience, projects and skills.",
    technologies: ["React", "FastAPI", "OpenAI", "Qdrant", "Docker"],
    github: "https://github.com/...",
    live: "https://...",
    image: { img },
    featured: true,
  },

  {
    id: 2,
    title: "StackXchange",
    subtitle: "Resource Sharing Platform",
    description:
      "Full-stack platform for uploading, discovering and sharing educational resources with authentication, reviews and AI-powered search.",
    technologies: ["React", "Firebase", "Tailwind", "OpenAI"],
    github: "",
    live: "",
    image: { img },
    featured: true,
  },
];

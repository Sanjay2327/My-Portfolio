import { motion } from "framer-motion";

const projects = [
  {
    title: "MERN Portfolio",
    description:
      "Personal portfolio built with React, Tailwind CSS v4, Framer Motion, and deployed on Netlify.",
    tech: ["React", "Tailwind", "Framer Motion", "Netlify"],
    github: "https://github.com/Sanjay2327/mern-portfolio",
    live: "https://your-site.netlify.app",
  },
  {
    title: "The Loop Computers (E-commerce)",
    description:
      "Full-stack blog app with authentication, CRUD operations, and MongoDB integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
   {
    title: "The Loop Computers (E-commerce)",
    description:
      "Full-stack blog app with authentication, CRUD operations, and MongoDB integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl border border-white/10 p-6
                       hover:border-[var(--color-accent)]
                       transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full
                             border border-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[var(--color-accent)]
                           hover:underline"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[var(--color-accent)]
                           hover:underline"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

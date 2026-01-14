import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git & GitHub",
  "Netlify",
];

function Skills() {
  return (
    <motion.section
        id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full border border-white/10
                       text-gray-300 text-sm hover:border-[var(--color-accent)]
                       hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;

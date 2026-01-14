import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-[80vh] flex items-center justify-center
                 text-center px-6"
    >
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-[var(--color-accent)]">Sanjay</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300">
          MERN Stack Developer
        </h2>

        <p className="text-gray-400 leading-relaxed">
          I build clean, scalable, and user-friendly full-stack web
          applications using React, Tailwind CSS, Node.js, Express, and MongoDB.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/public/resume/Sanjay Kushwaha _  237Dev  Resume.pdf"
            download
            className="px-6 py-2 rounded-lg bg-[var(--color-accent)]
                       text-black font-medium hover:opacity-90 transition"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/Sanjay2327"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-lg border border-gray-600
                       text-gray-300 hover:border-[var(--color-accent)]
                       hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

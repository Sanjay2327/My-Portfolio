import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-6 py-20 text-center space-y-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold">
        MERN Stack Developer
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto">
        I build full-stack web applications using React, Tailwind CSS,
        Node.js, Express, and MongoDB. This portfolio is currently under
        active development.
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <a
          href="https://github.com/YOUR_USERNAME/mern-portfolio"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 rounded-lg bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition"
        >
          GitHub
        </a>

        <button className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300">
          Resume (Soon)
        </button>
      </div>
    </motion.section>
  );
}

export default Home;

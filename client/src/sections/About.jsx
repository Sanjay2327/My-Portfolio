import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        About Me
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto text-center leading-relaxed">
        I am a MERN Stack Developer focused on building clean, scalable, and
        user-friendly web applications. I enjoy working with modern tools like
        React, Tailwind CSS, and Node.js, and I believe in writing structured,
        maintainable code.  
        <br /><br />
        Currently, I am sharpening my full-stack skills by building real-world
        projects and deploying them using modern workflows.
      </p>
    </motion.section>
  );
}

export default About;

import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative z-10
          max-w-6xl w-full
          grid md:grid-cols-2 gap-10
          p-8 md:p-12
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-2xl
        "
      >
        {/* LEFT: Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hello, I’m{" "}
            <span className="text-[var(--color-accent)]">
              Sanjay Kushwaha
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl">
            A MERN Stack Developer who loves building clean, scalable,
            and visually engaging web applications with modern tools.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-xl
                bg-[var(--color-accent)]
                text-black font-medium
                hover:opacity-90 transition
              "
            >
              View Projects
            </a>

            <a
              href="/resume/Sanjay_Kushwaha_Resume.pdf"
              download
              className="
                px-6 py-3 rounded-xl
                border border-white/20
                text-white
                hover:border-[var(--color-accent)]
                transition
              "
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT: Illustration / image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <img
            src="/hero-avatar.png"
            alt="Developer illustration"
            className="w-64 md:w-80 drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;

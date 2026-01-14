function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <h1 className="text-lg font-semibold tracking-wide">
          Sanjay Kushwaha<span className="text-[var(--color-accent)]">.</span>
        </h1>

        {/* Links */}
        <ul className="flex gap-6 text-sm text-gray-300">
  <li>
    <a href="#home" className="hover:text-white transition">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-white transition">
      About
    </a>
  </li>

  <li>
    <a href="#skills" className="hover:text-white transition">
      Skills
    </a>
  </li>

  <li>
    <a href="#projects" className="hover:text-white transition">
      Projects
    </a>
  </li>
</ul>

      </nav>
    </header>
  );
}

export default Navbar;

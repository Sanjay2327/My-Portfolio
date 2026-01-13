function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <h1 className="text-lg font-semibold tracking-wide">
          Sanjay<span className="text-[var(--color-accent)]">.</span>
        </h1>

        {/* Links */}
        <ul className="flex gap-6 text-sm text-gray-300">
          <li className="hover:text-white transition cursor-pointer">Home</li>
          <li className="hover:text-white transition cursor-pointer">About</li>
          <li className="hover:text-white transition cursor-pointer">Projects</li>
          <li className="hover:text-white transition cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

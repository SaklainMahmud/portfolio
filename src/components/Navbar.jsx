export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <span className="font-bold text-lg tracking-wide">
          Md Saklain Mahmud
        </span>

        {/* Links */}
        <ul className="flex gap-6 text-sm text-gray-400">
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-white transition">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-white transition">
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

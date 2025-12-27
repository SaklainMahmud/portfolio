import { Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Md Saklain Mahmud. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/md-saklain-mahmud"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            <Linkedin size={16} />
          </a>

          <a
            href="https://www.instagram.com/callmesaklain?igsh=MTNucmY0cDZ5b3V4bQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            <Instagram size={16} />
          </a>

          <a
            href="https://github.com/SaklainMahmud"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

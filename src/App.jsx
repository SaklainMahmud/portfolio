import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Hero */}
<section className="relative min-h-screen flex items-center justify-center px-6 pt-28">
  {/* subtle background accent */}
  <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent pointer-events-none"></div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative text-center max-w-3xl"
  >
    {/* small role tag */}
    <span className="inline-block mb-6 text-sm tracking-widest uppercase text-yellow-400">
      Web Developer
    </span>

    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
      Md Saklain <br />
      <span className="text-gray-400 relative inline-block">
        Mahmud
        <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-yellow-400/60 rounded"></span>
      </span>
    </h1>

    <p className="text-gray-400 text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
      I design and build engaging, responsive, and interactive web experiences
      with modern technologies.
    </p>

    {/* CTAs */}
    <div className="flex flex-wrap justify-center gap-4">
      {/* Primary */}
      <a
        href="#work"
        className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg
                   hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/20"
      >
        View Work
      </a>

      {/* Secondary */}
      <a
        href="#contact"
        className="px-8 py-4 border border-white/20 text-gray-300 rounded-lg
                   hover:border-yellow-400 hover:text-yellow-400 transition"
      >
        Contact
      </a>

      {/* Tertiary */}
      <a
        href="/Md_Saklain_Mahmud_CV.pdf"
        download
        className="px-8 py-4 border border-white/10 text-gray-400 rounded-lg
                   hover:border-yellow-400 hover:text-yellow-400 transition"
      >
        Download CV
      </a>
    </div>
  </motion.div>
</section>



      {/* About */}
      <About />

      {/* Education */}
      <Education />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

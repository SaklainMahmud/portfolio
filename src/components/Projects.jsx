import Reveal from "./Reveal";

// Images (FIXED variable names)
import jobImg from "../assets/projects/Job.png";
import eShopImg from "../assets/projects/e-shop.png";
import skyGateImg from "../assets/projects/SkyGate.png";
import libraryImg from "../assets/projects/library.png";

const projects = [
  {
    title: "Job Marketplace Website",
    description: "A full-stack job marketplace platform.",
    image: jobImg,
    github: "https://github.com/SaklainMahmud/Job_Marketplace",
    tech: ["PHP", "HTML", "CSS", "Node.js", "PostgreSQL"],
  },
  {
    title: "E-Shop Management",
    description: "An e-commerce management system with inventory control.",
    image: eShopImg,
    github: "https://github.com/SaklainMahmud/E-Shop",
    tech: ["C#"],
  },
  {
    title: "SkyGate Airport Simulation",
    description: "A simulation of airport operations.",
    image: skyGateImg,
    github: "https://github.com/SaklainMahmud/SkyGate-Airport-Simulation",
    tech: ["C++", "OpenGL"],
  },
  {
    title: "Library Management System",
    description: "A Java-based library management application.",
    image: libraryImg,
    github: "https://github.com/SaklainMahmud/Library-Management-System-using-Java",
    tech: ["Java", "OOP"],
  },
];


export default function Projects() {
  return (
    <section
      id="work"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      {/* Section heading */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Projects
        </h2>
        <p className="text-gray-400">
          A few projects I built during my BSc.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              className="group relative border border-white/10 rounded-2xl overflow-hidden
                         hover:border-yellow-400/40 transition"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/60 opacity-0
                             group-hover:opacity-100 transition
                             flex items-center justify-center"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 font-medium text-lg"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
  {project.description}
</p>

{/* Tech tags */}
<div className="flex flex-wrap gap-2">
  {project.tech.map((tag, i) => (
    <span
      key={i}
      className="text-xs px-3 py-1 rounded-full
                 border border-yellow-400/30
                 text-yellow-400/80"
    >
      {tag}
    </span>
  ))}
</div>

              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

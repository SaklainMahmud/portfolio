import Reveal from "./Reveal";

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "C++", "C#", "Java", "Python"],
  },
  {
    category: "Tools & Software",
    items: ["Git", "GitHub", "Vite", "Postman", "Thunder Client"],
  },
  {
    category: "Technical Skills",
    items: ["React", "Tailwind CSS", "HTML & CSS", "Axios", "REST APIs", "Node.js", "Express.js", "JWT Authentication"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <Reveal>
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Skills
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Languages, tools, and technologies I use to build and create effectively.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((group, index) => (
            <div
              key={index}
              className="
                group
                border border-white/10 rounded-2xl p-8
                hover:border-yellow-400/40
                hover:-translate-y-1
                transition duration-300
              "
            >
              {/* Category */}
              <h3 className="text-lg font-semibold mb-6 tracking-wide">
                <span className="text-yellow-400">
                  {group.category}
                </span>
              </h3>

              {/* Skills */}
              <ul className="space-y-3 text-gray-400">
                {group.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-400/80"></span>
                    <span className="group-hover:text-gray-300 transition">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}


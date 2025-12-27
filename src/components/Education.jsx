import Reveal from "./Reveal";

const education = [
  {
    degree: "Bachelor in Computer Science & Engineering",
    institution: "American International University–Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "2022 – Present",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Comilla Residential College",
    location: "Comilla, Bangladesh",
    period: "2018 – 2020",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Comilla Zilla School",
    location: "Comilla, Bangladesh",
    period: "2014 – 2018",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <Reveal>
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Education
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Academic background and formal qualifications.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {education.map((item, index) => (
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
              {/* Top row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-lg md:text-xl font-semibold tracking-wide">
                  {item.degree}
                </h3>

                <span className="
                  inline-block text-sm text-yellow-400
                  border border-yellow-400/30
                  px-3 py-1 rounded-full
                  whitespace-nowrap
                ">
                  {item.period}
                </span>
              </div>

              {/* Institution */}
              <p className="text-gray-400 mb-1">
                {item.institution}
              </p>

              {/* Location */}
              <p className="text-gray-500 text-sm">
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

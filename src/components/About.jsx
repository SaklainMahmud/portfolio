import Reveal from "./Reveal";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          {/* Text */}
          <div>
  <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
    About Me
  </h2>

  <div className="relative pl-6">
    {/* Accent line */}
    <span className="absolute left-0 top-0 w-[3px] h-full bg-yellow-400/60 rounded"></span>

    <p className="text-gray-400 leading-relaxed text-lg text-justify">
      I am <span className="text-white font-medium">Md Saklain Mahmud</span>, a
      Computer Science and Engineering undergraduate with a strong interest in
      <span className="text-white font-medium"> software development</span> and
      <span className="text-white font-medium"> software quality assurance</span>.
      Passionate about building reliable and efficient software systems, I am
      skilled in programming, system design, and testing methodologies.
      Motivated by real-world problem solving, I aim to contribute to
      high-quality software products while continuously learning and adapting
      to emerging technologies.
    </p>
  </div>
</div>


          {/* Image */}
          <div className="relative flex justify-center">
  <div className="relative">
    {/* background accent */}
    <div className="absolute -inset-4 rounded-2xl
                    bg-yellow-400/10 blur-xl"></div>

    <img
      src={profile}
      alt="Md Saklain Mahmud"
      className="relative w-72 md:w-80 rounded-2xl shadow-lg shadow-yellow-400/20"
    />
  </div>
</div>

        </div>
      </Reveal>
    </section>
  );
}

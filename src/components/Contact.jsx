import Reveal from "./Reveal";
import {
  Mail,
  Phone,
  CheckCircle,
  Linkedin,
  Instagram,
  Github,
  Send
} from "lucide-react";


export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 max-w-7xl mx-auto"
    >
      <Reveal>
        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            LET’S <span className="text-yellow-400">CONNECT</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT — Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">CONTACT INFO</h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:saklainmahmud556@gmail.com"
                className="flex items-center gap-4 border border-white/10 rounded-xl p-5
                hover:border-yellow-400/40 transition group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-500/20 text-yellow-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">saklainmahmud556@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801863784443"
                className="flex items-center gap-4 border border-white/10 rounded-xl p-5
                hover:border-yellow-400/40 transition group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-500/20 text-yellow-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+880 1863 784 443</p>
                </div>
              </a>

              {/* Availability */}
              <div className="flex items-center gap-4 border border-white/10 rounded-xl p-5 hover:border-yellow-400/40 transition">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-500/20 text-yellow-400">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Availability</p>
                  <p className="font-medium">Available Right Now</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10">
              <h4 className="text-sm font-semibold mb-4">FOLLOW ME</h4>
              <div className="flex gap-4">
                <a
                    href="https://www.linkedin.com/in/md-saklain-mahmud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition"
                >
                    <Linkedin size={18} />
                </a>
                <a
                    href="https://www.instagram.com/callmesaklain?igsh=MTNucmY0cDZ5b3V4bQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition"
                >
                    <Instagram size={18} />
                </a>
                <a
                    href="https://github.com/SaklainMahmud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition"
                >
                    <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form (UI only) */}
          <div className="border border-white/10 rounded-2xl p-8">
            <form
            name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
            >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-yellow-400"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-4 rounded-lg hover:bg-yellow-300 transition"
              >
                <span className="inline-flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}



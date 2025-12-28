import { useState } from "react";
import Reveal from "./Reveal";
import {
  Mail,
  Phone,
  CheckCircle,
  Linkedin,
  Instagram,
  Github,
  Send,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null); // true | false | null

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "48354da5-9382-448d-81ec-77b317241fd9",
          ...formData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-7xl mx-auto">
      <Reveal>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            LET’S <span className="text-yellow-400">CONNECT</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT — Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">CONTACT INFO</h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:saklainmahmud556@gmail.com"
                className="flex items-center gap-4 border border-white/10 rounded-xl p-5
                           hover:border-yellow-400/40 hover:scale-[1.02]
                           transition"
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
                           hover:border-yellow-400/40 hover:scale-[1.02]
                           transition"
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
              <div className="flex items-center gap-4 border border-white/10 rounded-xl p-5">
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
                  className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center
                             hover:border-yellow-400 hover:text-yellow-400 transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/callmesaklain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center
                             hover:border-yellow-400 hover:text-yellow-400 transition"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://github.com/SaklainMahmud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center
                             hover:border-yellow-400 hover:text-yellow-400 transition"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="border border-white/10 rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3
                             outline-none focus:border-yellow-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3
                             outline-none focus:border-yellow-400"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3
                           outline-none focus:border-yellow-400"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3
                           outline-none focus:border-yellow-400 resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black font-semibold py-4 rounded-lg
                           hover:bg-yellow-300 transition disabled:opacity-60"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </span>
              </button>

              {/* Status Messages */}
              {success === true && (
                <p className="text-green-400 text-center">
                  Message sent successfully 🎉
                </p>
              )}
              {success === false && (
                <p className="text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

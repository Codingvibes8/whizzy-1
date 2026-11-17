"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    need: "Online shop",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // If user submits, we can allow the native mailto or show the nice submission confirmation
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#fdeee7] py-20 md:py-24">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#e8572a] mb-3">
              Get in touch
            </span>
            <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold text-[#14161c] mb-4 leading-tight">
              Tell me about your business
            </h2>
            <p className="text-[#4a4f5c] text-[1.05rem] leading-relaxed mb-6">
              Send a few details and I&apos;ll reply within one working day with ideas
              and a rough price. No obligation.
            </p>
            <div className="space-y-2 text-[0.95rem] text-[#14161c] bg-white/60 p-5 rounded-[14px] border border-[#e7e2d8]">
              <p className="m-0">
                <strong className="font-semibold">Email:</strong>{" "}
                <a
                  href="mailto:hello@example.com"
                  className="text-[#e8572a] hover:underline"
                >
                  hello@example.com
                </a>
              </p>
              <p className="m-0">
                <strong className="font-semibold">Based in:</strong> UK, working
                remotely
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-7 md:p-8 border border-[#e7e2d8] shadow-sm">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <CheckCircle2 size={48} className="text-[#e8572a] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-[#14161c]">
                  Thank you!
                </h3>
                <p className="text-[#4a4f5c] text-sm max-w-sm mx-auto">
                  Your message has been prepared. I&apos;ll get back to you within one
                  working day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#e8572a] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action="mailto:hello@example.com"
                method="post"
                encType="text/plain"
                onSubmit={handleSubmit}
                className="grid gap-4"
              >
                <label className="font-medium text-[0.9rem] text-[#14161c] grid gap-1.5">
                  Your name
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="p-3 border border-[#e7e2d8] rounded-[10px] bg-[#faf8f4] text-[#14161c] text-sm focus:border-[#e8572a] focus:outline-hidden transition"
                  />
                </label>

                <label className="font-medium text-[0.9rem] text-[#14161c] grid gap-1.5">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="p-3 border border-[#e7e2d8] rounded-[10px] bg-[#faf8f4] text-[#14161c] text-sm focus:border-[#e8572a] focus:outline-hidden transition"
                  />
                </label>

                <label className="font-medium text-[0.9rem] text-[#14161c] grid gap-1.5">
                  What do you need?
                  <select
                    name="need"
                    value={formData.need}
                    onChange={(e) =>
                      setFormData({ ...formData, need: e.target.value })
                    }
                    className="p-3 border border-[#e7e2d8] rounded-[10px] bg-[#faf8f4] text-[#14161c] text-sm focus:border-[#e8572a] focus:outline-hidden transition"
                  >
                    <option value="Online shop">Online shop</option>
                    <option value="Food ordering">Food ordering</option>
                    <option value="Add features to my current site">
                      Add features to my current site
                    </option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>

                <label className="font-medium text-[0.9rem] text-[#14161c] grid gap-1.5">
                  Tell me a bit more
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe what you're looking to build..."
                    className="p-3 border border-[#e7e2d8] rounded-[10px] bg-[#faf8f4] text-[#14161c] text-sm focus:border-[#e8572a] focus:outline-hidden transition resize-y"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 px-6 rounded-full font-semibold text-sm bg-[#e8572a] text-white hover:bg-[#d2481e] hover:-translate-y-0.5 active:translate-y-0 transition duration-150 cursor-pointer shadow-sm flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

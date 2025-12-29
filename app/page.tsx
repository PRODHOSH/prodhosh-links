"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Github, Linkedin, Instagram, Globe, Send } from "lucide-react"
import Beams from "@/components/beams"

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    // --- Google Form auto-submit support ---
    // INSTRUCTIONS: To connect this form to Google Forms:
    // 1. Open your Google Form in edit mode
    // 2. Click the 3 dots menu → "Get pre-filled link"
    // 3. Fill in dummy values for Name, Email, Message fields
    // 4. Click "Get link" and copy the full URL
    // 5. Paste that URL below in PREFILL_URL
    const PREFILL_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdKsfSGB4lTedZKbsg2c3WX7sEZs6hxpN24Cl7zvAc_tMqaFA/viewform?usp=pp_url&entry.1916182081=Prodhosh&entry.528512701=prodhoshlaptop@gmail.com&entry.1941518091=Hello"
    const GOOGLE_FORM_ID = "1FAIpQLSdKsfSGB4lTedZKbsg2c3WX7sEZs6hxpN24Cl7zvAc_tMqaFA"
    const FORM_ACTION = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`

    async function submitToGoogle() {
      if (!PREFILL_URL) return
      try {
        const url = new URL(PREFILL_URL)
        const params = Array.from(url.searchParams.entries())
        const entryKeys = params.map(([k]) => k).filter((k) => k.startsWith("entry."))

        if (entryKeys.length === 0) return

        const body = new URLSearchParams()
        // Map first three entry keys to name, email, message
        const values = [formData.name, formData.email, formData.message]
        for (let i = 0; i < Math.min(entryKeys.length, values.length); i++) {
          body.append(entryKeys[i], values[i])
        }

        // Submit using no-cors to avoid CORS blocking; response won't be readable.
        await fetch(FORM_ACTION, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: body.toString(),
        })
      } catch (err) {
        // silent fail - keep UX intact
        console.error("Google Form submit failed:", err)
      }
    }

    // Trigger google submission (if PREFILL_URL provided) then local UX update
    submitToGoogle().finally(() => {
      setTimeout(() => setSubmitted(false), 3000)
      setFormData({ name: "", email: "", message: "" })
    })
  }

  const socialLinks = [
    { icon: Globe, href: "https://prodhosh.netlify.app/", label: "Website" },
    { icon: Instagram, href: "https://www.instagram.com/itzprodhosh/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prodhoshvs", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/PRODHOSH", label: "GitHub" },
    { icon: Mail, href: "mailto:prodhosh3@gmail.com", label: "Email" },
  ]

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
          <Beams
           beamNumber={12}
           beamWidth={12}
           beamHeight={40}
           rotation={-30}
           speed={1.5}
           noiseIntensity={1.2}
           scale={0.45}
          />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" />

      <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-16 animate-fade-in">
            <img
  src="/images/profile-photo.jpg"
  alt="Prodhosh"
  className="w-60 h-60 -mt-5 rounded-full border-2 border-white/20 
             object-cover object-[center_30%] mb-6 shadow-2xl"
/>


            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 tracking-tight">Prodhosh VS</h1>
            <p className="text-base text-gray-300 text-center max-w-sm text-balance leading-relaxed">
              Full-stack developer crafting elegant digital solutions with modern web technologies.
            </p>
          </div>

          {/* Social Links - Compact, professional grid */}
          <div className="flex justify-center gap-4 mb-16">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              )
            })}
          </div>

          {/* Contact Form - Clean and minimal */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white mb-6">Get in Touch</h2>
            {submitted ? (
              <div className="flex items-center justify-center py-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-green-400 font-medium">Message sent successfully</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                  required
                />
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-white/30 transition-all resize-none"
                  required
                />
                <button

                  type="submit"
                  className="w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

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
    // Here you would typically send the form data to a server
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    { icon: Globe, href: "https://prodhosh.netlify.app/", label: "Website", color: "from-cyan-400 to-blue-500" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/itzprodhosh/",
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prodhoshvs",
      label: "LinkedIn",
      color: "from-blue-400 to-blue-600",
    },
    { icon: Github, href: "https://github.com/PRODHOSH", label: "GitHub", color: "from-gray-300 to-gray-500" },
    { icon: Mail, href: "mailto:prodhosh3@gmail.com", label: "Email", color: "from-red-400 to-orange-500" },
  ]

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Beams />
      </div>

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-12 animate-fade-in">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75" />
              <img
                src="/professional-profile-avatar.png"
                alt="Prodhosh"
                className="relative w-32 h-32 rounded-full border-4 border-black/80 bg-gray-800 object-cover"
              />
            </div>

            <h1 className="text-5xl font-bold text-white text-center mb-4 text-balance">Prodhosh</h1>
            <p className="text-lg text-gray-300 text-center max-w-md text-balance leading-relaxed">
              Creative developer passionate about building beautiful, interactive digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:bg-white/10"
                >
                  <Icon className="w-6 h-6 text-white mb-2 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                    {social.label}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
            {submitted ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-green-400 font-medium">Message sent! Thanks for reaching out.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  required
                />
                <textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Footer */}
          <footer className="text-center text-gray-400 text-sm border-t border-white/10 pt-8">
            <p className="text-balance">© 2025 Prodhosh. All rights reserved.</p>
          </footer>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}

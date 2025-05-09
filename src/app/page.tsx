'use client'
import React from 'react'
import Link from 'next/link'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm border-b border-blue-500/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-yellow-400 font-star-wars">
                Shardendu Mishra
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#about" className="text-blue-300 hover:text-yellow-400 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-blue-300 hover:text-yellow-400 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-blue-300 hover:text-yellow-400 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-blue-300 hover:text-yellow-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-6 font-star-wars bg-black px-8 py-2 rounded-lg border border-yellow-400/30">
                Hi, i'm <span className="text-blue-300">Shardendu Mishra</span>
              </h1>
            </div>
            <p className="text-xl text-blue-300 mb-8">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="relative inline-block bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-lg border border-yellow-400/30 hover:bg-yellow-400/30 transition-colors overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              <a
                href="#projects"
                className="relative inline-block bg-blue-500/20 text-blue-300 px-6 py-3 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-colors overflow-hidden group"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
} 
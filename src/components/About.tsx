import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--secondary-color)]/20 to-[var(--bg-color)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--secondary-color)] to-purple-500 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold text-[var(--primary-color)] mb-8 font-star-wars bg-[var(--bg-color)] px-8 py-2 rounded-lg border border-[var(--primary-color)]/30">
              About Me
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[var(--secondary-color)] mb-6">
              I'm a passionate full-stack developer with a strong foundation in web technologies
              and a keen eye for creating elegant solutions to complex problems. With expertise
              in modern frameworks and a commitment to clean code, I strive to build applications
              that are both performant and user-friendly.
            </p>
            <p className="text-lg text-[var(--secondary-color)] mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge with the developer community.
            </p>
            
            {/* Resume Download Button */}
            <div className="flex justify-center space-x-4">
              <a
                href="/Shardendu_s_Resume_fullstack (1).pdf"
                download
                className="relative inline-block bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-lg border border-yellow-400/30 hover:bg-yellow-400/30 transition-colors overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
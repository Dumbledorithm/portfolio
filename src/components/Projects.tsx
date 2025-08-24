import React from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
  
}

const projects: Project[] = [
  {
    title: "SecureDrop",
    description: "SecureDrop is a privacy-focused web application that facilitates confidential file sharing through secure, single-use download links that are programmatically deleted after access.",
    technologies: ["NextJS","Supabase"],
    image: "/secure-drop-scrnshot.jpg",
    link: "https://secure-drop-v4.vercel.app/",
    
  },
  {
    title: "ServicePro ",
    description: "ServicePro is a full-stack hyperlocal service marketplace, designed to connect customers with providers through a seamless booking, confirmation, and real-time communication system.",
    technologies: ["ReactJS", "NodeJS","Socket.IO", "ExpressJS", "MongoDB"],
    image: "/servicepro-scrnshot.png",
    link: "https://servicepro-seven.vercel.app/",
    
  },
  {
    title: "ShilpKart",
    description: "ShilpKart is a full-stack e-commerce marketplace, designed to connect artisans with customers through a secure, multi-role platform with robust product management and discovery features.",
    technologies: ["ReactJS","NodeJS","ExpressJS","MongoDB"],
    image: "",
    link: "#",
    
  },
  {
    title: "NewsBot",
    description: "An AI-powered chatbot that provides on-demand summarization and contextual Q&A for any given news article.",
    technologies: ["NextJS", "GroqAPI", "Supabase"],
    image: "",
    link: "#",
    
  },

]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Star Wars themed background elements */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold text-yellow-400 mb-4 font-star-wars bg-black px-8 py-2 rounded-lg border border-yellow-400/30">
              Mission Log
            </h2>
          </div>
          <p className="text-lg text-blue-300 mt-4">
            Notable achievements and completed missions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/80 backdrop-blur-sm rounded-lg border border-blue-500/30 overflow-hidden hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-48">
                <div className="absolute inset-0 bg-[url('/holo-grid.svg')] opacity-20"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2 font-star-wars group-hover:scale-105 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-blue-200 mb-4 group-hover:text-yellow-400/80 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded-full border border-blue-500/30 group-hover:border-yellow-400/30 group-hover:bg-yellow-400/20 group-hover:text-yellow-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-2 rounded-lg border border-yellow-400/30 hover:bg-yellow-400/30 transition-colors relative overflow-hidden group"
                >
                  <span className="relative z-10">View Mission Details</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 
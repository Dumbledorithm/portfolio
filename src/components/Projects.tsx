import React from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
  category: string
}

const projects: Project[] = [
  {
    title: "Personal investment Portfolio Management Tool",
    description: "A Python-based personal investment portfolio management tool to track, analyze, and visualize financial assets in real-time.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    image: "/Picture1.png",
    link: "#",
    category: "Full Stack"
  },
  {
    title: "A movie recommendation system",
    description: "A movie recommendation system that uses collaborative filtering to recommend movies to users based on their viewing history and preferences.o",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    image: "/Picture2.png",
    link: "#",
    category: "Web Application"
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-yellow-400/50 group-hover:text-yellow-400 transition-colors">
                    {project.category}
                  </span>
                </div>
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
import React from 'react'

interface Skill {
  category: string
  items: string[]
  icon: string
}

const skills: Skill[] = [
  {
    category: "Force Powers",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Redux", "GraphQL"],
    icon: "⚡"
  },
  {
    category: "Combat Training",
    items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "Socket.io"],
    icon: "⚔️"
  },
  {
    category: "Droid Engineering",
    items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack", "Kubernetes", "Terraform"],
    icon: "🤖"
  },
  {
    category: "Jedi Archives",
    items: ["Machine Learning", "TensorFlow", "Data Analysis", "SQL", "NoSQL", "Big Data", "Apache Spark"],
    icon: "📚"
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Star Wars themed background elements */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold text-yellow-400 mb-4 font-star-wars bg-black px-8 py-2 rounded-lg border border-yellow-400/30">
              Jedi Training
            </h2>
          </div>
          <p className="text-lg text-purple-300 mt-4">
            Mastered techniques and specializations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/80 backdrop-blur-sm rounded-lg border border-purple-500/30 p-6 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">{skillGroup.icon}</span>
                  <h3 className="text-2xl font-bold text-yellow-400 font-star-wars group-hover:scale-105 transition-transform duration-300">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-purple-900/50 text-purple-300 rounded-full border border-purple-500/30 group-hover:border-yellow-400/30 group-hover:bg-yellow-400/20 group-hover:text-yellow-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/50 to-purple-400/50 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-black px-8 py-3 rounded-lg border border-yellow-400/30">
              <span className="font-star-wars text-yellow-400">May the Force be with you</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 


import React from 'react';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiTailwindcss, SiGit } from 'react-icons/si';

// 1. Define the type for a single skill object
interface Skill {
  name: string;
  icon: React.ReactNode; // React.ReactNode can be any valid JSX
}

// 2. Define your skills array with the Skill type
const skills: Skill[] = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git', icon: <SiGit /> },
];

const SkillsMarquee: React.FC = () => {
  // 3. Duplicate the skills array to create a seamless loop
  const extendedSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden group mt-8">
      {/* Gradient fades on the edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#121212] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#121212] to-transparent z-10"></div>
      
      {/* The scrolling container */}
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap py-4">
        {extendedSkills.map((skill, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-4xl text-neutral-500">{skill.icon}</span>
            <span className="ml-4 text-lg font-medium text-neutral-400">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
import { motion } from 'framer-motion'
import {
  FaReact,
  FaLaravel,
  FaVuejs,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiSupabase,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React JS',
        icon: <FaReact className="text-cyan-400 text-4xl" />,
      },
      {
        name: 'Vue JS',
        icon: <FaVuejs className="text-green-400 text-4xl" />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
      },
      {
        name: 'JavaScript',
        icon: <SiJavascript className="text-yellow-400 text-4xl" />,
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript className="text-blue-400 text-4xl" />,
      },
    ],
  },

  {
    title: 'Backend',
    skills: [
      {
        name: 'Laravel',
        icon: <FaLaravel className="text-red-400 text-4xl" />,
      },
      {
        name: 'Node JS',
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
      },
      {
        name: 'Python',
        icon: <SiPython className="text-yellow-300 text-4xl" />,
      },
    ],
  },

  {
    title: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className="text-blue-300 text-4xl" />,
      },
      {
        name: 'MySQL',
        icon: <SiMysql className="text-orange-300 text-4xl" />,
      },
      {
        name: 'Supabase',
        icon: <SiSupabase className="text-green-400 text-4xl" />,
      },
    ],
  },

  {
    title: 'Tools',
    skills: [
      {
        name: 'Git',
        icon: <FaGitAlt className="text-orange-500 text-4xl" />,
      },
      {
        name: 'Docker',
        icon: <FaDocker className="text-blue-400 text-4xl" />,
      },
      {
        name: 'Figma',
        icon: <FaFigma className="text-pink-400 text-4xl" />,
      },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Technical Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            My Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build modern, scalable, and
            high-performance web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass rounded-3xl p-8 hover:border-cyan-400/30 transition duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">
                  {category.title}
                </h3>

                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.08, y: -8 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition duration-300"
                  >
                    {skill.icon}

                    <p className="font-semibold text-center text-sm md:text-base">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
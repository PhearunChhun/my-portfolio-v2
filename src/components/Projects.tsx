import { motion } from 'framer-motion'
import {
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa'

const projects = [
  {
    title: 'HR Management System',
    category: 'Full Stack Development',
    description:
      'Modern HR management platform for employee management, leave requests, attendance tracking, payroll, and analytics dashboard.',
    technologies: ['React JS', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
  },

  {
    title: 'Staff Performance Tracking',
    category: 'Analytics Dashboard',
    description:
      'Advanced performance evaluation system with KPI tracking, warning modules, reporting, and data visualization.',
    technologies: ['Vue JS', 'Laravel API', 'PostgreSQL'],
  },

  {
    title: 'E-Library Platform',
    category: 'Management System',
    description:
      'Digital library system with role-based access, category management, file uploads, and responsive dashboard.',
    technologies: ['React JS', 'Supabase', 'Tailwind CSS'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Portfolio Showcase
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Selected projects showcasing my expertise in full stack development,
            system architecture, modern UI/UX, and scalable applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition duration-500"
            >

              <div className="relative overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600"></div>

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>

                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-sm font-medium">
                  {project.category}
                </div>
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-5 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

                  <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition font-medium">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>

                  <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition font-medium">
                    <FaGithub />
                    GitHub
                  </button>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
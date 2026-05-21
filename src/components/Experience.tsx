import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Freelance & Personal Projects',
    year: '2024 - Present',
    description:
      'Developing scalable systems, dashboards, APIs, authentication systems, and responsive modern interfaces using React JS and Laravel.',
  },

  {
    title: 'Frontend Developer',
    company: 'Web Development Projects',
    year: '2023 - 2024',
    description:
      'Focused on modern UI/UX implementation, responsive design, Tailwind CSS, animations, and dashboard interfaces.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Career Journey
          </p>

          <h2 className="section-title mb-6">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-8">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-[35px] p-10 hover:border-cyan-400/20 transition duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">

                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-cyan-400 text-lg">
                    {item.company}
                  </p>
                </div>

                <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 w-fit">
                  {item.year}
                </div>

              </div>

              <p className="text-gray-400 leading-relaxed text-lg">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
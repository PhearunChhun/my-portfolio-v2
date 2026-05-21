import { motion } from 'framer-motion'

const stats = [
  {
    number: '3+',
    title: 'Years Experience',
  },
  {
    number: '20+',
    title: 'Projects Completed',
  },
  {
    number: '10+',
    title: 'Technologies',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Introduction
          </p>

          <h2 className="section-title mb-6">
            About Me
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
            Passionate full stack developer focused on building elegant, scalable, and high-performance web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass rounded-[40px] p-10"
          >
            <h3 className="text-3xl font-bold mb-8">
              Who I Am
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              I specialize in React JS, Laravel, Tailwind CSS, PostgreSQL, API development, and modern UI/UX design.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              I enjoy building real-world systems such as HR management systems, performance tracking platforms, dashboards, and responsive web applications.
            </p>
          </motion.div>

          <div className="grid gap-6">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass rounded-3xl p-8 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-5xl font-black gradient-text mb-2">
                    {item.number}
                  </h3>

                  <p className="text-gray-400 text-lg">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}
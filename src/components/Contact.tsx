import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">

      <div className="glow bg-cyan-500 top-0 left-0"></div>
      <div className="glow bg-purple-500 bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Get In Touch
          </p>

          <h2 className="section-title mb-6">
            Contact Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project idea or want to collaborate? Feel free to contact me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass rounded-[40px] p-10 md:p-14"
        >

          <form className="grid gap-8">

            <div className="grid md:grid-cols-2 gap-8">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-400 transition"
              />

            </div>

            <textarea
              rows={6}
              placeholder="Your Message"
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-400 transition"
            ></textarea>

            <button className="w-fit px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition duration-300 font-semibold shadow-xl shadow-cyan-500/20">
              Send Message
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  )
}
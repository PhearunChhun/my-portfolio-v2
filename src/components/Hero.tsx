import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa'

import profile from '../assets/profile.jpg'
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <div className="glow bg-cyan-500 top-10 left-10"></div>
      <div className="glow bg-purple-500 bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="glass rounded-[40px] p-10 md:p-14"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
            <p className="text-sm text-gray-300">
              Available for new projects
            </p>
          </div>

          <p className="text-cyan-400 uppercase tracking-[5px] mb-5">
            Hello I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
            Phearun
            <span className="gradient-text block">
              Chhun
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-white/90 mb-8">
            WEB Developer
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg mb-10 max-w-xl">
            Building modern, scalable, responsive, and high-performance web applications with React JS, Laravel, Tailwind CSS, PostgreSQL, and modern technologies.
          </p>

          <div className="flex flex-wrap gap-5 mb-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition duration-300 font-semibold shadow-xl shadow-cyan-500/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass hover:bg-white/10 transition duration-300 font-semibold"
            >
              Contact Me
            </a>

          </div>

          <div className="flex items-center gap-5">

            {[FaGithub, FaLinkedin, FaFacebook].map((Icon, index) => (
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                key={index}
                href="#"
                className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl hover:text-cyan-400 transition"
              >
                <Icon />
              </motion.a>
            ))}

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-full"></div>

            <div className="glass relative w-[360px] h-[360px] md:w-[450px] md:h-[450px] rounded-[40px] p-4 rotate-6 hover:rotate-0 transition duration-700">

              <div className="w-full h-full rounded-[30px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-8xl font-black">
                <img src={profile} alt="Phearun Chhun" className="w-full h-full rounded-full object-cover object-center " />
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

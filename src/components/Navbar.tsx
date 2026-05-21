import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa'

const navLinks = [
  {
    name: 'About',
    path: '#about',
  },
  {
    name: 'Skills',
    path: '#skills',
  },
  {
    name: 'Projects',
    path: '#projects',
  },
  {
    name: 'Experience',
    path: '#experience',
  },
  {
    name: 'Contact',
    path: '#contact',
  },
]

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-5"
    >

      <div className="max-w-7xl mx-auto">

        <div className="glass rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl px-6 py-4 flex items-center justify-between">

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="text-2xl md:text-3xl font-black tracking-wide"
          >
            <span className="gradient-text">
              Portfolio
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.path}
                whileHover={{ y: -2 }}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition duration-300 group"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition font-medium shadow-lg shadow-cyan-500/20"
            >
              Hire Me
            </motion.a>

          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-2xl text-white"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 glass rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >

            <div className="flex flex-col p-6 gap-6">

              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={() => setMobileMenu(false)}
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="text-center py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 font-medium"
              >
                Hire Me
              </a>

            </div>

          </motion.div>
        )}

      </div>
    </motion.nav>
  )
}
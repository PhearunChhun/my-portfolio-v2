import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa'

const socialLinks = [
  { Icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { Icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="px-6 pb-10">

      <div className="max-w-7xl mx-auto glass rounded-[35px] px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">

        <div>
          <h3 className="text-3xl font-black gradient-text mb-3">
            Portfolio
          </h3>

          <p className="text-gray-400">
            © 2026 Phearun Chhun. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">

          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl hover:text-cyan-400 transition"
            >
              <Icon />
            </a>
          ))}

        </div>

      </div>

    </footer>
  )
}

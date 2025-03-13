import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-white text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/">Genuine Imagery</Link>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <div key={item.path} className="relative">
              <Link
                to={item.path}
                className={`text-white hover:text-blue-400 transition-colors ${
                  location.pathname === item.path ? 'text-blue-400' : ''
                }`}
              >
                {item.label}
              </Link>
              {location.pathname === item.path && (
                <div className="absolute left-0 right-0 h-1 bg-blue-400 rounded transition-all duration-300"></div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Contact Info */}
        <div className="hidden md:block text-white text-sm">
          <p>Call us: 07049946126</p>
          <p>Email: genuineimagery@gmail.com</p>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-3 px-4 text-white hover:bg-blue-600/20 ${
                location.pathname === item.path ? 'bg-blue-600/20' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="p-4 border-t border-white/10 text-white text-sm">
            <p>Call us: 07049946126</p>
            <p>Email: genuineimagery@gmail.com</p>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header 
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Genuine Imagery</h3>
            <p className="text-white/70 mb-4">
              Transforming ideas into visual excellence through innovative printing and design solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a href="#" className="text-white/70 hover:text-blue-400 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-blue-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-blue-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-white/70">Digital Printing</li>
              <li className="text-white/70">Graphic Design</li>
              <li className="text-white/70">Brand Identity</li>
              <li className="text-white/70">Marketing Materials</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white/70">📍 Lagos, Nigeria</li>
              <li className="text-white/70">📞 07049946126</li>
              <li className="text-white/70">✉️ genuineimagery@gmail.com</li>
              <li className="text-white/70">⏰ Mon-Fri: 9am - 6pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Genuine Imagery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const services = [
  {
    title: "Printing Solutions",
    description: "High-quality digital and offset printing for all your needs",
    icon: "🖨️",
    path: "/services"
  },
  {
    title: "Graphic Design",
    description: "Creative designs that capture your brand's essence",
    icon: "🎨",
    path: "/services"
  },
  {
    title: "Branding",
    description: "Complete brand identity development and strategy",
    icon: "✨",
    path: "/services"
  }
]

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="absolute bottom-0 left-0 w-full px-4 z-20 mb-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.21, 1.02, 0.73, 0.97]
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative bg-white/10 backdrop-blur-md p-5 rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 duration-300 overflow-hidden group"
            >
              {/* AI Grid Background Effect */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                {[...Array(64)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={hoveredIndex === index ? {
                      backgroundColor: ['#0000', '#60A5FA', '#0000'],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.02,
                      }
                    } : {}}
                    className="bg-blue-400/20"
                  />
                ))}
              </div>

              {/* Glowing Border Effect */}
              <motion.div
                initial={false}
                animate={hoveredIndex === index ? {
                  boxShadow: [
                    '0 0 0 0px rgba(96, 165, 250, 0)',
                    '0 0 20px 3px rgba(96, 165, 250, 0.3)',
                    '0 0 0 0px rgba(96, 165, 250, 0)'
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-lg"
              />

              <div className="relative z-10">
                <motion.div 
                  className="text-4xl mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.3 + 0.3,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  {service.icon}
                </motion.div>
                <motion.h3 
                  className="text-white text-xl font-bold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 + 0.4, duration: 0.5 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-white/80 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 + 0.6, duration: 0.5 }}
                >
                  <Link 
                    to={service.path}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Services 
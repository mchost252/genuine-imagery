import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PrintingScene from '../components/PrintingScene'
import Services from '../components/Services'

const Home = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const services = [
    // ... your service objects
  ];

  return (
    <>
      <div className="relative w-screen h-screen">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 w-full">
            Welcome to Genuine Imagery
          </h2>
          <p className="text-2xl text-blue-200">
            Transforming Ideas into Visual Excellence
          </p>
          <p className="text-xl mt-2 mb-8 text-blue-300">
            Printing • Graphics • Branding
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <fog attach="fog" args={['#000000', 5, 15]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} castShadow />
            <PrintingScene />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          </Suspense>
        </Canvas>

        <Services />
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Why Choose Genuine Imagery?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Precision", description: "Attention to detail in every project" },
              { icon: "⚡", title: "Fast Turnaround", description: "Quick delivery without compromising quality" },
              { icon: "💡", title: "Innovation", description: "Using cutting-edge technology and techniques" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="relative text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm overflow-hidden group"
              >
                {/* AI Grid Background Effect */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0.5 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  {[...Array(36)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={hoveredFeature === index ? {
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
                  animate={hoveredFeature === index ? {
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
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" },
              { number: "50+", label: "Awards Won" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home 
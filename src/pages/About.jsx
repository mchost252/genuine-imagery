import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black py-20 px-4">
      <div className="container mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-white"
        >
          <h1 className="text-5xl font-bold text-center mb-8">About Genuine Imagery</h1>
          
          <div className="space-y-6 text-lg">
            <p>
              Located in the heart of Lagos, Nigeria, Genuine Imagery has been at the forefront 
              of printing excellence and creative design since our establishment. We combine 
              cutting-edge technology with artistic vision to deliver outstanding results for 
              our clients.
            </p>

            <h2 className="text-3xl font-semibold mt-8">Our Mission</h2>
            <p>
              To provide innovative printing and design solutions that help businesses 
              stand out in today's competitive market, while maintaining the highest 
              standards of quality and customer service.
            </p>

            <h2 className="text-3xl font-semibold mt-8">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-3">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✔️</span>
                State-of-the-art printing technology
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✔️</span>
                Expert team of designers and printing specialists
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✔️</span>
                Commitment to quality and attention to detail
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✔️</span>
                Competitive pricing and quick turnaround times
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✔️</span>
                Personalized service for each client
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 
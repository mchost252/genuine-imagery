import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Subject is required'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  useEffect(() => {
    setIsFormValid(validateForm())
  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      // Add form submission logic here
      console.log(formData)
      setSuccessMessage('Your message has been sent successfully!') // Set success message
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setErrors({}) // Clear errors
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black py-20 px-4 relative z-10">
      <div className="container mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-4">Get in Touch</h2>
              <div className="space-y-4 text-white">
                <p>📞 07049946126</p>
                <p>✉️ genuineimagery@gmail.com</p>
                <p>📍 Lagos, Nigeria</p>
              </div>
              <div className="mt-4">
                <a href="tel:+2347049946126">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Call Us
                  </button>
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-4">Business Hours</h2>
              <div className="space-y-2 text-white">
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className={`w-full p-2 rounded bg-white/20 text-white ${errors.name ? 'border-2 border-red-500' : isFormValid && formData.name ? 'border-2 border-green-500' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`w-full p-2 rounded bg-white/20 text-white ${errors.email ? 'border-2 border-red-500' : isFormValid && formData.email ? 'border-2 border-green-500' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-white mb-2">Subject</label>
                <select
                  name="subject"
                  className={`w-full p-2 rounded bg-blue-600 text-white border-2 ${errors.subject ? 'border-red-500' : isFormValid && formData.subject ? 'border-green-500' : 'border-blue-400'}`}
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a service...</option>
                  <option value="Digital Printing">Digital Printing</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Branding">Branding</option>
                </select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  name="message"
                  className={`w-full p-2 rounded bg-white/20 text-white h-32 ${errors.message ? 'border-2 border-red-500' : isFormValid && formData.message ? 'border-2 border-green-500' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div>
                <motion.button
                  type="submit"
                  disabled={!isFormValid}
                  whileHover={isFormValid ? { scale: 1.02 } : {}}
                  className={`w-full py-2 rounded transition-colors ${
                    isFormValid 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' 
                      : 'bg-blue-600/50 text-white/50 cursor-not-allowed'
                  }`}
                >
                  Send Message
                </motion.button>
              </div>
            </div>
          </form>

          {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 
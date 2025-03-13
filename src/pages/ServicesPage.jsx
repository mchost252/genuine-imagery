import { motion } from 'framer-motion'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import ReviewModal from '../components/ReviewModal';
import ImageCarousel from '../components/ImageCarousel';

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null)
  const [testimonials, setTestimonials] = useState([
    {
      name: "Chinedu Okafor",
      feedback: "Genuine Imagery transformed our brand with their amazing design work!",
    },
    {
      name: "Aisha Bello",
      feedback: "The digital printing service was fast and the quality was outstanding!",
    },
    {
      name: "Emeka Nwosu",
      feedback: "Their team is professional and attentive to detail. Highly recommend!",
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const services = [
    {
      title: "Digital Printing",
      description: "High-quality digital printing for short runs and quick turnaround",
      icon: "🖨️",
      details: ["Business Cards", "Flyers", "Brochures", "Posters"]
    },
    {
      title: "Graphic Design",
      description: "Professional design services for all your branding needs",
      icon: "🎨",
      details: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"]
    },
    {
      title: "Branding",
      description: "Complete brand identity development and strategy",
      icon: "✨",
      details: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Brand Collateral"]
    }
  ]

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleReviewSubmit = (newReview) => {
    setTestimonials((prev) => [...prev, newReview]);
  };

  const openCarousel = () => {
    setIsCarouselOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black py-20 px-4">
      <div className="container mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Our Services
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={openCarousel}
              className="relative bg-white/10 backdrop-blur-md p-8 rounded-lg hover:bg-white/20 transition-all cursor-pointer"
            >
              {/* AI Grid Background Effect */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                {[...Array(64)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={hoveredService === index ? {
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
                animate={hoveredService === index ? {
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
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-white text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6">{service.description}</p>
                
                {/* Categories Container */}
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="text-white text-lg font-semibold mb-2">Categories:</h4>
                  <ul className="text-white/70">
                    {service.details.map((detail, i) => (
                      <li key={i} className="mb-2">• {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button to open the review modal */}
        <div className="text-center mt-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Write a Review
          </button>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">What Our Customers Say</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-lg flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full text-2xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white/80 italic">"{testimonial.feedback}"</p>
                  <p className="text-white font-semibold mt-4">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Review Modal */}
      <ReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleReviewSubmit} 
      />

      {/* Image Carousel Modal */}
      {isCarouselOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/50" 
          onClick={() => setIsCarouselOpen(false)}
        >
          <motion.div
            className="bg-transparent p-0 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageCarousel />
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ServicesPage 
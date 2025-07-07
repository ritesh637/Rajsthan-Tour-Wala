'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="floating-animation absolute top-20 left-10 w-20 h-20 glass-effect rounded-full opacity-30"></div>
        <div className="floating-animation absolute top-40 right-20 w-16 h-16 glass-effect rounded-full opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="floating-animation absolute bottom-40 left-20 w-24 h-24 glass-effect rounded-full opacity-25" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover <span className="gradient-text">Amazing</span> Destinations
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Experience the world&apos;s most breathtaking locations with our premium tour packages. 
            From the spiritual heights of Kedarnath to the tropical paradise of Singapore.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="btn-glass px-8 py-4 rounded-full text-white font-semibold flex items-center space-x-2 pulse-glow">
              <span>Explore Tours</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="glass-card px-8 py-4 rounded-full text-white font-semibold flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Video</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
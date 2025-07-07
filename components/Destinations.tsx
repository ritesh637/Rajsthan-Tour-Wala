'use client';
import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, Users } from 'lucide-react';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    name: 'Kedarnath',
    location: 'Uttarakhand, India',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    duration: '7 Days',
    groupSize: '12 People',
    price: '₹25,000',
    description: 'Sacred pilgrimage to one of the holiest Hindu temples in the Himalayas'
  },
  {
    id: 2,
    name: 'Puri',
    location: 'Odisha, India',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    duration: '5 Days',
    groupSize: '15 People',
    price: '₹18,000',
    description: 'Experience the divine Jagannath Temple and pristine beaches'
  },
  {
    id: 3,
    name: 'Singapore',
    location: 'Southeast Asia',
    image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    duration: '6 Days',
    groupSize: '10 People',
    price: '₹85,000',
    description: 'Modern city-state with stunning architecture and diverse culture'
  },
  {
    id: 4,
    name: 'Kashmir',
    location: 'Jammu & Kashmir, India',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    duration: '8 Days',
    groupSize: '8 People',
    price: '₹35,000',
    description: 'Paradise on Earth with breathtaking valleys and serene lakes'
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Popular <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked destinations that offer unforgettable experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 glass-effect rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-300 text-sm">{destination.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">{destination.groupSize}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text">{destination.price}</span>
                  <button className="btn-glass px-4 py-2 rounded-full text-white text-sm font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
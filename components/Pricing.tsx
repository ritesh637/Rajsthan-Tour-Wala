'use client';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Explorer',
    icon: <Star className="h-8 w-8" />,
    price: '₹15,000',
    duration: 'per person',
    description: 'Perfect for budget-conscious travelers',
    features: [
      '3-4 Star Hotels',
      'Shared Transportation',
      'Group Tours',
      'Basic Meals Included',
      '24/7 Support',
      'Travel Insurance'
    ],
    popular: false,
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Adventure',
    icon: <Zap className="h-8 w-8" />,
    price: '₹35,000',
    duration: 'per person',
    description: 'Most popular choice for travelers',
    features: [
      '4-5 Star Hotels',
      'Private Transportation',
      'Guided Tours',
      'All Meals Included',
      'Priority Support',
      'Comprehensive Insurance',
      'Photography Service',
      'Cultural Experiences'
    ],
    popular: true,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'Luxury',
    icon: <Crown className="h-8 w-8" />,
    price: '₹75,000',
    duration: 'per person',
    description: 'Ultimate premium experience',
    features: [
      '5 Star Luxury Hotels',
      'Private Chauffeur',
      'Personal Guide',
      'Gourmet Dining',
      'Concierge Service',
      'Premium Insurance',
      'Professional Photography',
      'Exclusive Experiences',
      'Spa & Wellness',
      'Airport Lounge Access'
    ],
    popular: false,
    color: 'from-purple-600 to-pink-600'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="gradient-text">Adventure</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect package that matches your travel style and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative glass-card rounded-3xl p-8 ${
                plan.popular ? 'ring-2 ring-yellow-400 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} text-white mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg hover:shadow-yellow-400/25'
                  : 'btn-glass text-white hover:bg-opacity-20'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
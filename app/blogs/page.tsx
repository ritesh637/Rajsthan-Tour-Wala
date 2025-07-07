'use client';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Ultimate Guide to Kedarnath Pilgrimage',
    excerpt: 'Everything you need to know about planning your spiritual journey to Kedarnath temple, including best routes, accommodation, and spiritual significance.',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Priya Sharma',
    date: 'Dec 15, 2024',
    category: 'Spiritual Travel',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Kashmir: A Paradise Worth Visiting',
    excerpt: 'Discover the breathtaking beauty of Kashmir and why it\'s called paradise on earth. From Dal Lake to Gulmarg, explore the best of Kashmir.',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Rahul Kumar',
    date: 'Dec 12, 2024',
    category: 'Adventure',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Singapore Travel Tips for First-Time Visitors',
    excerpt: 'Make the most of your Singapore trip with these insider tips and recommendations. From Marina Bay to Sentosa Island.',
    image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Lee',
    date: 'Dec 10, 2024',
    category: 'City Guide',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'Puri Beach: Sun, Sand, and Spirituality',
    excerpt: 'Experience the perfect blend of beach relaxation and spiritual awakening at Puri, home to the famous Jagannath Temple.',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Amit Patel',
    date: 'Dec 8, 2024',
    category: 'Beach & Spiritual',
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'Best Time to Visit Himalayan Destinations',
    excerpt: 'Planning a trip to the Himalayas? Learn about the best seasons, weather conditions, and what to pack for your mountain adventure.',
    image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Mountain Guide',
    date: 'Dec 5, 2024',
    category: 'Mountain Travel',
    readTime: '9 min read'
  },
  {
    id: 6,
    title: 'Cultural Experiences in Indian Temples',
    excerpt: 'Dive deep into the rich cultural heritage of Indian temples and learn about the traditions, rituals, and architectural marvels.',
    image: 'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Cultural Expert',
    date: 'Dec 3, 2024',
    category: 'Culture',
    readTime: '10 min read'
  }
];

const categories = ['All', 'Spiritual Travel', 'Adventure', 'City Guide', 'Beach & Spiritual', 'Mountain Travel', 'Culture'];

const BlogsPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 parallax-bg opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Travel <span className="gradient-text">Stories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Discover amazing destinations through our travel guides and experiences
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 glass-card hover:bg-yellow-400/20 text-white"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 glass-effect rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Tag className="h-3 w-3 text-yellow-400" />
                      <span className="text-yellow-400 text-xs font-semibold">{post.category}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 glass-effect rounded-full px-3 py-1">
                    <span className="text-white text-xs">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blogs/${post.id}`}
                    className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogsPage;
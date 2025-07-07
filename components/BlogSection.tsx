'use client';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Ultimate Guide to Kedarnath Pilgrimage',
    excerpt: 'Everything you need to know about planning your spiritual journey to Kedarnath temple.',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Priya Sharma',
    date: 'Dec 15, 2024',
    category: 'Spiritual Travel'
  },
  {
    id: 2,
    title: 'Kashmir: A Paradise Worth Visiting',
    excerpt: 'Discover the breathtaking beauty of Kashmir and why it\'s called paradise on earth.',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Rahul Kumar',
    date: 'Dec 12, 2024',
    category: 'Adventure'
  },
  {
    id: 3,
    title: 'Singapore Travel Tips for First-Time Visitors',
    excerpt: 'Make the most of your Singapore trip with these insider tips and recommendations.',
    image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Sarah Lee',
    date: 'Dec 10, 2024',
    category: 'City Guide'
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Travel <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get inspired by our latest travel guides and destination insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                  <span className="text-yellow-400 text-xs font-semibold">{post.category}</span>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link 
            href="/blogs"
            className="btn-glass px-8 py-4 rounded-full text-white font-semibold inline-flex items-center space-x-2"
          >
            <span>View All Blogs</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
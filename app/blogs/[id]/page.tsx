'use client';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Heart, MessageCircle, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogData = {
  1: {
    title: 'Ultimate Guide to Kedarnath Pilgrimage',
    content: `
      <p>Kedarnath, one of the most sacred Hindu temples dedicated to Lord Shiva, sits majestically at an altitude of 3,583 meters in the Garhwal Himalayas of Uttarakhand. This comprehensive guide will help you plan your spiritual journey to this divine destination.</p>
      
      <h2>Getting There</h2>
      <p>The journey to Kedarnath is both challenging and rewarding. The nearest airport is Jolly Grant Airport in Dehradun, approximately 239 km away. From there, you can take a taxi or bus to Gaurikund, which serves as the base camp for the trek to Kedarnath.</p>
      
      <h2>The Trek</h2>
      <p>The 16-kilometer trek from Gaurikund to Kedarnath is moderately difficult and takes about 6-8 hours. The path winds through beautiful landscapes, including dense forests, rushing rivers, and snow-capped peaks. Along the way, you'll encounter several rest stops and small tea stalls.</p>
      
      <h2>Best Time to Visit</h2>
      <p>The temple is open from late April to early November, depending on weather conditions. The best time to visit is between May and June, and September to October when the weather is pleasant and the paths are clear.</p>
      
      <h2>Accommodation</h2>
      <p>Various accommodation options are available, from basic guesthouses to more comfortable hotels in Gaurikund and along the trek route. It's advisable to book in advance, especially during peak season.</p>
      
      <h2>What to Pack</h2>
      <ul>
        <li>Warm clothing and rain gear</li>
        <li>Comfortable trekking shoes</li>
        <li>First aid kit and personal medications</li>
        <li>Energy bars and water bottles</li>
        <li>Flashlight and extra batteries</li>
      </ul>
      
      <h2>Spiritual Significance</h2>
      <p>Kedarnath holds immense spiritual significance as one of the twelve Jyotirlingas. According to Hindu mythology, this is where Lord Shiva took refuge after the battle of Kurukshetra. The temple's unique architecture and the surrounding natural beauty create an atmosphere of divine tranquility.</p>
    `,
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Priya Sharma',
    date: 'Dec 15, 2024',
    category: 'Spiritual Travel',
    readTime: '8 min read',
    tags: ['Kedarnath', 'Pilgrimage', 'Himalayas', 'Spiritual', 'Trekking']
  },
  2: {
    title: 'Kashmir: A Paradise Worth Visiting',
    content: `
      <p>Kashmir, often called "Paradise on Earth," is a region of breathtaking natural beauty nestled in the northernmost part of India. From pristine lakes to snow-capped mountains, Kashmir offers an unforgettable experience for every traveler.</p>
      
      <h2>Dal Lake - The Jewel of Kashmir</h2>
      <p>Dal Lake is the heart of Kashmir tourism. Stay in a traditional houseboat, enjoy shikara rides, and witness the floating gardens. The lake transforms with seasons, offering different experiences throughout the year.</p>
      
      <h2>Gulmarg - The Meadow of Flowers</h2>
      <p>Gulmarg is a paradise for adventure enthusiasts. In winter, it becomes a skiing destination, while summer offers beautiful meadows perfect for trekking and golfing. The Gulmarg Gondola provides stunning panoramic views of the surrounding peaks.</p>
      
      <h2>Pahalgam - The Valley of Shepherds</h2>
      <p>Pahalgam serves as the base camp for the Amarnath Yatra and offers excellent trekking opportunities. The Lidder River flowing through the town adds to its scenic beauty.</p>
      
      <h2>Sonamarg - The Golden Meadow</h2>
      <p>Sonamarg is the gateway to Ladakh and offers spectacular views of glaciers and alpine lakes. The Thajiwas Glacier is a popular attraction here.</p>
      
      <h2>Local Culture and Cuisine</h2>
      <p>Kashmir's rich culture is reflected in its handicrafts, including Pashmina shawls, carpets, and papier-mâché items. Don't miss trying local delicacies like Rogan Josh, Yakhni, and the famous Kashmiri tea (Kahwa).</p>
      
      <h2>Best Time to Visit</h2>
      <p>Kashmir is beautiful year-round, but the best time depends on your preferences:</p>
      <ul>
        <li>Summer (April-June): Pleasant weather, perfect for sightseeing</li>
        <li>Monsoon (July-September): Lush green landscapes</li>
        <li>Winter (October-March): Snow-covered paradise, ideal for winter sports</li>
      </ul>
    `,
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Rahul Kumar',
    date: 'Dec 12, 2024',
    category: 'Adventure',
    readTime: '6 min read',
    tags: ['Kashmir', 'Dal Lake', 'Gulmarg', 'Adventure', 'Nature']
  },
  3: {
    title: 'Singapore Travel Tips for First-Time Visitors',
    content: `
      <p>Singapore, the Lion City, is a vibrant metropolis that seamlessly blends modernity with tradition. This comprehensive guide will help first-time visitors make the most of their Singapore adventure.</p>
      
      <h2>Getting Around</h2>
      <p>Singapore has an excellent public transportation system. The MRT (Mass Rapid Transit) is the most efficient way to travel around the city. Consider getting an EZ-Link card for convenient travel on buses and trains.</p>
      
      <h2>Must-Visit Attractions</h2>
      <h3>Marina Bay Sands</h3>
      <p>The iconic Marina Bay Sands offers stunning city views from its SkyPark. Don't miss the spectacular light and water show at the Marina Bay.</p>
      
      <h3>Gardens by the Bay</h3>
      <p>This futuristic garden features the famous Supertree Grove and climate-controlled conservatories showcasing plants from around the world.</p>
      
      <h3>Sentosa Island</h3>
      <p>A resort island offering beaches, theme parks, and entertainment options. Universal Studios Singapore is a major highlight.</p>
      
      <h2>Food Paradise</h2>
      <p>Singapore is a food lover's paradise. Visit hawker centers for authentic local cuisine at affordable prices. Must-try dishes include:</p>
      <ul>
        <li>Hainanese Chicken Rice</li>
        <li>Laksa</li>
        <li>Char Kway Teow</li>
        <li>Satay</li>
        <li>Chili Crab</li>
      </ul>
      
      <h2>Shopping</h2>
      <p>From luxury malls on Orchard Road to local markets like Bugis Street, Singapore offers diverse shopping experiences. Don't forget to claim GST refunds for purchases above a certain amount.</p>
      
      <h2>Cultural Experiences</h2>
      <p>Explore different ethnic quarters like Chinatown, Little India, and Arab Street to experience Singapore's multicultural heritage.</p>
      
      <h2>Practical Tips</h2>
      <ul>
        <li>Singapore uses the Singapore Dollar (SGD)</li>
        <li>English is widely spoken</li>
        <li>Tipping is not mandatory</li>
        <li>The weather is hot and humid year-round</li>
        <li>Carry an umbrella for sudden rain showers</li>
      </ul>
    `,
    image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Sarah Lee',
    date: 'Dec 10, 2024',
    category: 'City Guide',
    readTime: '5 min read',
    tags: ['Singapore', 'City Guide', 'Travel Tips', 'Food', 'Culture']
  }
};

const BlogDetailPage = () => {
  const params = useParams();
  const blogId = params.id as string;
  const numericBlogId = Number(blogId);
  const blog = blogData[numericBlogId as keyof typeof blogData];

  if (!blog || isNaN(numericBlogId)) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <Link href="/blogs" className="btn-glass px-6 py-3 rounded-full text-white">
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${blog.image}')`
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Link 
              href="/blogs"
              className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Blogs</span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-3xl p-8"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="flex items-center space-x-1 glass-card rounded-full px-3 py-1">
                <Tag className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold">{blog.category}</span>
              </div>
              <div className="flex items-center space-x-1 glass-card rounded-full px-3 py-1">
                <Clock className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">{blog.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {blog.title}
            </h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300">{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300">{blog.date}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="glass-card p-2 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <Heart className="h-5 w-5 text-gray-300" />
                </button>
                <button className="glass-card p-2 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <Share2 className="h-5 w-5 text-gray-300" />
                </button>
                <button className="glass-card p-2 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <MessageCircle className="h-5 w-5 text-gray-300" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 md:p-12"
          >
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{
                color: '#e5e7eb',
              }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-card px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogDetailPage;
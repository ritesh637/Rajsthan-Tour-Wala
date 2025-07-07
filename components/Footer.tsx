'use client';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 glass-effect"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="relative w-[200px] h-[100px] sm:w-[200px] sm:h-[70px]">
              <Image
                src="/logo.png" // Assuming it's in the public folder
                alt="TourGlass Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300">
              Creating unforgettable travel experiences with premium tour packages to the world&apos;s most beautiful destinations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="#destinations" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Destinations</Link></li>
              <li><Link href="#pricing" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Pricing</Link></li>
              <li><Link href="/blogs" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Blogs</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Kedarnath</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Kashmir</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Singapore</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Puri</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@tourglass.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1" />
                <span className="text-gray-300">123 Travel Street, New Delhi, India 110001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Rajstah Tour. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
'use client';
import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
        <Link href="/">
      <div className="relative w-[150px] h-[80px] sm:w-[200px] sm:h-[100px] flex items-center space-x-2">
        <Image
          className="object-contain pt-2"
          src="/logo.png"
          alt="Logo"
          fill
        />
      </div>
    </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</Link>
              <Link href="#destinations" className="text-white hover:text-yellow-400 transition-colors duration-300">Destinations</Link>
              <Link href="#pricing" className="text-white hover:text-yellow-400 transition-colors duration-300">Pricing</Link>
              <Link href="/blogs" className="text-white hover:text-yellow-400 transition-colors duration-300">Blogs</Link>
              <Link href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300">Home</Link>
            <Link href="#destinations" className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300">Destinations</Link>
            <Link href="#pricing" className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300">Pricing</Link>
            <Link href="/blogs" className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300">Blogs</Link>
            <Link href="#contact" className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
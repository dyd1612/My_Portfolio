
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Process', id: 'workflow' }, // Added Workflow link
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold transition-colors ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-900 shadow-md'
              }`}>
              YD
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'
              }`}>
              Yesudass<span className="text-blue-500">.Dev</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-gray-700' : 'text-gray-100'
                  }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="/resume.pdf"
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-blue-900 hover:bg-gray-100'
                }`}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${scrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="/resume.pdf"
                className="block w-full text-center mt-4 px-3 py-3 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

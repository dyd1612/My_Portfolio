
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Yesudass D</h3>
            <p className="text-gray-400 text-sm">
              .NET Developer | Building scalable web solutions.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a href="mailto:yesudass162000@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="tel:+919566465782" className="text-gray-400 hover:text-white transition-colors" aria-label="Phone">
              <Phone size={24} />
            </a>
            {/* Placeholder links since not provided in resume, but good to have */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {date.getFullYear()} Yesudass D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-light text-blue-200 mb-4">HELLO, I'M</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            YESUDASS D
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-8">
            .NET Developer
          </h3>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Building scalable, high-performance web applications with ASP.NET MVC, C#, and SQL Server.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors duration-300"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 rounded-full font-medium transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

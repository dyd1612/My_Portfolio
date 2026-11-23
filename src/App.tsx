
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

import FloatingContact from './components/FloatingContact';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen relative font-inter bg-white">
      <Navbar />
      <FloatingContact />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed in the future, e.g., for individual project details */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

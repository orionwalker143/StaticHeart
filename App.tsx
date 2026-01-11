
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Discography from './components/Discography';
import Gallery from './components/Gallery';
import Members from './components/Members';
import MemberProfile from './components/MemberProfile';
import Audition from './components/Audition';
import Footer from './components/Footer';

// Helper component for page animations
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/discography" element={<PageWrapper><Discography /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
        <Route path="/members" element={<PageWrapper><Members /></PageWrapper>} />
        <Route path="/members/:id" element={<PageWrapper><MemberProfile /></PageWrapper>} />
        <Route path="/audition" element={<PageWrapper><Audition /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-dark flex flex-col items-center justify-center z-[200]">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-64 md:w-80"
        >
          <img 
            src="https://i.pinimg.com/736x/4c/8a/b7/4c8ab7b7728319c92000c7c3c0f28e6a.jpg" 
            alt="StaticHeart Logo" 
            className="w-full h-auto animate-glitch"
          />
          <div className="absolute -inset-4 blur-3xl bg-brand opacity-20 animate-pulse -z-10"></div>
        </motion.div>
        <div className="mt-12 w-64 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-brand"
          ></motion.div>
        </div>
        <p className="mt-4 font-syncopate text-[10px] text-white/30 tracking-[0.5em] uppercase">Initializing Neural Core</p>
      </div>
    );
  }

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-brand selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

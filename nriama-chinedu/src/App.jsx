import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import WhatIDo from './pages/WhatIDo';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-light-bg text-text-light">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
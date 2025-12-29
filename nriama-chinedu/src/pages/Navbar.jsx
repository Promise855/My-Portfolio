// src/components/Navbar.jsx
import { useState, useEffect, useCallback } from 'react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about-skills', label: 'About' },
  { id: 'what-i-do', label: 'What I Do' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Memoized link click handler
  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // offset for fixed navbar

      // Find the section currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          return;
        }
      }
      // Default to first section if at top
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const linkClasses = (id) =>
    `transition-colors duration-200 ${
      activeSection === id
        ? 'text-hover-text border-b-2 border-secondary pb-1'
        : 'text-secondary hover:text-hover-text hover:border-b-2 hover:border-secondary pb-1'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="logo">
          <a
            href="#home"
            className="text-4xl font-bold text-secondary font-piedra hover:text-hover-text transition-colors duration-200"
          >
            NC
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-12 text-lg font-bold">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleLinkClick}
                className={linkClasses(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="flex flex-col gap-1.5 z-50 md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`w-8 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-8 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-8 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-lg pt-24 md:hidden" id="mobile-menu">
          <ul className="flex flex-col items-center gap-10 text-2xl font-bold">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleLinkClick}
                  className={linkClasses(id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
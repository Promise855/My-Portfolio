import { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.jpg';

const roles = [
  "Front-End Developer",
  "Graphics Designer",
  "Freelancer"
];

const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        const typingSpeed = isDeleting ? 50 : 150;

        const timeout = setTimeout(() => {
            if (!isDeleting && displayedText === currentRole) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayedText === '') {
                // Move to next role
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                //Type or delete one character
                setDisplayedText(
                    isDeleting
                        ? currentRole.substring(0, displayedText.length - 1)
                        : currentRole.substring(0, displayedText.length + 1)
                );
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentRoleIndex]);

    return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Replace the URL with your chosen image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* White Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
          Hi, I'm <span className="text-secondary">Nriama Chinedu</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10">
          <span className='animate-typing text-gray-700'>
            {displayedText}
          </span>
        </p>

        {/* Buttons: Stack on mobile, same size everywhere */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
            href="/resume.pdf"
            download
            className="px-10 py-4 bg-secondary text-white font-semibold rounded-2xl hover:bg-hover-text transition hover:shadow-lg"
            >
            Download CV
            </a>
            <a
            href="#contact"
            className="px-10 py-4 border-2 border-secondary text-secondary font-semibold rounded-2xl hover:bg-secondary hover:text-white transition hover:shadow-lg"
            >
            Get in Touch
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
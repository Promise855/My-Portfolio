

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-gray-50 border-t border-gray-400 ">
      <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-md text-gray-700 ">
                © 2025 Nriama Chinedu | Designed & Developed by NC
                </p>

                <div className="flex justify-center gap-8 flex-wrap">
                <a 
                    href="https://wa.me/07016310633" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl text-secondary hover:scale-110 hover:text-hover-text transition-transform duration-300"
                    aria-label="WhatsApp"
                >
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a 
                    href="https://github.com/chinedunriama" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl text-secondary hover:scale-110 hover:text-hover-text transition-transform duration-300"
                    aria-label="GitHub"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a 
                    href="https://twitter.com/chinedunriama" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl text-secondary hover:scale-110 hover:text-hover-text transition-transform duration-300"
                    aria-label="Twitter"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a 
                    href="https://linkedin.com/in/chinedu-nriama" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl text-secondary hover:scale-110 hover:text-hover-text transition-transform duration-300"
                    aria-label="LinkedIn"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a 
                    href="https://instagram.com/chinedunriama" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl text-secondary hover:scale-110 hover:text-hover-text transition-transform duration-300"
                    aria-label="Instagram"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a 
                    href="https://facebook.com/chinedunriama" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl text-secondary hover:scale-110 hover:text-hover-text transition-transform duration-300"
                    aria-label="Facebook"
                >
                    <i className="fab fa-facebook"></i>
                </a>
                <a 
                    href="mailto:chinedunriama@example.com"
                    className="text-xl text-secondary hover:scale-110 hover:text-hover-text transition-transform duration-300"
                    aria-label="Email"
                >
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
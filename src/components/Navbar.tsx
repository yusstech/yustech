import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-heading font-bold">
              <span className="text-brand-purple">Yus</span>
              <span className="text-brand-blue">Tech</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-medium text-gray-300 hover:text-white hover:underline decoration-brand-purple decoration-2 underline-offset-4 transition-all">
              Services
            </a>
            <a href="#testimonials" className="font-medium text-gray-300 hover:text-white hover:underline decoration-brand-purple decoration-2 underline-offset-4 transition-all">
              Results
            </a>
            <a href="#process" className="font-medium text-gray-300 hover:text-white hover:underline decoration-brand-purple decoration-2 underline-offset-4 transition-all">
              How It Works
            </a>
            <a href="#faq" className="font-medium text-gray-300 hover:text-white hover:underline decoration-brand-purple decoration-2 underline-offset-4 transition-all">
              FAQ
            </a>
            <CTAButton className="transition-opacity hover:shadow-lg hover:shadow-brand-purple/25">
            Get Your Product Live
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-brand-purple"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-brand-purple/20 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="font-medium text-gray-300 hover:text-white hover:underline decoration-brand-purple decoration-2 underline-offset-4 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="font-medium text-gray-300 hover:text-white hover:underline decoration-brand-purple decoration-2 underline-offset-4 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </a>
              <a 
                href="#process" 
                className="font-medium text-gray-300 hover:text-white hover:underline decoration-brand-purple decoration-2 underline-offset-4 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#faq" 
                className="font-medium text-gray-300 hover:text-white hover:underline decoration-brand-purple decoration-2 underline-offset-4 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <CTAButton className="w-full">
              Get Your Product Live
              </CTAButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

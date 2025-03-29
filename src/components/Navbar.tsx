
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-heading font-bold">
              <span className="text-brand-purple">Product</span>
              <span className="text-brand-blue">Ship</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-medium text-gray-600 hover:text-brand-purple transition-colors">
              Services
            </a>
            <a href="#testimonials" className="font-medium text-gray-600 hover:text-brand-purple transition-colors">
              Results
            </a>
            <a href="#process" className="font-medium text-gray-600 hover:text-brand-purple transition-colors">
              How It Works
            </a>
            <a href="#faq" className="font-medium text-gray-600 hover:text-brand-purple transition-colors">
              FAQ
            </a>
            <Button
              variant="default"
              className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-opacity"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-brand-purple"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="font-medium text-gray-600 hover:text-brand-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="font-medium text-gray-600 hover:text-brand-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </a>
              <a 
                href="#process" 
                className="font-medium text-gray-600 hover:text-brand-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#faq" 
                className="font-medium text-gray-600 hover:text-brand-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button
                variant="default"
                className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-opacity w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

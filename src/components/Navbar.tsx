
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
      isScrolled ? 'bg-background shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold text-secondary">
          Portfolio<span className="text-primary">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#about" className="text-muted-foreground hover:text-secondary transition-colors">About</a></li>
            <li><a href="#skills" className="text-muted-foreground hover:text-secondary transition-colors">Skills</a></li>
            <li><a href="#portfolio" className="text-muted-foreground hover:text-secondary transition-colors">Portfolio</a></li>
            <li><a href="#services" className="text-muted-foreground hover:text-secondary transition-colors">Services</a></li>
          </ul>
          
          <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-lg py-4">
          <ul className="flex flex-col space-y-4 px-6">
            <li><a href="#about" className="text-muted-foreground hover:text-secondary transition-colors block py-2" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#skills" className="text-muted-foreground hover:text-secondary transition-colors block py-2" onClick={toggleMobileMenu}>Skills</a></li>
            <li><a href="#portfolio" className="text-muted-foreground hover:text-secondary transition-colors block py-2" onClick={toggleMobileMenu}>Portfolio</a></li>
            <li><a href="#services" className="text-muted-foreground hover:text-secondary transition-colors block py-2" onClick={toggleMobileMenu}>Services</a></li>
            <li>
              <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <a href="#contact" onClick={toggleMobileMenu}>Contact Me</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

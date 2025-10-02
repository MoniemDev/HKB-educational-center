import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 md:gap-4">
            <Button className="gradient-primary text-white text-sm md:text-base px-3 py-2 md:px-4 md:py-2">
              انضم الآن
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#contact" className="hover:text-primary transition-smooth font-medium">تواصل معنا</a>
            <a href="#services" className="hover:text-primary transition-smooth font-medium">الخدمات</a>
            <a href="#about" className="hover:text-primary transition-smooth font-medium">من نحن</a>
            <a href="#specialties" className="hover:text-primary transition-smooth font-medium">التخصصات</a>
            <a href="#home" className="hover:text-primary transition-smooth font-medium">الرئيسية</a>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-l from-primary to-primary-glow bg-clip-text text-transparent">
              منصة HKB
            </h1>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm md:text-base">
              HKB
            </div>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 text-right border-t">
            <a href="#home" className="block py-2 hover:text-primary transition-smooth">الرئيسية</a>
            <a href="#specialties" className="block py-2 hover:text-primary transition-smooth">التخصصات</a>
            <a href="#about" className="block py-2 hover:text-primary transition-smooth">من نحن</a>
            <a href="#services" className="block py-2 hover:text-primary transition-smooth">الخدمات</a>
            <a href="#contact" className="block py-2 hover:text-primary transition-smooth">تواصل معنا</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
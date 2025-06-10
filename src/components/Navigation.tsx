
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-foreground">Law Simplicity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium hover:bg-accent/50 px-3 py-2 rounded-md"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild className="relative">
              <Link to="/demo">
                Book Demo
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1">Free</Badge>
              </Link>
            </Button>
          </div>

          {/* Mobile CTA and Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Quick Call Button for Mobile */}
            <Button variant="outline" size="sm" className="px-2">
              <Phone className="h-4 w-4" />
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="relative"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-3 text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors duration-200 rounded-md font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Section */}
              <div className="px-3 py-4 space-y-3 border-t border-border mt-3">
                <Button variant="outline" className="w-full justify-center" asChild>
                  <Link to="/login" onClick={() => setIsOpen(false)}>Sign In</Link>
                </Button>
                <Button className="w-full relative" asChild>
                  <Link to="/demo" onClick={() => setIsOpen(false)}>
                    Book Free Demo
                    <Badge className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1">Free</Badge>
                  </Link>
                </Button>
                
                {/* Quick Contact for Mobile */}
                <div className="text-center pt-2">
                  <p className="text-sm text-muted-foreground mb-2">Need immediate help?</p>
                  <Button variant="ghost" size="sm" className="text-primary">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (555) 123-4567
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

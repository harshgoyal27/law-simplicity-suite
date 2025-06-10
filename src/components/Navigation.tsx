
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
  ];

  const productCategories = [
    {
      title: "EXPLORE PRODUCTS",
      items: [
        { name: "Law Practice Management", href: "/products/practice-management", subtitle: "Clio Manage" },
        { name: "Client Intake & CRM", href: "/products/client-intake", subtitle: "Clio Grow" },
        { name: "Document Automation", href: "/products/document-automation", subtitle: "Clio Draft" },
        { name: "Legal Accounting", href: "/products/legal-accounting", subtitle: "Clio Accounting", badge: "NEW" },
        { name: "Apps & Integrations", href: "/products/integrations", subtitle: "250+ integrations to choose from" }
      ]
    },
    {
      title: "MANAGE YOUR FIRM",
      items: [
        { name: "Calendaring", href: "/products/calendaring" },
        { name: "Case Management", href: "/products/case-management" },
        { name: "Collaboration", href: "/products/collaboration" },
        { name: "Contact Management", href: "/products/contact-management" },
        { name: "Firm Insights", href: "/products/firm-insights" },
        { name: "Legal Aid", href: "/products/legal-aid" },
        { name: "Medical Records & Settlement Management", href: "/products/medical-records" },
        { name: "Mobile App for Firms", href: "/products/mobile-app" },
        { name: "Task Management", href: "/products/task-management" }
      ]
    },
    {
      title: "TRACK FINANCES",
      items: [
        { name: "Accounting", href: "/products/accounting", badge: "NEW" },
        { name: "Legal Billing", href: "/products/legal-billing" },
        { name: "Financial Reporting", href: "/products/financial-reporting", badge: "NEW" },
        { name: "Online Payments", href: "/products/online-payments" },
        { name: "Time & Expense Tracking", href: "/products/time-tracking" },
        { name: "Trust Account Management", href: "/products/trust-account" }
      ]
    },
    {
      title: "ENGAGE CLIENTS",
      items: [
        { name: "Appointment Booking", href: "/products/appointment-booking" },
        { name: "Client Communications", href: "/products/client-communications" },
        { name: "Client Intake", href: "/products/client-intake-forms" },
        { name: "Client Relationship Management", href: "/products/client-relationship" },
        { name: "Google's Local Services Ads", href: "/products/local-services" },
        { name: "Legal Client Portal", href: "/products/client-portal" },
        { name: "Legal Workflow Automation", href: "/products/workflow-automation" },
        { name: "Website Builder", href: "/products/website-builder" }
      ]
    },
    {
      title: "STREAMLINE DOCUMENTS",
      items: [
        { name: "Advanced Document Automation", href: "/products/advanced-document-automation" },
        { name: "Court E-Filing", href: "/products/court-efiling", badge: "NEW" },
        { name: "Court Forms", href: "/products/court-forms" },
        { name: "Document Management", href: "/products/document-management" },
        { name: "Documents & E-Signatures", href: "/products/documents-esignatures" },
        { name: "Questionnaires", href: "/products/questionnaires", badge: "NEW" },
        { name: "Template Building", href: "/products/template-building" }
      ]
    }
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 bg-white shadow-lg">
                      <div className="grid grid-cols-5 gap-6">
                        {productCategories.map((category, index) => (
                          <div key={index} className="space-y-3">
                            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    to={item.href}
                                    className="block group"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                                        {item.name}
                                      </span>
                                      {item.badge && (
                                        <Badge className="text-xs bg-orange-500 text-white ml-1">
                                          {item.badge}
                                        </Badge>
                                      )}
                                    </div>
                                    {item.subtitle && (
                                      <span className="text-xs text-muted-foreground italic">
                                        {item.subtitle}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
              {/* Mobile Products Menu */}
              <div className="space-y-1">
                <div className="px-3 py-3 text-foreground/80 font-medium">Products</div>
                {productCategories.map((category, index) => (
                  <div key={index} className="pl-6 space-y-1">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider py-1">
                      {category.title}
                    </div>
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.href}
                        className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors duration-200 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

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

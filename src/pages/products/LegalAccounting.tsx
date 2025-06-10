
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Calculator, DollarSign, PieChart, FileText, 
  Shield, Clock, CheckCircle, ArrowRight, Sparkles
} from "lucide-react";

const LegalAccounting = () => {
  const features = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Automated Bookkeeping",
      description: "Automatically categorize transactions and maintain accurate financial records."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Trust Account Management",
      description: "Manage client trust accounts with built-in compliance and security features."
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Financial Reporting",
      description: "Generate comprehensive financial reports with real-time insights."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Tax Preparation",
      description: "Simplify tax season with organized records and automated calculations."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Monitoring",
      description: "Stay compliant with built-in checks and automated compliance reporting."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Sync",
      description: "Seamlessly sync with your practice management system for accurate billing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-primary/10 to-background"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-orange-500 text-white">
                    <Sparkles className="h-3 w-3 mr-1" />
                    NEW
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Legal Accounting
                  <span className="block bg-gradient-to-r from-primary to-legal-blue-dark bg-clip-text text-transparent">
                    Built for Law Firms
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Simplify your firm's accounting with our specialized solution designed specifically 
                  for legal practices. Manage trust accounts, billing, and compliance in one place.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link to="/demo">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Reduce accounting time by 60% • Built-in compliance</span>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Legal Accounting Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Accounting Made Simple for Law Firms
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Focus on practicing law while we handle the complex accounting requirements unique to legal practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-legal-blue to-trust-navy"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Simplify Your Firm's Accounting Today
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join the hundreds of firms already using our legal accounting solution to save time and stay compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalAccounting;

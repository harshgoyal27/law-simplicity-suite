
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Shield, Users, Zap, BarChart } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Case Management",
      description: "Organize cases, track deadlines, and manage client information in one central location."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Tracking & Billing",
      description: "Accurate time tracking with automated billing and invoice generation for efficient payments."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Client Portal",
      description: "Provide clients with secure access to their case information and documents."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to gain insights and automate routine tasks."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Track performance metrics and generate detailed reports for better decision making."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Task Automation",
      description: "Automate repetitive tasks and workflows to increase productivity and efficiency."
    }
  ];

  const benefits = [
    "Increase efficiency by 40% with automated workflows",
    "Reduce administrative overhead and paperwork",
    "Improve client satisfaction with better communication",
    "Ensure compliance with built-in legal templates",
    "Scale your practice with enterprise-grade security"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  ✨ Now with AI-powered features
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Legal Practice Management
                  <span className="block text-legal-blue-light">Made Simple</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg">
                  Streamline your law firm with comprehensive case management, billing, and client communication tools. 
                  Focus on what matters most - serving your clients.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/demo">Start 15-Day Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/products">Explore Features</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Dashboard Overview</h3>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">247</div>
                      <div className="text-white/70 text-sm">Active Cases</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">$425K</div>
                      <div className="text-white/70 text-sm">Monthly Revenue</div>
                    </div>
                  </div>
                  <div className="h-32 bg-white/10 rounded-lg flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-white/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Everything Your Law Firm Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools designed specifically for legal professionals to manage their practice efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Why Legal Professionals Choose Law Simplicity
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of legal professionals who have transformed their practice with our comprehensive platform.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Legal professional using Law Simplicity software"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Ready to Simplify Your Legal Practice?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Start your 15-day free trial today. No credit card required, no setup fees, cancel anytime.
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

export default Index;

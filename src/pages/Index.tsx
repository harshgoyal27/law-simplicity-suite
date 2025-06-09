
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Shield, Users, Zap, BarChart, Star, Award, TrendingUp } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Case Management",
      description: "Organize cases, track deadlines, and manage client information in one central location.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Tracking & Billing",
      description: "Accurate time tracking with automated billing and invoice generation for efficient payments.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Client Portal",
      description: "Provide clients with secure access to their case information and documents.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to gain insights and automate routine tasks.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Track performance metrics and generate detailed reports for better decision making.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Task Automation",
      description: "Automate repetitive tasks and workflows to increase productivity and efficiency.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const benefits = [
    "Increase efficiency by 40% with automated workflows",
    "Reduce administrative overhead and paperwork",
    "Improve client satisfaction with better communication",
    "Ensure compliance with built-in legal templates",
    "Scale your practice with enterprise-grade security"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Managing Partner",
      firm: "Johnson & Associates",
      content: "Law Simplicity transformed our practice. We've seen a 40% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Solo Practitioner",
      firm: "Chen Law Office",
      content: "The client portal feature alone has revolutionized how I communicate with clients.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-legal-blue-dark to-trust-navy"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  ✨ Now with AI-powered features
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Legal Practice Management
                  <span className="block text-legal-blue-light bg-gradient-to-r from-legal-blue-light to-white bg-clip-text text-transparent">Made Simple</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 max-w-lg leading-relaxed">
                  Streamline your law firm with comprehensive case management, billing, and client communication tools. 
                  Focus on what matters most - serving your clients.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                  <Link to="/demo">Start 15-Day Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
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
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>SOC 2 Compliant</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-xl">Dashboard Overview</h3>
                    <Badge className="bg-green-500 animate-pulse">Live</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <div className="text-3xl font-bold text-white">247</div>
                      <div className="text-white/70 text-sm">Active Cases</div>
                      <TrendingUp className="h-4 w-4 text-green-400 mt-1" />
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <div className="text-3xl font-bold text-white">$425K</div>
                      <div className="text-white/70 text-sm">Monthly Revenue</div>
                      <TrendingUp className="h-4 w-4 text-green-400 mt-1" />
                    </div>
                  </div>
                  <div className="h-32 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <BarChart className="h-16 w-16 text-white/50" />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-legal-blue-light to-white rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-white to-legal-blue-light rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Everything Your Law Firm Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools designed specifically for legal professionals to manage their practice efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-legal-blue-light/5">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="relative">
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl pt-8">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Trusted by Legal Professionals
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our clients say about Law Simplicity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.firm}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Enhanced Visual */}
      <section className="py-20 bg-gradient-to-r from-background to-legal-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Why Legal Professionals Choose Law Simplicity
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of legal professionals who have transformed their practice with our comprehensive platform.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-legal-blue-dark/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Legal professional using Law Simplicity software"
                className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-legal-blue to-trust-navy"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Simplify Your Legal Practice?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Start your 15-day free trial today. No credit card required, no setup fees, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
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

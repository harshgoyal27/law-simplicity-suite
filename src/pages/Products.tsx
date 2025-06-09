
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Users, Clock, FileText, Calendar, DollarSign, Shield, 
  BarChart, Zap, Globe, Smartphone, Settings, CheckCircle,
  Star, Award, TrendingUp
} from "lucide-react";

const Products = () => {
  const coreFeatures = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Case Management",
      description: "Centralize all case information, documents, and communications in one secure location.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: [
        "Unlimited case storage",
        "Custom case types and fields",
        "Document version control",
        "Case timeline tracking",
        "Matter collaboration tools"
      ]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Tracking & Billing",
      description: "Accurate time tracking with automated billing and invoice generation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: [
        "Real-time time tracking",
        "Customizable billing rates",
        "Automated invoice generation",
        "Payment tracking",
        "Trust accounting"
      ]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Calendar & Scheduling",
      description: "Never miss a deadline or appointment with integrated calendar management.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: [
        "Court date tracking",
        "Deadline management",
        "Appointment scheduling",
        "Calendar synchronization",
        "Reminder notifications"
      ]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Management",
      description: "Secure document storage with powerful search and organization tools.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: [
        "Secure cloud storage",
        "Full-text search",
        "Document templates",
        "E-signature integration",
        "Version control"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Client Portal",
      description: "Give clients secure access to their case information and documents.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: [
        "Secure client login",
        "Case status updates",
        "Document sharing",
        "Secure messaging",
        "Payment portal"
      ]
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Reporting & Analytics",
      description: "Gain insights into your practice with comprehensive reporting tools.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: [
        "Financial reports",
        "Time analysis",
        "Case productivity metrics",
        "Custom dashboards",
        "Performance tracking"
      ]
    }
  ];

  const advancedFeatures = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to automate tasks and gain valuable insights.",
      benefits: [
        "Automated document review",
        "Case outcome predictions",
        "Smart scheduling suggestions",
        "Risk assessment alerts",
        "Performance optimization"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Integrations",
      description: "Connect with your favorite tools and services seamlessly.",
      benefits: [
        "Office 365 & Google Workspace",
        "QuickBooks & accounting software",
        "Court filing systems",
        "Email marketing platforms",
        "CRM systems"
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Access",
      description: "Access your practice management tools anywhere with our mobile app.",
      benefits: [
        "iOS & Android apps",
        "Offline access",
        "Mobile time tracking",
        "Push notifications",
        "Document scanning"
      ]
    }
  ];

  const practiceAreas = [
    {
      name: "Personal Injury",
      description: "Comprehensive tools for managing personal injury cases, settlements, and client communications.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Case intake forms", "Medical record management", "Settlement tracking", "Client updates"]
    },
    {
      name: "Family Law",
      description: "Specialized features for divorce, custody, and family legal matters.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Custody scheduling", "Financial tracking", "Document templates", "Court calendaring"]
    },
    {
      name: "Criminal Defense",
      description: "Tools designed for criminal defense attorneys and case management.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Evidence tracking", "Plea negotiations", "Court dates", "Client communication"]
    },
    {
      name: "Corporate Law",
      description: "Enterprise-grade tools for corporate legal departments and business law firms.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Contract management", "Compliance tracking", "Matter budgeting", "Team collaboration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-legal-blue-light/20 to-background"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Comprehensive Legal Practice
                <span className="block bg-gradient-to-r from-primary to-legal-blue-dark bg-clip-text text-transparent">Management</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything you need to run your law firm efficiently. From case management to billing, 
                we've got every aspect of your practice covered.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Award className="h-5 w-5 text-primary" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Features */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential tools every law firm needs to operate efficiently and serve clients better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="group h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-legal-blue-light/5 overflow-hidden">
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
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Advanced Features */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-legal-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take your practice to the next level with AI-powered insights and seamless integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="group bg-gradient-to-br from-white via-legal-blue-light/10 to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-legal-blue-dark rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Practice Areas */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Built for Every Practice Area
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized features and workflows designed for different areas of legal practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-gradient-to-br from-white to-legal-blue-light/5">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{area.name}</CardTitle>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              See how Law Simplicity can streamline your workflow and help you serve clients better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link to="/demo">Book a Demo</Link>
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

export default Products;

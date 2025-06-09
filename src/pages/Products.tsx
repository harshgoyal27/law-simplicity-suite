
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Users, Clock, FileText, Calendar, DollarSign, Shield, 
  BarChart, Zap, Globe, Smartphone, Settings, CheckCircle 
} from "lucide-react";

const Products = () => {
  const coreFeatures = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Case Management",
      description: "Centralize all case information, documents, and communications in one secure location.",
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
      features: ["Case intake forms", "Medical record management", "Settlement tracking", "Client updates"]
    },
    {
      name: "Family Law",
      description: "Specialized features for divorce, custody, and family legal matters.",
      features: ["Custody scheduling", "Financial tracking", "Document templates", "Court calendaring"]
    },
    {
      name: "Criminal Defense",
      description: "Tools designed for criminal defense attorneys and case management.",
      features: ["Evidence tracking", "Plea negotiations", "Court dates", "Client communication"]
    },
    {
      name: "Corporate Law",
      description: "Enterprise-grade tools for corporate legal departments and business law firms.",
      features: ["Contract management", "Compliance tracking", "Matter budgeting", "Team collaboration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Comprehensive Legal Practice Management
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to run your law firm efficiently. From case management to billing, 
                we've got every aspect of your practice covered.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential tools every law firm needs to operate efficiently and serve clients better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
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

      {/* Advanced Features */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take your practice to the next level with AI-powered insights and seamless integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg">
                <CardHeader>
                  <div className="text-primary mb-4">
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

      {/* Practice Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Built for Every Practice Area
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized features and workflows designed for different areas of legal practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{area.name}</CardTitle>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
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

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              See how Law Simplicity can streamline your workflow and help you serve clients better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/demo">Book a Demo</Link>
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

export default Products;

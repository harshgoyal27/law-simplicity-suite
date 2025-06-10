
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  FolderOpen, Users, FileText, Clock, Shield, BarChart,
  CheckCircle, ArrowRight
} from "lucide-react";

const CaseManagement = () => {
  const features = [
    {
      icon: <FolderOpen className="h-6 w-6" />,
      title: "Centralized Case Files",
      description: "Keep all case information, documents, and communications in one place."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Collaboration",
      description: "Share case updates and documents securely with clients."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Document Management",
      description: "Organize and version control all case-related documents."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Task Tracking",
      description: "Monitor case progress with automated task and deadline tracking."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Access",
      description: "Bank-level security with role-based access controls."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Case Analytics",
      description: "Gain insights into case performance and resource allocation."
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
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Case Management
                  <span className="block bg-gradient-to-r from-primary to-legal-blue-dark bg-clip-text text-transparent">
                    Organize Everything
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Streamline your case workflow with comprehensive case management tools. 
                  Track progress, manage documents, and collaborate with your team efficiently.
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
                <span>Improve case efficiency by 50%</span>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Case Management System"
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
              Complete Case Management Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage cases from intake to resolution.
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
              Ready to Organize Your Cases?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Transform your case management process and improve efficiency today.
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

export default CaseManagement;

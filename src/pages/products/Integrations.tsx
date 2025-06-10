
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Puzzle, Globe, Zap, Shield, BarChart, Users,
  CheckCircle, ArrowRight
} from "lucide-react";

const Integrations = () => {
  const integrationCategories = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Email & Communication",
      description: "Connect with your favorite email and communication tools.",
      integrations: ["Gmail", "Outlook", "Slack", "Microsoft Teams", "Zoom"]
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Accounting & Finance",
      description: "Sync with accounting software for seamless financial management.",
      integrations: ["QuickBooks", "Xero", "FreshBooks", "Sage", "Wave"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Court Systems",
      description: "Direct integration with court filing systems.",
      integrations: ["Federal Courts", "State Courts", "Local Courts", "E-Filing", "PACER"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Document Storage",
      description: "Connect with cloud storage and document management systems.",
      integrations: ["Google Drive", "Dropbox", "OneDrive", "Box", "SharePoint"]
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
                  Apps & Integrations
                  <span className="block bg-gradient-to-r from-primary to-legal-blue-dark bg-clip-text text-transparent">
                    250+ Integrations
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Connect Law Simplicity with your existing tools and workflows. 
                  Choose from over 250 integrations to create your perfect legal tech stack.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link to="/demo">Explore Integrations</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Easy setup • No technical expertise required</span>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Integrations Network"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Popular Integration Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with the tools you already use to create a seamless workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.integrations.map((integration, integrationIndex) => (
                      <span key={integrationIndex} className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
                        {integration}
                      </span>
                    ))}
                  </div>
                </CardContent>
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
              Ready to Connect Your Tools?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Start integrating your favorite tools and create a unified workflow today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/demo">Explore Integrations</Link>
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

export default Integrations;

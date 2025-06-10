
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Calendar, Clock, Bell, Users, Sync, Shield,
  CheckCircle, ArrowRight
} from "lucide-react";

const Calendaring = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Scheduling",
      description: "Intelligent calendar management with conflict detection and resolution."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Deadline Tracking",
      description: "Never miss a court date or filing deadline with automated reminders."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Custom Alerts",
      description: "Set up personalized notifications for important events and deadlines."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Coordination",
      description: "Share calendars and coordinate schedules across your entire team."
    },
    {
      icon: <Sync className="h-6 w-6" />,
      title: "Calendar Sync",
      description: "Seamlessly sync with Google Calendar, Outlook, and other platforms."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Court Rules",
      description: "Built-in court rules and deadlines for accurate scheduling."
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
                  Legal Calendaring
                  <span className="block bg-gradient-to-r from-primary to-legal-blue-dark bg-clip-text text-transparent">
                    Never Miss a Deadline
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Stay on top of court dates, filing deadlines, and important events with 
                  our comprehensive legal calendaring system designed specifically for law firms.
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
                <span>Eliminate missed deadlines • Court rules included</span>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Legal Calendar"
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
              Comprehensive Calendar Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage your legal calendar and never miss important dates.
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
              Ready to Master Your Calendar?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Take control of your schedule and never miss another deadline with our legal calendaring solution.
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

export default Calendaring;

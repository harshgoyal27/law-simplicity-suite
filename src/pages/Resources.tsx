
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Download, Video, Users, Clock, ArrowRight } from "lucide-react";

const Resources = () => {
  const featuredArticles = [
    {
      title: "Complete Guide to Legal Practice Management",
      description: "Everything you need to know about modernizing your law firm's operations and increasing efficiency.",
      category: "Practice Management",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI in Legal Practice: Opportunities and Challenges",
      description: "Explore how artificial intelligence is transforming the legal industry and what it means for your practice.",
      category: "Technology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Client Communication Best Practices for Lawyers",
      description: "Learn how to improve client satisfaction and retention through effective communication strategies.",
      category: "Client Relations",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Legal Practice Guides",
      description: "Comprehensive guides covering all aspects of modern legal practice management.",
      count: "25+ guides",
      type: "Guide"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Templates & Forms",
      description: "Ready-to-use legal templates, forms, and documents to streamline your workflow.",
      count: "50+ templates",
      type: "Template"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Tutorials",
      description: "Step-by-step video tutorials to help you master Law Simplicity features.",
      count: "30+ videos",
      type: "Video"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Webinars & Events",
      description: "Join live webinars and events featuring legal technology experts and practitioners.",
      count: "Weekly events",
      type: "Event"
    }
  ];

  const upcomingWebinars = [
    {
      title: "Maximizing Billable Hours with Time Tracking Technology",
      date: "June 15, 2024",
      time: "2:00 PM EST",
      presenter: "Sarah Johnson, Legal Technology Expert",
      description: "Learn advanced strategies for accurate time tracking and maximizing revenue."
    },
    {
      title: "Building a Paperless Law Office",
      date: "June 20, 2024",
      time: "1:00 PM EST",
      presenter: "Michael Chen, Practice Management Consultant",
      description: "Transform your practice with digital workflows and document management."
    },
    {
      title: "Client Intake Optimization for Law Firms",
      date: "June 25, 2024",
      time: "3:00 PM EST",
      presenter: "Lisa Rodriguez, Legal Operations Director",
      description: "Streamline your client intake process and improve conversion rates."
    }
  ];

  const downloadableResources = [
    {
      title: "Law Firm Technology Checklist",
      description: "A comprehensive checklist to evaluate and upgrade your firm's technology stack.",
      type: "PDF Guide",
      size: "2.5 MB"
    },
    {
      title: "Client Onboarding Template Pack",
      description: "Professional templates for client intake, agreements, and welcome materials.",
      type: "Template Pack",
      size: "1.8 MB"
    },
    {
      title: "Legal Practice KPI Dashboard",
      description: "Track key performance indicators with our customizable dashboard template.",
      type: "Excel Template",
      size: "1.2 MB"
    },
    {
      title: "Cybersecurity Guide for Law Firms",
      description: "Essential security practices to protect your firm and client data.",
      type: "PDF Guide",
      size: "3.1 MB"
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
                Legal Practice Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights, practical guides, and tools to help you build a more efficient and profitable legal practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary">{resource.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Latest insights and best practices for legal professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our experts for live discussions on legal technology and practice management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Badge className="bg-primary/10 text-primary">{webinar.date}</Badge>
                    <span>{webinar.time}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{webinar.title}</CardTitle>
                  <CardDescription>{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Presenter:</p>
                    <p className="font-medium">{webinar.presenter}</p>
                  </div>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Free Downloads
            </h2>
            <p className="text-xl text-muted-foreground">
              Practical tools and templates to improve your legal practice immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadableResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{resource.type}</Badge>
                    <span className="text-sm text-muted-foreground">{resource.size}</span>
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Now
                  </Button>
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
              Ready to Put These Insights into Practice?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Transform your legal practice with Law Simplicity's comprehensive management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/products">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;

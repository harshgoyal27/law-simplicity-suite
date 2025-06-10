import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { BookOpen, Download, Video, Users, Clock, ArrowRight, Star, Calendar, FileText, TrendingUp, Award, Lightbulb } from "lucide-react";

const Resources = () => {
  const featuredArticles = [
    {
      title: "AI-Powered Legal Research: The Future is Here",
      description: "Discover how artificial intelligence is revolutionizing legal research and document review, making lawyers 40% more efficient.",
      category: "AI & Technology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      trending: true,
      author: "Dr. Sarah Chen, Legal Tech Expert"
    },
    {
      title: "Complete Guide to Legal Practice Management in 2024",
      description: "Everything you need to know about modernizing your law firm's operations and increasing efficiency in the digital age.",
      category: "Practice Management",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: false,
      author: "Michael Rodriguez, Managing Partner"
    },
    {
      title: "Client Communication Strategies That Increase Retention by 60%",
      description: "Learn proven communication strategies that keep clients satisfied and coming back, backed by real case studies.",
      category: "Client Relations",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: true,
      author: "Jennifer Liu, Client Success Director"
    },
    {
      title: "Cybersecurity for Law Firms: Essential 2024 Checklist",
      description: "Protect your firm and client data with this comprehensive cybersecurity guide tailored for legal professionals.",
      category: "Security",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: false,
      author: "David Park, Cybersecurity Specialist"
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Practice Management Guides",
      description: "Comprehensive guides covering all aspects of modern legal practice management and optimization.",
      count: "25+ guides",
      type: "Guide",
      color: "from-blue-50 to-blue-100",
      popular: true
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Legal Templates & Forms",
      description: "Ready-to-use legal templates, forms, and documents to streamline your workflow and save time.",
      count: "50+ templates",
      type: "Template",
      color: "from-green-50 to-green-100",
      popular: true
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Tutorials & Masterclasses",
      description: "Step-by-step video tutorials and masterclasses to help you master Law Simplicity features.",
      count: "30+ videos",
      type: "Video",
      color: "from-purple-50 to-purple-100",
      popular: false
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Webinars & Live Events",
      description: "Join live webinars and events featuring legal technology experts and industry practitioners.",
      count: "Weekly events",
      type: "Event",
      color: "from-orange-50 to-orange-100",
      popular: false
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Industry Insights & Trends",
      description: "Stay ahead with the latest legal industry trends, market insights, and innovation reports.",
      count: "Monthly reports",
      type: "Report",
      color: "from-yellow-50 to-yellow-100",
      popular: false
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Case Studies & Success Stories",
      description: "Real-world examples of how law firms have transformed their practice with Law Simplicity.",
      count: "15+ case studies",
      type: "Case Study",
      color: "from-pink-50 to-pink-100",
      popular: true
    }
  ];

  const upcomingWebinars = [
    {
      title: "Maximizing Billable Hours with Time Tracking Technology",
      date: "June 15, 2024",
      time: "2:00 PM EST",
      presenter: "Sarah Johnson, Legal Technology Expert",
      description: "Learn advanced strategies for accurate time tracking and maximizing revenue.",
      attendees: "245+ registered"
    },
    {
      title: "Building a Paperless Law Office",
      date: "June 20, 2024",
      time: "1:00 PM EST",
      presenter: "Michael Chen, Practice Management Consultant",
      description: "Transform your practice with digital workflows and document management.",
      attendees: "189+ registered"
    },
    {
      title: "Client Intake Optimization for Law Firms",
      date: "June 25, 2024",
      time: "3:00 PM EST",
      presenter: "Lisa Rodriguez, Legal Operations Director",
      description: "Streamline your client intake process and improve conversion rates.",
      attendees: "156+ registered"
    }
  ];

  const downloadableResources = [
    {
      title: "Law Firm Technology Checklist",
      description: "A comprehensive checklist to evaluate and upgrade your firm's technology stack.",
      type: "PDF Guide",
      size: "2.5 MB",
      downloads: "1.2K+ downloads",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Client Onboarding Template Pack",
      description: "Professional templates for client intake, agreements, and welcome materials.",
      type: "Template Pack",
      size: "1.8 MB",
      downloads: "890+ downloads",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Legal Practice KPI Dashboard",
      description: "Track key performance indicators with our customizable dashboard template.",
      type: "Excel Template",
      size: "1.2 MB",
      downloads: "756+ downloads",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Cybersecurity Guide for Law Firms",
      description: "Essential security practices to protect your firm and client data.",
      type: "PDF Guide",
      size: "3.1 MB",
      downloads: "634+ downloads",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LiveChat />

      {/* Enhanced Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-legal-blue-light/20 to-background"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Legal Practice 
                <span className="block bg-gradient-to-r from-primary to-legal-blue-dark bg-clip-text text-transparent">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Expert insights, practical guides, and tools to help you build a more efficient and profitable legal practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Resource Categories with Popular Badges */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-gradient-to-br ${resource.color} border-0 relative`}>
                {resource.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-white z-10">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="bg-white shadow-sm">{resource.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Articles with Author Info and Trending Badges */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-legal-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Featured Articles & Insights
            </h2>
            <p className="text-xl text-muted-foreground">
              Latest insights and best practices from legal technology experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 ${article.featured ? 'md:col-span-2 lg:col-span-2' : ''} relative`}>
                {article.trending && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white z-10 animate-pulse">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
                <div className={`overflow-hidden ${article.featured ? 'aspect-[2/1]' : 'aspect-video'}`}>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                    <Badge variant="outline" className="bg-white">{article.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                    {article.featured && (
                      <Badge className="bg-primary text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className={`leading-tight ${article.featured ? 'text-2xl' : 'text-xl'}`}>{article.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{article.description}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">By {article.author}</p>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Upcoming Webinars */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our experts for live discussions on legal technology and practice management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-legal-blue-light/5">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <Badge className="bg-primary/10 text-primary flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{webinar.date}</span>
                    </Badge>
                    <span className="text-primary font-medium">{webinar.time}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">{webinar.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Presenter:</p>
                    <p className="font-medium">{webinar.presenter}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{webinar.attendees}</span>
                  </div>
                  <Button className="w-full group-hover:scale-105 transition-transform">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Downloadable Resources */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-legal-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Free Downloads
            </h2>
            <p className="text-xl text-muted-foreground">
              Practical tools and templates to improve your legal practice immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadableResources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-gradient-to-br from-white to-legal-blue-light/5">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="bg-white">{resource.type}</Badge>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <span>{resource.size}</span>
                      <span>•</span>
                      <span>{resource.downloads}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{resource.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full group-hover:scale-105 transition-transform">
                    <Download className="h-4 w-4 mr-2" />
                    Download Now
                  </Button>
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
              Ready to Put These Insights into Practice?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Transform your legal practice with Law Simplicity's comprehensive management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link to="/demo">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
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

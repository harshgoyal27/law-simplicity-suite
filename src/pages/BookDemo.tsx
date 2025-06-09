
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Users, Shield, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    firmSize: "",
    practiceArea: "",
    currentSoftware: "",
    needs: "",
    preferredTime: "",
    agreesToTerms: false,
    wantsNewsletter: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreesToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to our terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      firmSize: "",
      practiceArea: "",
      currentSoftware: "",
      needs: "",
      preferredTime: "",
      agreesToTerms: false,
      wantsNewsletter: false
    });
  };

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "15-Day Free Trial",
      description: "Full access to all features with no credit card required"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Demo",
      description: "Tailored demonstration based on your practice needs"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Setup Support",
      description: "Free onboarding and training for your entire team"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for your schedule"
    }
  ];

  const testimonials = [
    {
      quote: "Law Simplicity transformed our practice. We've reduced administrative time by 60% and increased our billing efficiency significantly.",
      author: "Jennifer Martinez",
      title: "Managing Partner, Martinez & Associates"
    },
    {
      quote: "The client portal feature alone has revolutionized how we communicate with our clients. Highly recommended!",
      author: "David Thompson",
      title: "Solo Practitioner, Family Law"
    },
    {
      quote: "Finally, a legal software that's actually simple to use. Our team was up and running in just a few days.",
      author: "Sarah Chen",
      title: "Legal Operations Director, Chen Law Group"
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
                Book Your Free Demo
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how Law Simplicity can transform your practice. Get a personalized demo and start your 15-day free trial today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule Your Demo</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll contact you within 24 hours to schedule your personalized demonstration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Law Firm Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firmSize">Firm Size</Label>
                        <Select value={formData.firmSize} onValueChange={(value) => setFormData({...formData, firmSize: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="solo">Solo Practitioner</SelectItem>
                            <SelectItem value="2-5">2-5 Attorneys</SelectItem>
                            <SelectItem value="6-15">6-15 Attorneys</SelectItem>
                            <SelectItem value="16-50">16-50 Attorneys</SelectItem>
                            <SelectItem value="50+">50+ Attorneys</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="practiceArea">Primary Practice Area</Label>
                        <Select value={formData.practiceArea} onValueChange={(value) => setFormData({...formData, practiceArea: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select area" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal-injury">Personal Injury</SelectItem>
                            <SelectItem value="family-law">Family Law</SelectItem>
                            <SelectItem value="criminal-defense">Criminal Defense</SelectItem>
                            <SelectItem value="corporate-law">Corporate Law</SelectItem>
                            <SelectItem value="immigration">Immigration</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentSoftware">Current Practice Management Software</Label>
                      <Input
                        id="currentSoftware"
                        value={formData.currentSoftware}
                        onChange={(e) => setFormData({...formData, currentSoftware: e.target.value})}
                        placeholder="e.g., Clio, MyCase, or none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="needs">What are your main practice management challenges?</Label>
                      <Textarea
                        id="needs"
                        value={formData.needs}
                        onChange={(e) => setFormData({...formData, needs: e.target.value})}
                        rows={3}
                        placeholder="Tell us about your current challenges and what you hope to achieve..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Demo Time</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreesToTerms}
                          onCheckedChange={(checked) => setFormData({...formData, agreesToTerms: checked as boolean})}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a> *
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.wantsNewsletter}
                          onCheckedChange={(checked) => setFormData({...formData, wantsNewsletter: checked as boolean})}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for legal technology tips and updates
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Book My Demo
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits & Info */}
            <div className="space-y-8">
              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What's Included in Your Demo</h2>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <Card key={index}>
                      <CardContent className="flex items-start space-x-4 pt-6">
                        <div className="text-primary mt-1">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What to Expect</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">30-Minute Personalized Demo</h4>
                          <p className="text-muted-foreground text-sm">Tailored to your practice area and specific needs</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Live Q&A Session</h4>
                          <p className="text-muted-foreground text-sm">Ask questions and get expert advice on implementation</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Custom Implementation Plan</h4>
                          <p className="text-muted-foreground text-sm">Receive a personalized roadmap for your firm</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Free Trial Setup</h4>
                          <p className="text-muted-foreground text-sm">We'll help you get started with your 15-day trial</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What Our Clients Say</h2>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookDemo;

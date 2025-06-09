
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, X } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$39",
      period: "per user/month",
      description: "Perfect for solo practitioners and small firms",
      features: [
        "Up to 3 users",
        "100 active cases",
        "Basic case management",
        "Time tracking & billing",
        "Client portal",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      notIncluded: [
        "Advanced analytics",
        "AI-powered insights",
        "Custom integrations",
        "Priority support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79",
      period: "per user/month",
      description: "Ideal for growing law firms with advanced needs",
      features: [
        "Up to 10 users",
        "Unlimited active cases",
        "Advanced case management",
        "Time tracking & billing",
        "Client portal",
        "Document automation",
        "Advanced reporting & analytics",
        "AI-powered insights",
        "Priority email support",
        "Mobile app access",
        "Calendar integration",
        "Basic API access"
      ],
      notIncluded: [
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      description: "Scalable solution for large firms and organizations",
      features: [
        "Unlimited users",
        "Unlimited active cases",
        "Full case management suite",
        "Advanced time tracking & billing",
        "Client portal with branding",
        "Document automation",
        "Advanced reporting & analytics",
        "AI-powered insights",
        "Dedicated account manager",
        "Phone & email support",
        "Mobile app access",
        "Full API access",
        "Custom integrations",
        "White-label options",
        "SSO integration",
        "Advanced security features"
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 15-day free trial with full access to all features. No credit card required."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees or penalties."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can arrange custom billing for enterprise clients."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use bank-level encryption and are SOC 2 compliant. Your data is secure and backed up regularly."
    },
    {
      question: "Do you offer discounts for annual payments?",
      answer: "Yes, we offer a 20% discount when you pay annually instead of monthly."
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect plan for your law firm. Start with a 15-day free trial, no credit card required.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-sm">
                ✨ 20% off when you pay annually
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                      )}
                    </div>
                    {plan.price === "Custom" && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                        <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    {plan.cta === "Contact Sales" ? (
                      <a href="mailto:sales@lawsimplicity.com">{plan.cta}</a>
                    ) : (
                      <Link to="/demo">{plan.cta}</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of legal professionals who trust Law Simplicity with their practice management.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/demo">Start Your 15-Day Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

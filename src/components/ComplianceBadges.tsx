
import { Shield, Lock, Award, CheckCircle, Globe, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ComplianceBadges = () => {
  const badges = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "SOC 2 Type II",
      description: "Certified for security, availability, and confidentiality",
      verified: true
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "AES-256 Encryption",
      description: "Bank-level encryption for all data",
      verified: true
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "GDPR Compliant",
      description: "Full compliance with EU data protection regulations",
      verified: true
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "HIPAA Ready",
      description: "Healthcare privacy and security standards",
      verified: true
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "ISO 27001",
      description: "Information security management certified",
      verified: true
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Attorney-Client Privilege",
      description: "Designed to protect privileged communications",
      verified: true
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="group flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm border border-border rounded-lg hover:bg-white/80 hover:shadow-md transition-all duration-300 hover:scale-105"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
            {badge.icon}
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <h4 className="text-sm font-semibold text-foreground">{badge.title}</h4>
              {badge.verified && (
                <CheckCircle className="h-3 w-3 text-green-500" />
              )}
            </div>
            <p className="text-xs text-muted-foreground leading-tight">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComplianceBadges;

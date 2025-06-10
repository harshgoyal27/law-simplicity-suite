
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Clock, FileText, Calendar, BarChart, CheckCircle, ArrowRight } from "lucide-react";

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState("dashboard");

  const demoSections = [
    {
      id: "dashboard",
      title: "Dashboard Overview",
      description: "Get a complete view of your practice performance",
      icon: <BarChart className="h-5 w-5" />
    },
    {
      id: "cases",
      title: "Case Management",
      description: "Organize and track all your cases efficiently",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: "billing",
      title: "Time & Billing",
      description: "Track time and generate invoices seamlessly",
      icon: <Clock className="h-5 w-5" />
    },
    {
      id: "clients",
      title: "Client Portal",
      description: "Secure communication with your clients",
      icon: <Users className="h-5 w-5" />
    }
  ];

  const demoContent = {
    dashboard: {
      metrics: [
        { label: "Active Cases", value: "247", change: "+12%" },
        { label: "Monthly Revenue", value: "$425K", change: "+8%" },
        { label: "Billable Hours", value: "1,247", change: "+15%" },
        { label: "Client Satisfaction", value: "98%", change: "+2%" }
      ],
      recentActivity: [
        "New case assigned: Smith vs. Johnson",
        "Invoice sent to Thompson & Associates",
        "Document uploaded to Miller case",
        "Meeting scheduled with Anderson Corp"
      ]
    },
    cases: {
      cases: [
        { id: "2024-001", client: "ABC Corporation", type: "Contract Review", status: "In Progress", deadline: "Jun 15, 2024" },
        { id: "2024-002", client: "Johnson Family", type: "Estate Planning", status: "Pending Review", deadline: "Jun 20, 2024" },
        { id: "2024-003", client: "Tech Startup LLC", type: "Incorporation", status: "Completed", deadline: "Jun 10, 2024" }
      ]
    },
    billing: {
      timeEntries: [
        { date: "Today", task: "Contract review for ABC Corp", hours: "2.5", rate: "$350" },
        { date: "Yesterday", task: "Client consultation", hours: "1.0", rate: "$350" },
        { date: "Jun 8", task: "Document preparation", hours: "3.5", rate: "$350" }
      ]
    },
    clients: {
      messages: [
        { client: "ABC Corporation", message: "Could you please review the latest contract amendments?", time: "2 hours ago" },
        { client: "Johnson Family", message: "Thank you for the estate planning documents", time: "1 day ago" },
        { client: "Tech Startup LLC", message: "Ready to proceed with incorporation", time: "2 days ago" }
      ]
    }
  };

  return (
    <div className="space-y-8">
      {/* Demo Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {demoSections.map((section) => (
          <Button
            key={section.id}
            variant={activeDemo === section.id ? "default" : "outline"}
            onClick={() => setActiveDemo(section.id)}
            className="flex items-center space-x-2"
          >
            {section.icon}
            <span>{section.title}</span>
          </Button>
        ))}
      </div>

      {/* Demo Content */}
      <Card className="bg-gradient-to-br from-white to-legal-blue-light/5 border-0 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {demoSections.find(s => s.id === activeDemo)?.title}
          </CardTitle>
          <CardDescription className="text-lg">
            {demoSections.find(s => s.id === activeDemo)?.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          {activeDemo === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {demoContent.dashboard.metrics.map((metric, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm border">
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                    <Badge className="bg-green-100 text-green-700 mt-1">{metric.change}</Badge>
                  </div>
                ))}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="font-semibold mb-4">Recent Activity</h4>
                <div className="space-y-2">
                  {demoContent.dashboard.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeDemo === "cases" && (
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-4 border-b bg-muted/50">
                <h4 className="font-semibold">Case Management</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Case ID</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Client</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoContent.cases.cases.map((case_, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-3 text-sm font-medium">{case_.id}</td>
                        <td className="px-4 py-3 text-sm">{case_.client}</td>
                        <td className="px-4 py-3 text-sm">{case_.type}</td>
                        <td className="px-4 py-3">
                          <Badge variant={case_.status === "Completed" ? "default" : "secondary"}>
                            {case_.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">{case_.deadline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeDemo === "billing" && (
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-4 border-b bg-muted/50">
                <h4 className="font-semibold">Time Entries</h4>
              </div>
              <div className="space-y-3 p-4">
                {demoContent.billing.timeEntries.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{entry.task}</div>
                      <div className="text-sm text-muted-foreground">{entry.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{entry.hours} hours</div>
                      <div className="text-sm text-muted-foreground">{entry.rate}/hr</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeDemo === "clients" && (
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b bg-muted/50">
                <h4 className="font-semibold">Client Communications</h4>
              </div>
              <div className="space-y-3 p-4">
                {demoContent.clients.messages.map((msg, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 hover:bg-muted/20 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{msg.client}</div>
                      <div className="text-sm text-muted-foreground">{msg.message}</div>
                      <div className="text-xs text-muted-foreground mt-1">{msg.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Demo CTA */}
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">Experience the full platform with a personalized demo</p>
        <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Play className="h-4 w-4 mr-2" />
          Book Live Demo
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default InteractiveDemo;

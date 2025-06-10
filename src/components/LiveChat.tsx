
import { useState } from "react";
import { MessageCircle, X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Law Simplicity. How can I help you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate support response
    setTimeout(() => {
      const supportResponse = {
        id: messages.length + 2,
        text: "Thank you for your message. A member of our support team will be with you shortly. In the meantime, you can also book a demo or check our resources page.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, supportResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 bg-primary"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}

        {isOpen && (
          <Card className="w-80 h-96 shadow-2xl animate-scale-in">
            <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <CardTitle className="text-lg">Live Support</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Badge className="bg-primary-foreground/20 text-primary-foreground w-fit">
                Typically responds in 2 minutes
              </Badge>
            </CardHeader>

            <CardContent className="p-0 flex flex-col h-80">
              {/* Messages */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        msg.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button type="submit" size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default LiveChat;

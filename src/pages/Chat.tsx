import { useState } from "react";
import {
  Send,
  Compass,
  ShoppingBag,
  ImageIcon,
  FlaskConical,
  ChevronDown,
  PenLine,
  Mail,
  FileText,
  Sparkles,
  Code,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sideIcons = [
  { icon: Compass, label: "Discover" },
  { icon: ShoppingBag, label: "Shopping" },
  { icon: ImageIcon, label: "Imagine" },
  { icon: FlaskConical, label: "Labs" },
];

const quickActions = [
  { icon: ImageIcon, label: "Create an image", color: "text-pink-400" },
  { icon: PenLine, label: "Improve writing", color: "text-blue-400" },
  { icon: Mail, label: "Draft an email", color: "text-green-400" },
  { icon: Code, label: "Write code", color: "text-orange-400" },
  { icon: FileText, label: "Summarize text", color: "text-cyan-400" },
  { icon: Lightbulb, label: "Brainstorm ideas", color: "text-yellow-400" },
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeSide, setActiveSide] = useState(0);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        role: "assistant",
        content:
          "I appreciate your message! This is a frontend demo, so I can't process real AI responses yet. But imagine the possibilities! 🚀",
      },
    ]);
    setInput("");
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Side icons */}
      <aside className="hidden md:flex flex-col items-center w-16 border-r border-border/50 bg-background/50 py-4 gap-2">
        {sideIcons.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActiveSide(i)}
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
              activeSide === i
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
            title={item.label}
          >
            <item.icon className="h-5 w-5" />
          </button>
        ))}
      </aside>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {!hasMessages ? (
          /* Welcome state */
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
              <Sparkles className="h-10 w-10 text-primary mx-auto mb-6 animate-pulse-glow" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Hi there. What should we dive into today?
              </h1>
              <p className="text-muted-foreground mb-8">
                Ask me anything — I'm here to help.
              </p>

              {/* Input */}
              <div className="relative mb-6">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Message AIverse..."
                  className="w-full h-14 rounded-2xl bg-secondary border border-border pl-5 pr-14 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {/* Mode selector */}
              <div className="flex justify-center mb-6">
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors bg-secondary px-3 py-1.5 rounded-full">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Smart
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Quick actions */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => setInput(action.label)}
                    className="glass-card rounded-xl p-4 text-left hover:border-primary/30 transition-all group"
                  >
                    <action.icon
                      className={cn("h-5 w-5 mb-2", action.color)}
                    />
                    <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Messages */
          <>
            <div className="flex-1 overflow-auto px-4 py-6">
              <div className="max-w-2xl mx-auto space-y-6">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-5 py-3 text-sm",
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "glass-card text-foreground"
                      )}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input bar */}
            <div className="border-t border-border/50 p-4">
              <div className="max-w-2xl mx-auto relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Message AIverse..."
                  className="w-full h-12 rounded-xl bg-secondary border border-border pl-5 pr-14 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;

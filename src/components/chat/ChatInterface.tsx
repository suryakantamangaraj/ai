"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Loader2, Eraser, Trash2 } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { ModelSelector, MODELS } from "./ModelSelector";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [selectedModelId, setSelectedModelId] = useState(MODELS[0].id);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleRefine = async () => {
    if (!input.trim() || isRefining) return;
    
    setIsRefining(true);
    try {
      const response = await fetch("/api/chat/refine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      
      const data = await response.json();
      if (data.refinedPrompt) {
        setInput(data.refinedPrompt);
      }
    } catch (error) {
      console.error("Refine failed:", error);
    } finally {
      setIsRefining(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Placeholder for AI message
    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: "assistant",
      content: "",
      createdAt: new Date(),
    };
    setMessages((prev) => [...prev, assistantMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          model: selectedModelId,
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const reader = response.body?.getReader();
      const decoder = new TextEncoder().decode(); // Actually TextDecoder
      const td = new TextDecoder();

      if (reader) {
        let accumulatedContent = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = td.decode(value, { stream: true });
          accumulatedContent += chunk;
          
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId
                ? { ...msg, content: accumulatedContent }
                : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Chat failed:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: "Error: Failed to connect to AI server. Please check your API key." }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
     if (confirm("Are you sure you want to clear current chat?")) {
        setMessages([]);
     }
  };

  return (
    <div className="flex flex-col h-[80vh] glass border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5 backdrop-blur-md z-10">
        <ModelSelector
          selectedModelId={selectedModelId}
          onSelect={setSelectedModelId}
        />
        <div className="flex items-center gap-3">
           <button
             onClick={clearChat}
             disabled={messages.length === 0}
             className="p-2.5 rounded-xl bg-white/5 text-muted hover:text-white hover:bg-rose-500/20 disabled:opacity-30 transition-all border border-transparent hover:border-rose-500/30"
           >
             <Trash2 className="h-4 w-4" />
           </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar scroll-smooth">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-12">
            <div className="h-20 w-20 rounded-3xl bg-brand/10 text-brand flex items-center justify-center mb-6 animate-pulse-glow">
              <Sparkles className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold mb-3 italic">Welcome to Surya Singularity Chat</h2>
            <p className="text-muted max-w-sm italic">
              Powered by Groq LPU for near-instant responses. Choose a model above and start chatting!
            </p>
          </div>
        ) : (
          messages.map((msg) => <ChatMessage key={msg.id} {...msg} />)
        )}
        {isLoading && messages[messages.length - 1]?.content === "" && (
          <div className="flex items-center gap-2 text-muted px-6 italic text-sm animate-pulse">
            <Loader2 className="h-4 w-4 animate-spin" />
            AI is thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 border-t border-white/5 bg-white/5">
        <div className="relative group">
          <textarea
            ref={textareaRef}
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="w-full pl-6 pr-32 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/40 transition-all text-sm resize-none min-h-[60px] max-h-[200px]"
            rows={1}
          />
          <div className="absolute right-2 bottom-2 flex items-center gap-2">
            <button
              onClick={handleRefine}
              disabled={!input.trim() || isRefining || isLoading}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase transition-all border ${
                isRefining
                  ? "bg-amber-500/20 text-amber-500 border-amber-500/30"
                  : "bg-white/5 text-muted hover:text-white hover:bg-white/10 border-transparent"
              }`}
              title="Refine prompt using AI"
            >
              {isRefining ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <Sparkles className="h-3 w-3" />
              )}
              Refine
            </button>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-xl bg-brand text-white shadow-glow hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="text-[10px] text-muted/50 mt-3 text-center italic">
          Surya AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}

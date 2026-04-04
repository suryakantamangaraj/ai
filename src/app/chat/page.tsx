import Link from "next/link";
import { ArrowLeft, Sparkles, MessageSquare, Terminal } from "lucide-react";
import type { Metadata } from "next";
import { ChatInterface } from "@/components/chat/ChatInterface";

export const metadata: Metadata = {
  title: "AI Chat | Surya Singularity",
  description:
    "Chat with open-source AI models through a unified interface. Switch between Llama, Mixtral, DeepSeek and more. Free, fast, and private.",
};

export default function ChatPage() {
  return (
    <div className="relative z-10 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute top-20 left-1/4 h-72 w-72 bg-brand/10 blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-40 right-1/4 h-80 w-80 bg-secondary/10 blur-[140px] -z-10 animate-pulse-slow delay-1000" />
      
      <div className="mx-auto max-w-7xl">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4">
               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                  <MessageSquare className="h-6 w-6" />
               </div>
               <div>
                  <h1 className="text-3xl font-extrabold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent italic">
                    Universal <span className="text-brand">AI Chat</span>
                  </h1>
                  <p className="text-sm text-muted italic">Powered by Groq LPU™ for lightning-fast inference.</p>
               </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-2xl border border-white/10 group hover:border-emerald-500/30 transition-all">
             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-xs font-bold text-muted group-hover:text-foreground">System Status: Online</span>
          </div>
        </div>

        {/* Chat Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           {/* Sidebar Info - Hidden on Mobile */}
           <div className="hidden lg:flex flex-col gap-6">
              <div className="glass p-6 rounded-3xl border border-white/5 space-y-6">
                 <div>
                    <h3 className="text-xs font-bold text-brand uppercase tracking-widest mb-4 flex items-center gap-2">
                       <Sparkles className="h-3 w-3" />
                       Chat Capabilities
                    </h3>
                    <ul className="space-y-3 text-xs text-muted leading-relaxed">
                       <li className="flex gap-2">
                          <span className="text-brand">•</span>
                          Zero-latency streaming with Groq
                       </li>
                       <li className="flex gap-2">
                          <span className="text-brand">•</span>
                          Support for markdown & code blocks
                       </li>
                       <li className="flex gap-2">
                          <span className="text-brand">•</span>
                          Switch models on the fly
                       </li>
                       <li className="flex gap-2">
                          <span className="text-brand">•</span>
                          AI prompt refinement
                       </li>
                    </ul>
                 </div>
                 <div className="h-px bg-white/5" />
                 <div>
                    <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                       <Terminal className="h-3 w-3" />
                       Usage Stats
                    </h3>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center text-[10px]">
                          <span className="text-muted">Inference Speed</span>
                          <span className="text-emerald-400 font-mono italic">~250 tokens/s</span>
                       </div>
                       <div className="flex justify-between items-center text-[10px]">
                          <span className="text-muted">Context Window</span>
                          <span className="text-white font-mono italic">Up to 32k</span>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="glass p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-brand/5 to-transparent">
                 <p className="text-[10px] text-muted leading-relaxed italic mb-4">
                    Your conversations are private and never stored on our servers. All processing happens in real-time.
                 </p>
                 <button className="w-full py-2 bg-white/5 rounded-xl text-[10px] font-bold text-muted hover:text-white transition-all uppercase tracking-widest">
                    Privacy Policy
                 </button>
              </div>
           </div>

           {/* Main Chat Interface */}
           <div className="lg:col-span-3">
              <ChatInterface />
           </div>
        </div>
      </div>
    </div>
  );
}

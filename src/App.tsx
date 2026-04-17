import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import Prompts from "./pages/Prompts";
import PromptsLearn from "./pages/PromptsLearn";
import PromptsGallery from "./pages/PromptsGallery";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/prompts" element={<Prompts />} />
            <Route path="/prompts-learn" element={<PromptsLearn />} />
            <Route path="/prompts-gallery" element={<PromptsGallery />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

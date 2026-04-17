import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import Prompts from "./pages/Prompts";
import PromptsLearn from "./pages/PromptsLearn";
import PromptsGallery from "./pages/PromptsGallery";
import PromptDetail from "./pages/PromptDetail";
import MyCollection from "./pages/MyCollection";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import Sponsors from "./pages/Sponsors";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
import { ProtectedRoute } from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/tool/:id" element={<ToolDetail />} />
                <Route path="/prompts" element={<Prompts />} />
                <Route path="/prompts-learn" element={<PromptsLearn />} />
                <Route path="/prompts-gallery" element={<PromptsGallery />} />
                <Route path="/prompt/:id" element={<PromptDetail />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/my-collection" element={<MyCollection />} />
                  <Route path="/feed" element={<Feed />} />
                  <Route path="/chat" element={<Chat />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

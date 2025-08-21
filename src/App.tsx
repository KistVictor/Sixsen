import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicos from "./pages/Servicos";
import Casos from "./pages/Casos";
import Sobre from "./pages/Sobre";
import Conteudos from "./pages/Conteudos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/common/WhatsAppFloat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark min-h-screen bg-background text-foreground">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/casos" element={<Casos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/conteudos" element={<Conteudos />} />
            <Route path="/contato" element={<Contato />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <WhatsAppFloat />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

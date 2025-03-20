
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Strategy from "./pages/Strategy";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import DigitalTransformation from "./pages/DigitalTransformation";
import PerformanceImprovement from "./pages/PerformanceImprovement";
import OurTeam from "./pages/OurTeam";
import FinancialServices from "./pages/FinancialServices";
import Healthcare from "./pages/Healthcare";
import Technology from "./pages/Technology";
import Manufacturing from "./pages/Manufacturing";
import Insights from "./pages/Insights";
import StrategyConsulting from "./pages/StrategyConsulting";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";
import QuestionPaperGenerator from "./pages/QuestionPaperGenerator";
import Template from "./pages/Template";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/digital" element={<DigitalTransformation />} />
          <Route path="/performance" element={<PerformanceImprovement />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/strategy-consulting" element={<StrategyConsulting />} />
          <Route path="/financial-services" element={<FinancialServices />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/question-paper" element={<QuestionPaperGenerator />} />
          <Route path="/template" element={<Template />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

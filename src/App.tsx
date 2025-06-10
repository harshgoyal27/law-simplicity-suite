
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Resources from "./pages/Resources";
import BookDemo from "./pages/BookDemo";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

// Product Pages
import PracticeManagement from "./pages/products/PracticeManagement";
import ClientIntake from "./pages/products/ClientIntake";
import LegalAccounting from "./pages/products/LegalAccounting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/demo" element={<BookDemo />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          
          {/* Product Pages */}
          <Route path="/products/practice-management" element={<PracticeManagement />} />
          <Route path="/products/client-intake" element={<ClientIntake />} />
          <Route path="/products/legal-accounting" element={<LegalAccounting />} />
          
          {/* Placeholder routes for other products - will redirect to main products page for now */}
          <Route path="/products/*" element={<Products />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

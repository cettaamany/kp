import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Exam from "./pages/Exam";
import Pricing from "./pages/Pricing";
import Partnership from "./pages/Partnership";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PlaceholderPage from "./pages/Placeholder";
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
          <Route path="/exam" element={<Exam />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={
              <PlaceholderPage
                title="Login"
                description="Access your account to continue your preparation journey."
              />
            }
          />
          <Route
            path="/support"
            element={
              <PlaceholderPage
                title="Support & Help"
                description="Find answers to your questions and get the help you need."
              />
            }
          />
          <Route
            path="/terms"
            element={
              <PlaceholderPage
                title="Terms & Privacy"
                description="Learn about our terms of service and privacy policy."
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

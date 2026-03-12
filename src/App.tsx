import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import Workshops from "./pages/Workshops";
import TestimonialsPage from "./pages/TestimonialsPage";
import ProgramDetail from "./pages/ProgramDetail";
import Pricing from "./pages/Pricing";
import Teachers from "./pages/Teachers";
import Brochure from "./pages/Brochure";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import YCB from "./pages/YCB";
import WellnessProgram from "./pages/WellnessProgram";
import ProgramsCardSection from "./components/ProgramsCardSection";
import ContactSection from "./pages/ContactSection";
import ScrollToTop from "./pages/ScrollToTop";
import { useState } from "react";
import FloatingWhatsAppButton from "./pages/FloatingWhatsappButton";

const queryClient = new QueryClient();

const App = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar selectedPost={selectedPost} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Index />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/workshops" element={<Workshops />} />
            {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/allprograms" element={<ProgramsCardSection />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
            <Route path="YCBcourse" element={<YCB />} />
            <Route path="wellnessprograms" element={<WellnessProgram />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>

          <Footer />
          <FloatingWhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

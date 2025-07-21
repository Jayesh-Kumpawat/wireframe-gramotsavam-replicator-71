import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LanguageSelection from "./pages/LanguageSelection";
import LoginOptions from "./pages/LoginOptions";
import PlayerSignup from "./pages/PlayerSignup";
import PlayerOTP from "./pages/PlayerOTP";
import PlayerDashboard from "./pages/PlayerDashboard";
import PlayerProfileCreation from "./pages/PlayerProfileCreation";
import PlayerAddress from "./pages/PlayerAddress";
import PlayerAadhar from "./pages/PlayerAadhar";
import PlayerSuccess from "./pages/PlayerSuccess";
import TeamCreation from "./pages/TeamCreation";
import VolunteerLogin from "./pages/VolunteerLogin";
import VolunteerOTP from "./pages/VolunteerOTP";
import VolunteerDashboard from "./pages/VolunteerDashboard";
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
          <Route path="/language" element={<LanguageSelection />} />
          <Route path="/login" element={<LoginOptions />} />
          <Route path="/player-signup" element={<PlayerSignup />} />
          <Route path="/player-otp" element={<PlayerOTP />} />
          <Route path="/player-dashboard" element={<PlayerDashboard />} />
          <Route path="/player-profile" element={<PlayerProfileCreation />} />
          <Route path="/player-address" element={<PlayerAddress />} />
          <Route path="/player-aadhar" element={<PlayerAadhar />} />
          <Route path="/player-success" element={<PlayerSuccess />} />
          <Route path="/team-creation" element={<TeamCreation />} />
          <Route path="/volunteer-login" element={<VolunteerLogin />} />
          <Route path="/volunteer-otp" element={<VolunteerOTP />} />
          <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

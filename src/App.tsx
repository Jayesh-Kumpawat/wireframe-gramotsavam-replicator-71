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
import PlayerNotifications from "./pages/PlayerNotifications";
import PlayerTeamDetails from "./pages/PlayerTeamDetails";
import PlayerMatches from "./pages/PlayerMatches";
import PlayerProfileView from "./pages/PlayerProfileView";
import PlayerProfileEdit from "./pages/PlayerProfileEdit";
import PlayerProfileCreation from "./pages/PlayerProfileCreation";
import PlayerAddress from "./pages/PlayerAddress";
import PlayerAadhar from "./pages/PlayerAadhar";
import PlayerSuccess from "./pages/PlayerSuccess";
import TeamCreation from "./pages/TeamCreation";
import TeamRegister from "./pages/TeamRegister";
import TeamAddManually from "./pages/TeamAddManually";
import AddTeamMember from "./pages/AddTeamMember";
import AddMemberAddress from "./pages/AddMemberAddress";
import AddMemberAadhar from "./pages/AddMemberAadhar";
import TeamSearch from "./pages/TeamSearch";
import TeamInvite from "./pages/TeamInvite";
import VolunteerLogin from "./pages/VolunteerLogin";
import VolunteerOTP from "./pages/VolunteerOTP";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import VolunteerMatches from "./pages/VolunteerMatches";
import VolunteerProfile from "./pages/VolunteerProfile";
import VolunteerNotifications from "./pages/VolunteerNotifications";
import MatchDetails from "./pages/MatchDetails";
import CreateMatch from "./pages/CreateMatch";
import VolunteerTeams from "./pages/VolunteerTeams";
import VolunteerMatchesSimple from "./pages/VolunteerMatchesSimple";
import POCDashboard from "./pages/POCDashboard";
import TeamDetails from "./pages/TeamDetails";
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
        <Route path="/player-notifications" element={<PlayerNotifications />} />
        <Route path="/player-team-details" element={<PlayerTeamDetails />} />
        <Route path="/player-matches" element={<PlayerMatches />} />
        <Route path="/player-profile-view" element={<PlayerProfileView />} />
        <Route path="/player-profile-edit" element={<PlayerProfileEdit />} />
          <Route path="/player-profile" element={<PlayerProfileCreation />} />
          <Route path="/player-address" element={<PlayerAddress />} />
          <Route path="/player-aadhar" element={<PlayerAadhar />} />
          <Route path="/player-success" element={<PlayerSuccess />} />
          <Route path="/team-creation" element={<TeamCreation />} />
          <Route path="/team-register" element={<TeamRegister />} />
          <Route path="/team-add-manually" element={<TeamAddManually />} />
          <Route path="/add-team-member" element={<AddTeamMember />} />
          <Route path="/add-member-address" element={<AddMemberAddress />} />
          <Route path="/add-member-aadhar" element={<AddMemberAadhar />} />
          <Route path="/team-search" element={<TeamSearch />} />
          <Route path="/team-invite" element={<TeamInvite />} />
          <Route path="/volunteer-login" element={<VolunteerLogin />} />
          <Route path="/volunteer-otp" element={<VolunteerOTP />} />
          <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
          <Route path="/poc-dashboard" element={<POCDashboard />} />
          <Route path="/volunteer-matches" element={<VolunteerMatches />} />
          <Route path="/volunteer-matches-simple" element={<VolunteerMatchesSimple />} />
          <Route path="/volunteer-profile" element={<VolunteerProfile />} />
          <Route path="/volunteer-notifications" element={<VolunteerNotifications />} />
          <Route path="/match-details/:matchId" element={<MatchDetails />} />
          <Route path="/create-match" element={<CreateMatch />} />
          <Route path="/volunteer-teams/:sport" element={<VolunteerTeams />} />
          <Route path="/team-details/:teamId" element={<TeamDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const LoginOptions = () => {
  const navigate = useNavigate();
  const handlePlayerLogin = () => {
    navigate("/player-signup");
  };
  const handleVolunteerLogin = () => {
    navigate("/volunteer-login");
  };
  return <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        {/* Back button */}
        <Button 
          onClick={() => navigate(-1)} 
          variant="ghost" 
          className="mb-4 p-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        {/* Login options container */}
        <div className="border-2 border-foreground rounded-lg p-8 mb-8 text-center">
          <h2 className="text-lg font-normal mb-6">Login</h2>
          
          <div className="space-y-4">
            <Button onClick={handlePlayerLogin} variant="outline" className="w-full px-6 py-3">
              Player Signup/Login
            </Button>
            
            <Button onClick={handleVolunteerLogin} variant="outline" className="w-full px-6 py-3">
              Volunteer/PoC/Admin Signup/Login
            </Button>
          </div>
        </div>
        
        {/* Arrows pointing right */}
        
      </div>
    </div>;
};
export default LoginOptions;
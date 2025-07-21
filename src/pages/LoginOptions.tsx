import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LoginOptions = () => {
  const navigate = useNavigate();

  const handlePlayerLogin = () => {
    // Navigate to player signup/login
    console.log("Player Signup/Login selected");
  };

  const handleVolunteerLogin = () => {
    // Navigate to volunteer/admin login
    console.log("Volunteer/Admin Login selected");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        {/* Login options container */}
        <div className="border-2 border-foreground rounded-lg p-8 mb-8 text-center">
          <h2 className="text-lg font-normal mb-6">Login</h2>
          
          <div className="space-y-4">
            <Button
              onClick={handlePlayerLogin}
              variant="outline"
              className="w-full px-6 py-3"
            >
              Player Signup/Login
            </Button>
            
            <Button
              onClick={handleVolunteerLogin}
              variant="outline"
              className="w-full px-6 py-3"
            >
              Volunteer/Admin Login
            </Button>
          </div>
        </div>
        
        {/* Arrows pointing right */}
        <div className="flex flex-col space-y-2 ml-auto mr-8">
          <div className="text-sm text-foreground">→ Player Signup/Login</div>
          <div className="text-sm text-foreground">→ Volunteer/Admin Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;
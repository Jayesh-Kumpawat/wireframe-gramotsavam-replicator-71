import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PlayerSuccess = () => {
  const navigate = useNavigate();

  const handleCreateTeam = () => {
    navigate("/team-creation");
  };

  const handleSkip = () => {
    navigate("/player-dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        <div className="border-2 border-foreground rounded-lg p-8 text-center">
          <div className="mb-8">
            <h2 className="text-lg font-normal mb-4">Profile successfully</h2>
            <h3 className="text-lg font-normal">created!</h3>
          </div>
          
          <div className="space-y-4">
            <Button
              onClick={handleCreateTeam}
              variant="outline"
              className="w-full"
            >
              Create Team
            </Button>

            <Button
              onClick={handleSkip}
              variant="outline"
              className="w-full"
            >
              Skip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSuccess;
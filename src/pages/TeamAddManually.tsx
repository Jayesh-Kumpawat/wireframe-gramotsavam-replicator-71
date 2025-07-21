import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const TeamAddManually = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sport, teamData } = location.state || {};

  const handleAddMemberManually = () => {
    navigate("/add-team-member", { state: { sport, teamData } });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto text-center">
        <h1 className="text-lg font-normal mb-8">Add member manually</h1>
        
        <Button
          onClick={handleAddMemberManually}
          variant="outline"
          className="w-full mb-4"
        >
          Add member manually
        </Button>

        <p className="text-xs text-foreground/70">
          Add a player who doesn't have this app yet
        </p>
      </div>
    </div>
  );
};

export default TeamAddManually;
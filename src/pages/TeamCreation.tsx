import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TeamCreation = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/player-dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto text-center">
        <h1 className="text-2xl font-normal mb-8">TEAM CREATION</h1>
        <p className="text-foreground/70 mb-8">Create your team here!</p>
        
        <Button
          onClick={handleComplete}
          variant="outline"
          className="w-full"
        >
          Complete Team Creation
        </Button>
      </div>
    </div>
  );
};

export default TeamCreation;
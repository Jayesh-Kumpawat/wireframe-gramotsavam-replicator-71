import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PlayerProfileCreation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto text-center">
        <h1 className="text-2xl font-normal mb-8">PLAYER PROFILE CREATION</h1>
        <p className="text-foreground/70 mb-8">Create your player profile here!</p>
        
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="w-full"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default PlayerProfileCreation;
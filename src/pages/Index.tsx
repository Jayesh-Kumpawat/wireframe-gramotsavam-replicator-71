import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        {/* Main container matching wireframe */}
        <div className="border-2 border-foreground rounded-lg p-8 mb-8 text-center">
          <h1 className="text-2xl font-normal mb-6">Gramotsavam</h1>
          <Button 
            onClick={() => navigate('/language')}
            variant="outline"
            className="px-6 py-2"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

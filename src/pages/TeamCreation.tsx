import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TeamCreation = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState("");

  const sports = [
    "Volleyball",
    "Throwball", 
    "Badminton",
    "Kho-Kho"
  ];

  const handleSportSelect = (sport: string) => {
    setSelectedSport(sport);
  };

  const handleRegisterTeam = () => {
    if (selectedSport) {
      navigate("/team-register", { state: { sport: selectedSport } });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        <div className="border-2 border-foreground rounded-lg p-8">
          <h2 className="text-lg font-normal mb-6 text-center">Select Sport</h2>
          
          <div className="space-y-3 mb-6">
            {sports.map((sport) => (
              <Button
                key={sport}
                onClick={() => handleSportSelect(sport)}
                variant="outline"
                className={`w-full ${
                  selectedSport === sport 
                    ? "bg-blue-200 border-blue-400" 
                    : ""
                }`}
              >
                {sport}
              </Button>
            ))}
          </div>

          <Button
            onClick={handleRegisterTeam}
            variant="outline"
            className="w-full"
            disabled={!selectedSport}
          >
            Register Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamCreation;
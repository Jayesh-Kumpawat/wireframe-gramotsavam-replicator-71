import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const VolunteerTeamCreation = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState("");
  const [captainDetails, setCaptainDetails] = useState({
    name: "",
    phone: "",
    email: ""
  });

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
    if (selectedSport && captainDetails.name && captainDetails.phone) {
      navigate("/team-register", { 
        state: { 
          sport: selectedSport,
          isVolunteer: true,
          captainDetails 
        } 
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        <div className="border-2 border-foreground rounded-lg p-8">
          {/* Back button */}
          <div className="flex items-center mb-6">
            <ArrowLeft 
              className="w-5 h-5 mr-2 cursor-pointer" 
              onClick={() => navigate(-1)}
            />
            <span className="text-sm">Back</span>
          </div>

          <h2 className="text-lg font-normal mb-6 text-center">Register New Team</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs block mb-2">Select Sport</label>
              <div className="space-y-2">
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
            </div>

            <div>
              <label className="text-xs block mb-2">Captain Details</label>
              <div className="space-y-3">
                <div>
                  <label className="text-xs block mb-1">Captain Name *</label>
                  <Input
                    value={captainDetails.name}
                    onChange={(e) => setCaptainDetails({...captainDetails, name: e.target.value})}
                    className="w-full h-8 text-sm"
                    placeholder="Enter captain's name"
                  />
                </div>
                <div>
                  <label className="text-xs block mb-1">Captain Phone *</label>
                  <Input
                    value={captainDetails.phone}
                    onChange={(e) => setCaptainDetails({...captainDetails, phone: e.target.value})}
                    className="w-full h-8 text-sm"
                    placeholder="Enter captain's phone"
                  />
                </div>
                <div>
                  <label className="text-xs block mb-1">Captain Email</label>
                  <Input
                    value={captainDetails.email}
                    onChange={(e) => setCaptainDetails({...captainDetails, email: e.target.value})}
                    className="w-full h-8 text-sm"
                    placeholder="Enter captain's email (optional)"
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={handleRegisterTeam}
              variant="outline"
              className="w-full mt-6"
              disabled={!selectedSport || !captainDetails.name || !captainDetails.phone}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerTeamCreation;